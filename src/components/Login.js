import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';


const url = "http://localhost:4000/DunderMifflin/auth/login"

const LoginForm = (props) => {
  let [email, setEmail ] = useState("")
  let [ password, setPassword ] = useState("")
  let history = useHistory()


  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(url, {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then((user, err) => {
      if (user.employee !== null) {
        console.log(user.employee)
        props.setUser(user.employee)
        history.push('/home')
      } else {
          console.log(err)
          history.push('/')
      }
  })
  }

  console.log("log in props", props)


  return (
  <form class="form-signin" >
    <img class="mb-4" src={logo} alt="" width="72" height="72"/>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input 
      type="email" 
      id="inputEmail" 
      class="form-control" 
      placeholder="Email address" 
      required="" 
      autofocus="" 
      onChange={(e) => {setEmail(e.currentTarget.value)}} 
    />
    <label for="inputPassword" class="sr-only">Password</label>
    <input 
      type="password" 
      id="inputPassword" 
      class="form-control" 
      placeholder="Password" 
      required="" 
      onChange={(e) => {setPassword(e.currentTarget.value)}}
    />
    <Link to='/newEmployee'class="btn btn-lg btn-primary btn-block" type="submit">New Employee</Link>    
    <button onClick={handleSubmit} class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  </form>
  )
};

export default LoginForm;