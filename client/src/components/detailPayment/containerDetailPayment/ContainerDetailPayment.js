import React from 'react'
import './ContainerDetailPayment.css'

const ContainerDetailPayment = () => {
  return (
    <div className="container-detail-payment">
      <div className="row justify-content-between">
        <div className="col" style={{ fontSize: '13px' }}>
          <p style={{ fontSize: '16px' }}>Adityo Prabowo</p>
          <div>Phone: 081211692165</div>
          <div>Email: dithyprabowo51@gmail.com</div>
        </div>
        <div className="col text-end">
          <p style={{ fontSize: '24px', fontWeight: '700' }}>Receipt</p>
          <div>Payment ID: PYI_ID</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-3">Received from</div>
        <div className="col">
          <div>Adityo Prabowo</div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-3">Amount</div>
        <div className="col">
          <div>Rp1.000.000</div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-3">For payment of</div>
        <div className="col">
          <div></div>
          <hr />
        </div>
      </div>
      <hr />
      <div className="row justify-content-end mt-5">
        <div className="col-3 text-center">
          <div>02 April 2021</div>
          <div>Manager</div>
        </div>
      </div>
    </div>
  )
}

export default ContainerDetailPayment