import React from 'react';
import { Link } from 'react-router-dom';

const SalesCard = (props) => (
  <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
      <h5 className="card-title">Sales</h5>
        <p className="card-text">{props.sales}</p>
      </div>
    </div>
  </div>
);

export default SalesCard;