import React from 'react'
import './ListPartner.css'

// Components
import PartnerId from './columnTitle/PartnerId.js'
import PartnerName from './columnTitle/PartnerName.js'
import PartnerType from './columnTitle/PartnerType.js'
import PartnerEmail from './columnTitle/PartnerEmail.js'
import PartnerPhone from './columnTitle/PartnerPhone.js'
import PartnerCountry from './columnTitle/PartnerCountry.js'

const ListPartner = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <PartnerId />
          </th>
          <th scope="col">
            <PartnerName />
          </th>
          <th scope="col">
            <PartnerType />
          </th>
          <th scope="col">
            <PartnerEmail />
          </th>
          <th scope="col">
            <PartnerPhone />
          </th>
          <th scope="col">
            <PartnerCountry />
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
          <td>
            <div className="dropdown">
              <button className="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button className="dropdown-item">Edit</button></li>
                <li><button className="dropdown-item">Delete</button></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListPartner