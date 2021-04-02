import React from 'react'
import './ListReceivePayment.css'

// Router
import { useHistory } from 'react-router-dom'

// Components
import PaymentId from './columnTitle/PaymentId.js'
import Client from './columnTitle/Client.js'
import PaymentStatus from './columnTitle/PaymentStatus.js'
import PaymentDate from './columnTitle/PaymentDate.js'
import PaymentAmount from './columnTitle/PaymentAmount.js'

const ListReceivePayment = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <PaymentId />
          </th>
          <th scope="col">
            <Client />
          </th>
          <th scope="col">
            <PaymentStatus />
          </th>
          <th scope="col">
            <PaymentDate />
          </th>
          <th scope="col">
            <PaymentAmount />
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
          <td>
            <div className="dropdown">
              <button className="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button onClick={() => handleChangePage('/payment/2')} className="dropdown-item">View Payment</button></li>
                <li><button className="dropdown-item">Delete</button></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListReceivePayment