import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

// Components
import ButtonSearchSalesInvoice from '../../components/salesInvoice/buttonSearchSalesInvoice/ButtonSearchSalesInvoice.js'
import ListSalesInvoice from '../../components/salesInvoice/listSalesInvoice/ListSalesInvoice.js'

const SalesInvoice = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <div className="mt-3">
      <p style={{ fontWeight: '700', fontSize: '23px', color: '#3C5468' }}>Sales Invoice</p>
      <div className="d-flex justify-content-between pe-5" style={{ width: '100%' }}>
        <ButtonSearchSalesInvoice />
        <div className="me-5">
          <button onClick={() => handleChangePage('/invoicer/sales-inv/add')} className="btn btn-primary">Create New Invoice</button>
        </div>
      </div>
      <div className="pe-5 mt-5">
        <ListSalesInvoice />
      </div>
    </div>
  )
}

export default SalesInvoice