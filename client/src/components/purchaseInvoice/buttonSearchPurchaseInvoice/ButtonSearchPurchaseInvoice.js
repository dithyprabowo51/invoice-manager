import React from 'react'
import './ButtonSearchPurchaseInvoice.css'

const ButtonSearchPurchaseInvoice = () => {
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

export default ButtonSearchPurchaseInvoice