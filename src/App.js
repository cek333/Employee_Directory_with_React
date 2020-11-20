function App() {
  return (
    <>
      <header className="container-fluid text-center bg-secondary pb-1 mb-2">
        <h1>Employee Directory</h1>
        <p>Click on the <code className="font-weight-bold text-body">Name</code> field title to toggle sorting.</p>
        <p>Use the input box above the <code className="font-weight-bold text-body">Name</code> field to filter the Employees' names.</p>
      </header>
      <main className="container">
        <section className="row mb-1">
          {/* Search Bar */}
          <div className="col-4 col-lg-2"></div>
          <div className="col-8 col-lg-3">
            <input placeholder="Filter Name" />
          </div>
          <div className="d-none d-lg-block col-lg-7"></div>
        </section>
        <section>
          <div className="row employee-header">
            <p className="col-4 col-lg-2 font-weight-bold">Image</p>
            <p className="col-8 col-lg-3 font-weight-bold sort-field" data-sort="none">
              <span>Name </span>
              <span><i className="fas fa-sort sort-none"></i></span>
            </p>
            <p className="d-none d-lg-block col-lg-2 font-weight-bold">Phone</p>
            <p className="d-none d-lg-block col-lg-3 font-weight-bold">Email</p>
            <p className="d-none d-lg-block col-lg-2 font-weight-bold">Date-of-Birth</p>
          </div>
          <div className="employee-list">
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
