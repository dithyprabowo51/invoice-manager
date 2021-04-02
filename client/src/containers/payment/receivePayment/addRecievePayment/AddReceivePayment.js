import React from 'react'
import './AddReceivePayment.css'

// Router
import { useHistory } from 'react-router-dom'

const AddReceivePayment = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <div className="add-receive-payment">
      <p style={{ fontSize: '22px', color: '#637685', fontWeight: '700' }}>Receive Payment for Invoices</p>
      <hr />
      <form>
        <div className="mt-4">
          <label>Payment From</label>
          <select className="mx-3">
            <option value="">=== Select Client ===</option>
            <option value="Adit">Adit</option>
          </select>
        </div>
        <div className="row mt-4" style={{ fontSize: '12px' }}>
          <div className="col-3">
            <label className="mb-2">Date</label>
            <br />
            <input type="date" />
          </div>
          <div className="col-3">
            <label className="mb-2">Payment Method</label>
            <br />
            <select style={{ width: '70%' }}>
              <option value="cash">Cash</option>
            </select>
          </div>
          <div className="col-3">
            <label className="mb-2">Notes</label>
            <br />
            <input type="text" />
          </div>
        </div>
        <div className="mt-5">
          <p style={{ fontSize: '16px', color: '#637685', fontWeight: '700' }}>To Invoices:</p>
          <table className="table" style={{ fontSize: '13px' }}>
            <thead className="bg-dark text-light">
              <tr>
                <th scope="col">Invoice ID</th>
                <th scope="col">Client</th>
                <th scope="col">Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>mdo</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button className="btn btn-primary btn-sm" type="button">Choose Sales Invoice</button>
          </div>
          <div className="row justify-content-end me-5">
            <div className="col-3">
              <div className="row justify-content-between">
                <div className="col">Total Amount Paid</div>
                <div className="col-3">Rp1.000.000</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button onClick={() => handleChangePage('/invoicer/receive-payment')} className="btn btn-danger mx-2" type="button">Cancel</button>
            <button className="btn btn-primary mx-2" type="submit">Save Payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddReceivePayment