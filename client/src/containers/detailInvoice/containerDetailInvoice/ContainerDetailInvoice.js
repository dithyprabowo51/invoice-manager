import React from 'react'
import './ContainerDetailInvoice.css'

const ContainerDetailInvoice = () => {
  return (
    <div className="container-detail-invoice" style={{ marginTop: '50px' }}>
      <div className="row justify-content-end">
        <div className="col-3 me-3">
          <p className="text-info text-end" style={{ fontSize: '20px', marginTop: '30px' }}>Invoice</p>
          <div className="row">
            <div className="col">Reference</div>
            <div className="col text-end">INV/ID</div>
          </div>
          <div className="row">
            <div className="col">Date</div>
            <div className="col text-end">02/04/2021</div>
          </div>
          <div className="row">
            <div className="col">Due Date</div>
            <div className="col text-end">02/04/2021</div>
          </div>
          <div className="row">
            <div className="col">Invoice Status</div>
            <div className="col text-end text-warning">Unpaid</div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between" style={{ marginTop: '60px' }}>
        <div className="col">
          <p style={{ fontSize: '20px', color: '#327EAC' }}>Our Information</p>
          <hr />
          <p style={{ fontSize: '20px', color: '#327EAC' }}>Adityo Prabowo</p>
        </div>
        <div className="col">
          <p style={{ fontSize: '20px', color: '#327EAC' }}>Client Information</p>
          <hr />
        </div>
      </div>
      <div className="row" style={{ marginTop: '20px' }}>
        <table className="table table-borderless">
          <thead className="bg-dark text-light">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input readOnly type="text" />
              </td>
              <td>
                <input readOnly type="text" />
              </td>
              <td>
                <input readOnly type="number" />
              </td>
              <td>
                <input readOnly type="number" />
              </td>
              <td>
                <input readOnly type="number" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button className="btn btn-success">Add Line</button>
      </div>
      <div className="row justify-content-end" style={{ fontSize: '14px' }}>
        <div className="col-5">
          <div className="row justify-content-between my-2">
            <div className="col">Subtotal</div>
            <div className="col-3 me-5">Rp1.000.000</div>
          </div>
          <div className="row justify-content-between my-2">
            <div className="col">Total Discount</div>
            <div className="col-3 me-5">Rp0.00</div>
          </div>
          <div className="row justify-content-between my-2">
            <div className="col">Total</div>
            <div className="col-3 me-5">Rp1.000.000</div>
          </div>
          <div className="row justify-content-center my-5">
            <div className="text-center">Sumedang, 2 April 2021</div>
            <div className="text-center" style={{ marginTop: '60px' }}>Manager</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerDetailInvoice