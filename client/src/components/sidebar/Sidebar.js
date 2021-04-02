import React from 'react'
import './Sidebar.css'

// Components
import DashboardAside from './menu/DashboardAside.js'
import PartnerAside from './menu/PartnerAside.js'
import InvoiceAside from './menu/InvoiceAside.js'
import PaymentAside from './menu/PaymentAside.js'
import ProductAside from './menu/ProductAside.js'

const Sidebar = () => {
  return (
    <div className="aside">
      <DashboardAside />
      <PartnerAside />
      <InvoiceAside />
      <PaymentAside />
      <ProductAside />
    </div>
  )
}

export default Sidebar