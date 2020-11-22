const API = {
  getEmployees: function(cb) {
    const url = 'https://randomuser.me/api/?nat=ca&inc=name,phone,email,dob,picture&results=50';
    fetch(url)
    .then(res => res.json())
    .then(res => cb(res.results))
    .catch(cb([]));
  }
}

export default API;
