import React from 'react';
import SignUp from '../components/Signup';

const NewEmployee = (props) => {
  return (
    <div>
      <div className="registration-header">
      <h1>Welcome to Dunder Mifflin</h1>
      <h3>The World's Best Paper Company!</h3>
      </div>
      <SignUp  setUser={props.setUser} />

    </div>
  );
}

export default NewEmployee;
