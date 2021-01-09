import React from 'react';
import { Link } from 'react-router-dom';

const SalesCard = (props) => (
  <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h3 className="card-title"><strong>Sales</strong></h3>
        <Link to="/" type="submit" className="btn btn-primary">See All Sales</Link>
        {/* <p className="card-text">{props.user.sales[0]}</p> */}
      </div>
    </div>
  </div>
);

export default SalesCard;