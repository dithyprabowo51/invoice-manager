import React, { useState } from 'react'
import './FormAddProduct.css'

// Redux
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../../redux/actions/product/addProduct.js'

const FormAddPartner = (props) => {
  const dispatch = useDispatch()

  const [product_name, setProduct_name] = useState('')
  const [unit, setUnit] = useState('')

  const handleCancel = () => {
    props.setIsShowAddProduct(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(addProduct({
      product_name, unit
    }))
    props.setIsShowAddProduct(false)
  }
  return (
    <div className="form-add-product">
      <h4 className="text-center">Create New Product</h4>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name <sup className="text-danger">*</sup></label>
          <input
            type="text"
            className="form-control"
            value={product_name}
            onChange={event => setProduct_name(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Unit</label>
          <input
            type="text"
            className="form-control"
            value={unit}
            onChange={event => setUnit(event.target.value)}
          />
        </div>
        <div className="text-center mt-4">
          <button onClick={handleCancel} className="btn btn-danger mx-1" type="button">Cancel</button>
          <button
            className="btn btn-primary mx-1"
            type="submit"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormAddPartner