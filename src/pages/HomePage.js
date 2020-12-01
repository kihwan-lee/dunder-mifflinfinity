import React from 'react';

import NavBar from '../components/Navbar';
import BranchCard from '../components/BranchCard';
import HomePicture from '../components/HomePicture';
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavBar />
      <HomePicture />
      <BranchCard />
      <BranchCard />
      <BranchCard />


    </div>
  );
}

export default Home;
