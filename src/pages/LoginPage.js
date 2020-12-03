import React from 'react';

import LoginForm from '../components/Login';

const Login = (props) => {
  return (
    <div>
      <h1>Log In</h1>
      <LoginForm setUser={props.setUser} />
    </div>
  );
}

export default Login;
