import React, { useState } from 'react';
import EmployeeModel from '../models/Employees';
import { useHistory } from 'react-router-dom';


const SignUp = (props) => {
  let [email, setEmail ] = useState("")
  let [ name, setName ] = useState("")
  let [ department, setDepartment ] = useState("")
  let [ password, setPassword ] = useState("")
  let history = useHistory()

  const nameChange = (event) => {
    setName(event.target.value);
  }

  const emailChange = (event) => {
    setEmail(event.target.value);
  }

  const passwordChange = (event) => {
    setPassword(event.target.value);
  }

  const departmentChange = (event) => {
    setDepartment(event.target.value);
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      department: department
    }
    EmployeeModel.create(user)
      .then((res) => {
      console.log(res)
      props.setUser(res.employee)
      history.push(`myProfile/${res.employee._id}`);
      });
  }


    return (
    <div>
      <form class="form-signup" >
        <div className="form-row">
          <div className="form-group col-md-6">
              <label for="inputName4">Name</label>
              <input type="text" className="form-control" id="inputName4" placeholder="Name" onChange={nameChange}/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputDepartment4">Department</label>
            <input type="text" className="form-control" id="inputDepartment4" placeholder="Department" onChange={departmentChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email address" onChange={emailChange}/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={passwordChange}/>
          </div>
        </div>
        <button  onClick={handleFormSubmit} type="submit" className="btn btn-primary">Make An Account</button>
      </form>
    </div>
    )
  }

export default SignUp;