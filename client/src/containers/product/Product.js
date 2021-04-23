import React, { useState, useEffect } from 'react'
import './Product.css'

// Components
import ButtonSearchProduct from '../../components/product/buttonSearchProduct/ButtonSearchProduct.js'
import ListProduct from '../../components/product/listProduct/ListProduct.js'
import AddProduct from '../../components/product/addProduct/AddProduct.js'
import Pagination from '../../components/product/pagination/Pagination.js'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/actions/product/fetchProducts.js'


const SendPayment = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.product.products)
  const isLoading = useSelector(state => state.loading.isLoading)

  const [isShowAddProduct, setIsShowAddProduct] = useState(false)
  const [isShowEditProduct, setIsShowEditProduct] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchProducts({
      page
    }))
    // eslint-disable-next-line
  }, [page])

  return (
    <div className="mt-3">
      <p style={{ fontWeight: '700', fontSize: '23px', color: '#3C5468' }}>All Products</p>
      <div className="d-flex justify-content-between pe-5" style={{ width: '100%' }}>
        <ButtonSearchProduct />
        <div className="me-5">
          <button onClick={() => setIsShowAddProduct(true)} className="btn btn-primary">Create New Product</button>
        </div>
      </div>
      {
        isLoading ?
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div className="pe-5 mt-5">
            <ListProduct
              setIsShowEditProduct={(value) => setIsShowAddProduct(value)}
              products={products}
              setPage={setPage}
              page={page}
            />
          </div>
      }
      <Pagination
        page={page}
        setPage={setPage}
        products={products}
      />
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