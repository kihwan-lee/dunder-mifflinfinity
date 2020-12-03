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
}

export default EmployeeModel;