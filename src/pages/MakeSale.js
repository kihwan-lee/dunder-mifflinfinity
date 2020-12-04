import React from 'react';
import RecordSale from '../components/RecordSale';

const MakeSale = (props) => {
  return (
    <div>
      <h1>Record A Sale</h1>
      <RecordSale user={props.user} setUser={props.setUser} sale={props.sale} setSale={props.setSale}  />
    </div>
  )
}

export default MakeSale;