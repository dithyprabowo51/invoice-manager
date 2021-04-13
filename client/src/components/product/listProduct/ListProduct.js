import React, { useState } from 'react'
import './ListProduct.css'

// Components
import ProductName from './columnTitle/ProductName.js'
import ProductSku from './columnTitle/ProductSku.js'
import Stock from './columnTitle/Stock.js'

// Redux
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../../redux/actions/product/fetchProducts.js'

const ListProduct = (props) => {
  const dispatch = useDispatch()

  const [product_name, setProduct_name] = useState('')
  const [_id, setId] = useState('')

  const handleFilterProducts = () => {
    dispatch(fetchProducts({
      product_name, _id
    }))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <ProductSku
              _id={_id}
              setId={setId}
              handleFilterProducts={handleFilterProducts}
              setPage={props.setPage}
            />
          </th>
          <th scope="col">
            <ProductName
              product_name={product_name}
              setProduct_name={setProduct_name}
              handleFilterProducts={handleFilterProducts}
              setPage={props.setPage}
            />
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
        {
          props.products.map(product => {
            return (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.product_name}</td>
                <td>{product.stock}</td>
                <td>{product.unit}</td>
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
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ListProduct