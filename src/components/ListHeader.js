function ListHeader() {
  return (
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
  );
}

export default ListHeader;