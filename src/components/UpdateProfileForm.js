import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UpdateProfileForm = (props) => {
  let [name, setName ] = useState("")
  let [ department, setDepartment ] = useState("")
  let [ email, setEmail ] = useState("")
  let [ password, setPassword ] = useState("")

  let history = useHistory()

  const url = `http://localhost:4000/DunderMifflin/employees/${props.user._id}`

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(props)

    fetch(url, {
      method: "PUT",
      body: JSON.stringify({email, password, name, department}),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(user => {
      console.log(user)
      props.setUser(user.employee)
      history.push('/myProfile')
    })
  }

  const handleDelete = (event => {
    event.preventDefault()

    fetch(url, {
      method: "DELETE",
      body: JSON.stringify({email, password, name, department}),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(user => {
      console.log(user)
      history.push('/')
    })
  })


  return (
    <div>
      <form class="form-signup">
        <div className="form-row">
          <div className="form-group col-md-6">
              <label for="inputName4">Name</label>
              <input type="text" className="form-control" id="inputName4" placeholder={props.user.name} onChange={(e) => {setName(e.currentTarget.value)}} />
          </div>
          <div className="form-group col-md-6">
            <label for="inputDepartment4">Department</label>
            <input type="text" className="form-control" id="inputDepartment4" placeholder={props.user.department} onChange={(e) => {setDepartment(e.currentTarget.value)}} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder={props.user.email} onChange={(e) => {setEmail(e.currentTarget.value)}} />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder={props.user.password} onChange={(e) => {setPassword(e.currentTarget.value)}} />
          </div>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Finish Editing</button>
        <button onClick={handleDelete} type="submit" className="btn btn-primary">Delete Account</button>
      </form>
    </div>
  )
};

export default UpdateProfileForm;