import React from 'react';

import UpdateProfileForm from '../components/UpdateProfileForm';
import NavBar from '../components/Navbar';

const UpdateProfile = (props) => {
  return (
    <div>
      <NavBar />
      <UpdateProfileForm user={props.user} setUser={props.setUser} />




    </div>
  );
}

export default UpdateProfile;
