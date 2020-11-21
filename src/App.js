import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ListHeader from './components/ListHeader';
import List from './components/List';
import employeeData from './data'; // for testing

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOpt, setSortOpt] = useState('none');

  useEffect(function() {
    setEmployeeList(employeeData.results);
    // setDisplayList(employeeData.results);
  }, []);

  function handleInputChange(evt) {
    setFilter(evt.target.value);
  }

  function toggleSort(evt) {
    // Event should bubble up to <p> tag (if heading/icon clicked)
    // console.log('[toggleSort]', evt.target.nodeName, evt.currentTarget.nodeName);
    if (evt.currentTarget.nodeName.toLowerCase() === 'p') {
      let curSortOpt = evt.currentTarget.dataset.sort;
      let newSortOpt;
      if (curSortOpt === 'none') {
        newSortOpt = "asc";
      } else if (curSortOpt === 'asc') {
        newSortOpt = 'desc';
      } else if (curSortOpt === 'desc') {
        newSortOpt = 'none';
      } else {
        newSortOpt = 'none';
      }
      setSortOpt(newSortOpt);
    }
  }

  useEffect(function() {
    function applyFilter(list) {
      if (filter.trim() === '') return list;
      return list.filter(e => e.name.first.toLowerCase().indexOf(filter.toLowerCase())>-1 ||
                              e.name.last.toLowerCase().indexOf(filter.toLowerCase())>-1);
    }

    function applySort(list) {
      if (sortOpt === 'none') {
        return list;
      } else {
        return list.concat().sort(function(a, b) {
          let aVal = `${a.name.first} ${a.name.last}`;
          let bVal = `${b.name.first} ${b.name.last}`;
          if (sortOpt === 'asc') {
            return (aVal===bVal ? 0 : aVal < bVal ? -1 : 1);
          } else { // 'desc'
            return (aVal===bVal ? 0 : aVal < bVal ? 1 : -1)
          }
        });
      }
    }
    // console.log(`[useEffect] sort(${sortOpt}) & filter(${filter})`);
    // re-generate employee list if sort or filter changes
    let filtered = applyFilter(employeeList);
    let sortedFiltered = applySort(filtered);
    setDisplayList(sortedFiltered);
  }, [sortOpt, filter, employeeList]);

  return (
    <>
      <Header />
      <main className="container">
        <section className="row mb-1">
          <FilterBar value={filter} onChange={handleInputChange} />
        </section>
        <section>
          <ListHeader sortOpt={sortOpt} onClick={toggleSort} />
          <List list={displayList}/>
        </section>
      </main>
    </>
  );
}

export default App;
