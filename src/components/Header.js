function Header() {
  return (
    <header className="container-fluid text-center bg-secondary pb-1 mb-2">
      <h1>Employee Directory</h1>
      <p>Click on the <code className="font-weight-bold text-body">Name</code> field title to toggle sorting.</p>
      <p>Use the input box above the <code className="font-weight-bold text-body">Name</code> field to filter the Employees' names.</p>
    </header>
  );
}

export default Header;