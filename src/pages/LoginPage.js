import React from 'react';

import LoginForm from '../components/Login';

const Login = (props) => {
  return (
    <div>
      <LoginForm setUser={props.setUser} />
    </div>
  );
}

export default Login;
