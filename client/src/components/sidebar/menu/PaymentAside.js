import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

const PaymentAside = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
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
        <div onClick={() => handleChangePage('/receive-payment')} className="mb-3">Receive Payment</div>
        <div onClick={() => handleChangePage('/send-payment')}>Send Payment</div>
      </div>
    </div>
  )
}

export default PaymentAside