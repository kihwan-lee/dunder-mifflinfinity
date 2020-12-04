import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Card from '../components/ProfileCard';
import SalesCard from '../components/ProfileSales';


const MyProfile = (props) => {
  // let [ employees, setEmployees ] = useState({})
  // const employeeId = (props.match.url.split('/')[2])


  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json()
  //   .then(emps => {
  //     setEmployees(emps);
  //   }))
  // }, [])

  if (!props.user) {
    return <Redirect to='/' />
  }
  console.log(props)



  return (
    <div>
      <h1>My Profile</h1>
      <NavBar />
      <Card user={props.user} /> 
      <SalesCard sale={props.user.sales} />
    </div>
  );
}

export default MyProfile;