import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => (
  <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      {/* <img src={`https://robohash.org/${props.contact.name}.png`} className="card-img-top" alt="Jane Doe" width="100" /> */}
      <div className="card-body">
      <h5 className="card-title">{props.user.name}</h5>
        <p className="card-text">Department: {props.user.department}</p>
        {/* <p className="card-text">Sales Made: {props.user.sales.length} </p> */}
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