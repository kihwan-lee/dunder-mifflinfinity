import React from 'react';
import SignUp from '../components/Signup';

const NewEmployee = (props) => {
  return (
    <div>
      <h1>New Employee</h1>
      <SignUp  setUser={props.setUser} />

    </div>
  );
}

export default NewEmployee;
