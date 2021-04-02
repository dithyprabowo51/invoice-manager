import React from 'react'
import './ReceivePayment.css'

// Components
import ButtonSearchReceivePayment from '../../../components/payment/receivePayment/buttonSearchPurchaseInvoice/ButtonSearchReceivePayment.js'
import ListReceivePayment from '../../../components/payment/receivePayment/listReceivePayment/ListReceivePayment.js'

// Router
import { useHistory } from 'react-router-dom'


const ReceivePayment = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <div className="mt-3">
      <p style={{ fontWeight: '700', fontSize: '23px', color: '#3C5468' }}>All Incoming Payments</p>
      <div className="d-flex justify-content-between pe-5" style={{ width: '100%' }}>
        <ButtonSearchReceivePayment />
        <div className="me-5">
          <button onClick={() => handleChangePage('/invoicer/receive-pay/add')} className="btn btn-primary">Create New Payment</button>
        </div>
      </div>
      <div className="pe-5 mt-5">
        <ListReceivePayment />
      </div>
    </div>
  )
}

export default ReceivePayment