import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/Navbar';
import BranchCard from '../components/BranchCard';
import HomePicture from '../components/HomePicture';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 className="welcome" style={{fontWeight: 900}}>Dunder Mifflinfinity</h1>
      {/* <BranchCard />
      <BranchCard />
      <BranchCard /> */}
      <div className="row">
        <Link to="/" className="office-location-column">
          <svg className="bd-placeholder-img card-img-top" width="10%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title></title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Stamford</text></svg>
        </Link>
        <Link to="/" className="office-location-column">
          <svg className="bd-placeholder-img card-img-top" width="10%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title></title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Scranton</text></svg>
        </Link>
        <Link to="/" className="office-location-column">
          <svg className="bd-placeholder-img card-img-top" width="10%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title></title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Dallas</text></svg>
        </Link>
      </div>

    </div>
  );
}

export default Home;
