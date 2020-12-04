import React from 'react';
import SignUp from '../components/Signup';

const NewEmployee = (props) => {
  return (
    <div>
      <SignUp  setUser={props.setUser} />

    </div>
  );
}

export default NewEmployee;
