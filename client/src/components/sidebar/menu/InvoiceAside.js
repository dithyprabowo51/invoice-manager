import React, { useState } from 'react'

// Router
import { useHistory } from 'react-router-dom'

const InvoiceAside = () => {
  const history = useHistory()
  const [isShowSubmenu, setIsShowSubmenu] = useState(false)
  const handleChangePage = (value) => {
    history.push(value)
  }
  return (
    <div>
      <div onClick={() => setIsShowSubmenu(!isShowSubmenu)} className="menu">
        <div className="d-flex">
          <div className="icon-menu">
            <i className="far fa-file-alt"></i>
          </div>
          <div className="ms-2">
            Invoice
            </div>
        </div>
        <div>
          <i className={isShowSubmenu ? "fas fa-angle-down" : "fas fa-angle-up"}></i>
        </div>
      </div>
      {
        isShowSubmenu ?
          <div className="submenu">
            <div onClick={() => handleChangePage('/invoicer/sales-invoice')} className="mb-3">
              <button className="text-light" style={{ background: 'transparent', border: 'none' }}>Sales Invoice</button>
            </div>
            <div onClick={() => handleChangePage('/invoicer/purchase-invoice')}>
              <button className="text-light" style={{ background: 'transparent', border: 'none' }}>Purchase Invoice</button>
            </div>
          </div>
          :
          null
      }
    </div>
  )
}

export default InvoiceAside