import React from 'react'
import './HeaderDetailPayment.css'

const HeaderDetailPayment = () => {
  return (
    <div className="header-detail-payment mt-4">
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
          <div className="text-secondary" style={{ fontSize: '12px' }}>Payment Method</div>
          <div>Cash</div>
        </div>
        <div className="col">
          <div className="text-secondary" style={{ fontSize: '12px' }}>Total Amount</div>
          <div>Rp1.000.000</div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDetailPayment