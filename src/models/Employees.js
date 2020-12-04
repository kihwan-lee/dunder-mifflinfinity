const url = 'http://localhost:4000/DunderMifflin/employees'

class EmployeeModel {
  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in EmployeeModel.getOne', err);
        return { user: [] };
      });
  }

  static create(newEmployee) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in EmployeeModel.create', err);
      return { user: {} };
    });
  }
}

export default EmployeeModel;