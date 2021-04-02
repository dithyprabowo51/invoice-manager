import React from 'react'
import './FormAddProduct.css'

const FormAddPartner = (props) => {
  const handleCancel = () => {
    props.setIsShowAddProduct(false)
  }
  return (
    <div className="form-add-product">
      <h4 className="text-center">Create New Product</h4>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Product Name <sup className="text-danger">*</sup></label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Unit</label>
          <input type="text" className="form-control" />
        </div>
        <div className="text-center mt-4">
          <button onClick={handleCancel} className="btn btn-danger mx-1" type="button">Cancel</button>
          <button className="btn btn-primary mx-1" type="submit">Save Product</button>
        </div>
      </form>
    </div>
  )
}

export default FormAddPartner