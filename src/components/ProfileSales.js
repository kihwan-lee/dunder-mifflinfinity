import React from 'react';
import { Link } from 'react-router-dom';

const SalesCard = (props) => (
  <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      {/* <img src={`https://robohash.org/${props.contact.name}.png`} className="card-img-top" alt="Jane Doe" width="100" /> */}
      <div className="card-body">
      <h5 className="card-title">Sales</h5>
        {/* <p className="card-text">{props.user.sales.customer}</p> */}
      </div>
    </div>
  </div>
);

export default SalesCard;