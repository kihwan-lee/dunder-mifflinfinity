import React from 'react';

import NavBar from '../components/Navbar';
import BranchCard from '../components/BranchCard';
import HomePicture from '../components/HomePicture';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 className="welcome" style={{fontWeight: 900}}>Dunder Mifflinfinity</h1>
      <BranchCard />
      <BranchCard />
      <BranchCard />


    </div>
  );
}

export default Home;
