import React from 'react'
import './EditPartner.css'

// Components
import FormEditPartner from './formEditPartner/FormEditPartner.js'

const EditPartner = (props) => {
  return (
    <div className="add-partner">
      <FormEditPartner
        setIsShowEditPartnerForm={props.setIsShowEditPartnerForm}
      />
    </div>
  )
}

export default EditPartner