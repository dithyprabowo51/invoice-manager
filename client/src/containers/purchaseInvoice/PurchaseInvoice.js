import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

// Components
import ButtonSearchPurchaseInvoice from '../../components/purchaseInvoice/buttonSearchPurchaseInvoice/ButtonSearchPurchaseInvoice.js'
import ListPurchaseInvoice from '../../components/purchaseInvoice/listSalesInvoice/ListPurchaseInvoice.js'

const SalesInvoice = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <div className="mt-3">
      <p style={{ fontWeight: '700', fontSize: '23px', color: '#3C5468' }}>Purchase Invoice</p>
      <div className="d-flex justify-content-between pe-5" style={{ width: '100%' }}>
        <ButtonSearchPurchaseInvoice />
        <div className="me-5">
          <button onClick={() => handleChangePage('/invoicer/purchase-inv/add')} className="btn btn-primary">Create New Invoice</button>
        </div>
      </div>
      <div className="pe-5 mt-5">
        <ListPurchaseInvoice />
      </div>
    </div>
  )
}

export default SalesInvoice