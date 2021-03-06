import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Card from '../components/ProfileCard';
import SalesCard from '../components/ProfileSales';
import QuotesCard from '../components/QuotesCard';


const MyProfile = (props) => {

  if (!props.user) {
    return <Redirect to='/' />
  }
  console.log(props)



  return (
    <div>
      <NavBar />
      <Card user={props.user}  /> 
      <SalesCard user={props.user} />
      <QuotesCard />
    </div>
  );
}

export default MyProfile;