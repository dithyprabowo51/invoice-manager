import React from 'react'
import './AddSalesInvoice.css'

const AddSalesInvoice = () => {
  return (
    <div className="add-sales-invoice">
      <p style={{ fontWeight: '700', fontSize: '18px', color: '#3C5468' }}>Create Sales Invoice</p>
      <div className="container-form-add-invoice">
        <div className="row justify-content-between my-4">
          <div className="col me-2">
            <label>Currency</label>
            <br />
            <input type="text" />
          </div>
          <div className="col ms-2">
            <label>Invoice Date</label>
            <br />
            <input type="date" />
          </div>
        </div>
        <div className="row justify-content-between my-4">
          <div className="col me-2">
            <label>Client</label>
            <br />
            <select>
              <option value="Adit">Adit</option>
            </select>
          </div>
          <div className="col ms-2">
            <label>Due Date</label>
            <br />
            <input type="date" />
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
                <th scope="col"></th>
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
                  <i className="fas fa-minus-square text-danger" style={{ fontSize: '20px', marginTop: '7px' }}></i>
                </td>
                <td>
                  <select style={{ marginTop: '13px' }}>
                    <option value="">=== Select Product ===</option>
                  </select>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-minus-square text-danger" style={{ fontSize: '20px', marginTop: '7px' }}></i>
                </td>
                <td>
                  <select style={{ marginTop: '13px' }}>
                    <option value="">=== Select Product ===</option>
                  </select>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
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
    </div>
  )
}

export default AddSalesInvoice