import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import SalesModel from '../models/Sales'

const RecordSale = (props) => {
  let [ amountOfPaper, setAmountOfPaper ] = useState("")
  let [ customer, setCustomer ] = useState("")
  let [ profit, setProfit ] = useState("")
  let history = useHistory()

  const amountOfPaperChange = (event) => {
    setAmountOfPaper(event.target.value);
  }

  const customerChange = (event) => {
    setCustomer(event.target.value);
  }

  const profitChange = (event) => {
    setProfit(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const sale = {
      amountOfPaper: amountOfPaper,
      customer: customer,
      profit: profit,
      employee: props.user._id
    }
    SalesModel.create(sale)
    .then((res) => {
      console.log(res)
      props.setUser(props.user)
      history.push(`myProfile/${props.user._id}`);
    });
  }

  return (
    <div>
      <form class="form-signup" onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
              <label for="inputName4">Customer</label>
              <input type="text" className="form-control" id="inputCustomer4" placeholder="Customer" onChange={customerChange}/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputDepartment4">Amount of Paper</label>
            <input type="text" className="form-control" id="inputamountOfPaper4" placeholder="Reams of Paper" onChange={amountOfPaperChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Profit</label>
            <input type="number" className="form-control" id="inputProfit4" placeholder="Profit" onChange={profitChange}/>
          </div>
        </div>
        <Link to="/myProfile" type="submit" className="btn btn-primary">Make A Sale</Link>
        <Link to="/myProfile" type="submit" className="btn btn-primary">Go Back</Link>

      </form>
    </div>
  )
}

export default RecordSale;