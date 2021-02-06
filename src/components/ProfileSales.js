import React from 'react';
import { Link } from 'react-router-dom';

const SalesCard = (props) => (
  <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h3 className="card-title"><strong>Sales</strong></h3>
        <Link to="/" type="submit" className="btn btn-primary">See All Sales</Link>
      </div>
    </div>
  </div>
);

export default SalesCard;