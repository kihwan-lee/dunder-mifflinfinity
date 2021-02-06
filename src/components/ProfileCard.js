import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => (
  <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
      <h3 className="card-title"><strong>{props.user.name}</strong></h3>
        <p className="card-text">Department: {props.user.department}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link to= "/editMyProfile" className="btn btn-primary float-right">Edit Profile
            </Link>
            <Link to="/makeSale"className="btn btn-primary float-right">Record a Sale
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;