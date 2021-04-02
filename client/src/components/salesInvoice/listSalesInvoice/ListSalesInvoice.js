import React from 'react'
import './ListSalesInvoice.css'

// Router
import { useHistory } from 'react-router-dom'

// Components
import SalesInvoiceId from './columnTitle/SalesInvoiceId.js'
import Client from './columnTitle/Client.js'
import SalesInvoiceStatus from './columnTitle/SalesInvoiceStatus'
import DeliveryStatus from './columnTitle/DeliveryStatus.js'
import InvoiceAmount from './columnTitle/InvoiceAmount.js'

const ListSalesInvoice = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <SalesInvoiceId />
          </th>
          <th scope="col">
            <Client />
          </th>
          <th scope="col">
            <SalesInvoiceStatus />
          </th>
          <th scope="col">
            <DeliveryStatus />
          </th>
          <th scope="col">
            <InvoiceAmount />
          </th>
          <th>
            <div>Invoice Date</div>
            <div style={{ width: '5px', height: '30px' }}></div>
          </th>
          <th>
            <div>Due Date</div>
            <div style={{ width: '5px', height: '30px' }}></div>
          </th>
          <th>
            <div>Action</div>
            <div style={{ width: '5px', height: '30px' }}></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>mdo</td>
          <td>mdo</td>
          <td>mdo</td>
          <td>mdo</td>
          <td>
            <div className="dropdown">
              <button className="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button onClick={() => handleChangePage('/invoice/2')} className="dropdown-item">View Invoice</button></li>
                <li><button className="dropdown-item">Delete</button></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListSalesInvoice