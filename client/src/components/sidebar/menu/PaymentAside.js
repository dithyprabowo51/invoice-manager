import React, { useState } from 'react'

// Router
import { useHistory } from 'react-router-dom'

const PaymentAside = () => {
  const history = useHistory()
  const [isShowSubmenu, setIsShowSubmenu] = useState(false)
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <div>
      <div onClick={() => setIsShowSubmenu(!isShowSubmenu)} className="menu">
        <div className="d-flex">
          <div className="icon-menu">
            <i className="far fa-credit-card"></i>
          </div>
          <div className="ms-2">
            Payment
          </div>
        </div>
        <div>
          <i className={isShowSubmenu ? "fas fa-angle-down" : "fas fa-angle-up"}></i>
        </div>
      </div>
      {
        isShowSubmenu ?
          <div className="submenu">
            <div onClick={() => handleChangePage('/invoicer/receive-payment')} className="mb-3">
              <button className="text-light" style={{ background: 'transparent', border: 'none' }}>Receive Payment</button>
            </div>
            <div onClick={() => handleChangePage('/invoicer/send-payment')}>
              <button className="text-light" style={{ background: 'transparent', border: 'none' }}>Send Invoice</button>
            </div>
          </div>
          :
          null
      }
    </div>
  )
}

export default PaymentAside