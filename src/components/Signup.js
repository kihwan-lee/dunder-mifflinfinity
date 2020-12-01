import React from 'react';

const SignUp = () => {
  return (
  <div>
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
            <label for="inputName4">Name</label>
            <input type="text" className="form-control" id="inputName4" placeholder="Name"/>
        </div>
        <div className="form-group col-md-6">
          <label for="inputDepartment4">Department</label>
          <input type="text" className="form-control" id="inputDepartment4" placeholder="Department"/>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email address"/>
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Make An Account</button>
    </form>
  </div>
  )
};

export default SignUp;