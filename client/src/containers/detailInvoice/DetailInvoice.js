import React from 'react'
import './DetailInvoice.css'

// Components
import HeaderDetailInvoice from '../../components/detailInvoice/headerDetailInvoice/HeaderDetailInvoice.js'
import ContainerDetailInvoice from './containerDetailInvoice/ContainerDetailInvoice.js'

const DetailInvoice = () => {
  return (
    <div className="mt-4">
      <div style={{ fontSize: '25px' }}>
        <i className="far fa-file-alt"></i> Invoice INV_ID <button className="btn btn-sm btn-warning">Unpaid</button>
      </div>
      <HeaderDetailInvoice />
      <ContainerDetailInvoice />
    </div>
  )
}

export default DetailInvoice