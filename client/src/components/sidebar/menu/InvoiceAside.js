import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

const InvoiceAside = () => {
  const history = useHistory()
  const handleChangePage = (value) => {
    history.push(value)
  }
  return (
    <div>
      <div className="menu">
        <div className="d-flex">
          <div className="icon-menu">
            <i className="far fa-file-alt"></i>
          </div>
          <div className="ms-2">
            Invoice
            </div>
        </div>
        <div>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
      <div className="submenu">
        <div onClick={() => handleChangePage('/sales-invoice')} className="mb-3">Sales Invoice</div>
        <div onClick={() => handleChangePage('/purchase-invoice')}>Purchase Invoice</div>
      </div>
    </div>
  )
}

export default InvoiceAside