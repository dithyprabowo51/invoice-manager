import React from 'react'

const PaymentAside = () => {
  return (
    <div>
      <div className="menu">
        <div className="d-flex">
          <div className="icon-menu">
            <i className="far fa-credit-card"></i>
          </div>
          <div className="ms-2">
            Payment
          </div>
        </div>
        <div>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
      <div className="submenu">
        <div className="mb-3">Receive Payment</div>
        <div>Send Payment</div>
      </div>
    </div>
  )
}

export default PaymentAside