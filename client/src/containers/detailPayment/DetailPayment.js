import React from 'react'
import './DetailPayment'

// Components
import HeaderDetailPayment from '../../components/detailPayment/headerDetailPayment/HeaderDetailPayment.js'
import ContainerDetailPayment from '../../components/detailPayment/containerDetailPayment/ContainerDetailPayment.js'

const DetailPayment = () => {
  return (
    <div className="detail-payment mt-4">
      <div style={{ fontSize: '25px' }}>
        <i className="far fa-file-alt"></i> Payment PYI_ID
      </div>
      <HeaderDetailPayment />
      <ContainerDetailPayment />
    </div>
  )
}

export default DetailPayment