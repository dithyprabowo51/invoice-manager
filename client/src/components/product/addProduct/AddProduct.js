import React from 'react'
import './AddProduct.css'

// Components
import FormAddPartner from './formAddProduct/FormAddProduct.js'

const AddPartner = (props) => {
  return (
    <div className="add-product">
      <FormAddPartner
        setIsShowAddProduct={props.setIsShowAddProduct}
      />
    </div>
  )
}

export default AddPartner