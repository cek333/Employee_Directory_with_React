function FilterBar() {
  return (
    <>
      <div className="col-4 col-lg-2"></div>
      <div className="col-8 col-lg-3">
        <input placeholder="Filter Name" />
      </div>
      <div className="d-none d-lg-block col-lg-7"></div>
    </>
  );
}

export default FilterBar;
