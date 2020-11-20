import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ListHeader from './components/ListHeader';
import List from './components/List';
import employeeData from './data';

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  useEffect(function() {
    setEmployeeList(employeeData.results);
    setDisplayList(employeeData.results);
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section className="row mb-1">
          <FilterBar />
        </section>
        <section>
          <ListHeader />
          <List list={displayList}/>
        </section>
      </main>
    </>
  );
}

export default App;
