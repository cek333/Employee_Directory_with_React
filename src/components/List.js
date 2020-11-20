function List(props) {
  let thumbnail, first, last, phone, email, date;
  return (
    <div className="employee-list">
      {props.list.map((employee, idx) => {
        // extract fields from data
        ({picture:{thumbnail}, dob:{date}, email, name:{first,last}, phone} = employee);
        return (
          <div className={`row ${idx%2===0 ? 'bg-secondary' : ''}`} key={phone}>
            <div className="col-4 col-lg-2">
              <img alt="thumbnail" src={thumbnail} />
            </div>
            <p className="col-8 col-lg-3 ">{first} {last}</p>
            <p className="d-none d-lg-block col-lg-2">{phone}</p>
            <p className="d-none d-lg-block col-lg-3">{email}</p>
            <p className="d-none d-lg-block col-lg-2">{new Date(date).toLocaleDateString()}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;