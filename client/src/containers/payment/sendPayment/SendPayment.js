import React from 'react'
import './SendPayment.css'

// Components
import ButtonSearchSendPayment from '../../../components/payment/sendPayment/buttonSearchSendPayment/ButtonSearchSendPayment.js'
import ListSendPayment from '../../../components/payment/sendPayment/listSendPayment/ListSendPayment.js'

// Router
import { useHistory } from 'react-router-dom'


const SendPayment = () => {
  const history = useHistory()
  const handleChangePage = value => {
    history.push(value)
  }
  return (
    <div className="mt-3">
      <p style={{ fontWeight: '700', fontSize: '23px', color: '#3C5468' }}>All Outgoing Payments</p>
      <div className="d-flex justify-content-between pe-5" style={{ width: '100%' }}>
        <ButtonSearchSendPayment />
        <div className="me-5">
          <button onClick={() => handleChangePage('/invoicer/send-pay/add')} className="btn btn-primary">Create New Payment</button>
        </div>
      </div>
      <div className="pe-5 mt-5">
        <ListSendPayment />
      </div>
    </div>
  )
}

export default SendPayment