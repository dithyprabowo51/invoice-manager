import React from 'react'
import './ListProduct.css'

// Components
import ProductName from './columnTitle/ProductName.js'
import ProductSku from './columnTitle/ProductSku.js'
import Stock from './columnTitle/Stock.js'

const ListProduct = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <ProductName />
          </th>
          <th scope="col">
            <ProductSku />
          </th>
          <th scope="col">
            <Stock />
          </th>
          <th>
            <div>Unit</div>
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
          <td>
            <div className="dropdown">
              <button className="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button onClick={() => props.setIsShowEditProduct(true)} className="dropdown-item">Edit</button></li>
                <li><button className="dropdown-item">Delete</button></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListProduct