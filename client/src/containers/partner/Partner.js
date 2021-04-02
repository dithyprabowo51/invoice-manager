import React, { useState } from 'react'
import './Partner.css'

// Components
import ButtonSearchPartner from '../../components/partner/buttonSearchPartner/ButtonSearchPartner.js'
import ListPartner from '../../components/partner/listPartner/ListPartner.js'
import AddPartner from '../../components/partner/addPartner/AddPartner.js'

const Partner = () => {
  const [isShowAddPartnerForm, setIsShowAddPartnerForm] = useState(false)
  return (
    <div className="partner mt-3">
      <p style={{ fontWeight: '700', fontSize: '23px', color: '#3C5468' }}>All Partners</p>
      <div className="d-flex justify-content-between pe-5" style={{ width: '100%' }}>
        <ButtonSearchPartner />
        <div className="me-5">
          <button onClick={() => setIsShowAddPartnerForm(true)} className="btn btn-primary">Create New Partner</button>
        </div>
      </div>
      <div className="list-partner pe-5 mt-5">
        <ListPartner />
      </div>
      {
        isShowAddPartnerForm ?
          <div>
            <AddPartner
              setIsShowAddPartnerForm={(value) => setIsShowAddPartnerForm(value)}
            />
          </div>
          :
          null
      }
    </div>
  )
}

export default Partner