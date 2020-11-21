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
    setDisplayList(employeeData.results);
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
