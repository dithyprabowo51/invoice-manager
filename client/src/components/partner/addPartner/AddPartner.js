import React from 'react'
import './AddPartner.css'

// Components
import FormAddPartner from './formAddPartner/FormAddPartner.js'

const AddPartner = (props) => {
  return (
    <div className="add-partner">
      <FormAddPartner
        setIsShowAddPartnerForm={props.setIsShowAddPartnerForm}
        page={props.page}
      />
    </div>
  )
}

export default AddPartner