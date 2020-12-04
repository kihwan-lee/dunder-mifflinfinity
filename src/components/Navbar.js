import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'

const NavBar = (props) => {
  return (
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <Link  class="navbar-brand" to="/home"><img className="logo" src={logo} alt="logo"/></Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample04">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/myProfile">My Profile <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item active">
          <Link class="nav-link" to="/">Sign Out <span class="sr-only">(current)</span></Link>
        </li>
      </ul>
    </div>
  </nav>
  )
};

export default NavBar;
