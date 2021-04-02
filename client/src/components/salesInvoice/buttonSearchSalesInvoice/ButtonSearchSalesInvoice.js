import React from 'react'
import './ButtonSearchSalesInvoice.css'

const ButtonSearchSalesInvoice = () => {
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

export default ButtonSearchSalesInvoice