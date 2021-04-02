import React from 'react'
import './ButtonSearchReceivePayment.css'

const ButtonSearchReceivePayment = () => {
  return (
    <div className="container-search-invoice">
      <div style={{ width: '100%' }}>
        <input type="text" className="search-invoice-input" placeholder="Search" />
      </div>
      <div>
        <i className="fas fa-search text-secondary"></i>
      </div>
    </div>
  )
}

export default ButtonSearchReceivePayment