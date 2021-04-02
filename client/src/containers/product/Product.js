import React, { useState } from 'react'
import './Product.css'

// Components
import ButtonSearchProduct from '../../components/product/buttonSearchProduct/ButtonSearchProduct.js'
import ListProduct from '../../components/product/listProduct/ListProduct.js'
import AddProduct from '../../components/product/addProduct/AddProduct.js'


const SendPayment = () => {
  const [isShowAddProduct, setIsShowAddProduct] = useState(false)
  const [isShowEditProduct, setIsShowEditProduct] = useState(false)
  return (
    <div className="mt-3">
      <p style={{ fontWeight: '700', fontSize: '23px', color: '#3C5468' }}>All Products</p>
      <div className="d-flex justify-content-between pe-5" style={{ width: '100%' }}>
        <ButtonSearchProduct />
        <div className="me-5">
          <button onClick={() => setIsShowAddProduct(true)} className="btn btn-primary">Create New Product</button>
        </div>
      </div>
      <div className="pe-5 mt-5">
        <ListProduct
          setIsShowEditProduct={(value) => setIsShowAddProduct(value)}
        />
      </div>
      {
        isShowAddProduct ?
          <div>
            <AddProduct setIsShowAddProduct={value => setIsShowAddProduct(value)} />
          </div>
          :
          null
      }
      {
        isShowEditProduct ?
          <div>
            <AddProduct setIsShowEditProduct={value => setIsShowEditProduct(value)} />
          </div>
          :
          null
      }
    </div>
  )
}

export default SendPayment