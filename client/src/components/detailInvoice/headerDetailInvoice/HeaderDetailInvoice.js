import React from 'react'
import './HeaderDetailInvoice.css'

const HeaderDetailInvoice = () => {
  return (
    <div className="header-detail-invoice mt-4">
      <div className="row">
        <div className="col">
          <div className="text-secondary" style={{ fontSize: '12px' }}>Partner</div>
          <div>Adityo Prabowo</div>
        </div>
        <div className="col">
          <div className="text-secondary" style={{ fontSize: '12px' }}>Date</div>
          <div>02/04/2021</div>
        </div>
        <div className="col">
          <div className="text-secondary" style={{ fontSize: '12px' }}>Due Date</div>
          <div>02/04/2021</div>
        </div>
        <div className="col">
          <div className="text-secondary" style={{ fontSize: '12px' }}>Total Bill</div>
          <div>Rp1.000.000</div>
        </div>
        <div className="col">
          <div className="text-secondary" style={{ fontSize: '12px' }}>Remaining Bill <i className="fas fa-exclamation-circle text-info"></i></div>
          <div className="text-info">Rp1.000.000</div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDetailInvoice