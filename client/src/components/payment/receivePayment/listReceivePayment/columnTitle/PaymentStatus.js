import React from 'react'

const DeliveryStatus = () => {
  return (
    <div>
      <div>Payment Status</div>
      <div>
        <select style={{ height: '30px' }}>
          <option value="">All</option>
          <option value="Settlemen">Settlemen</option>
        </select>
      </div>
    </div>
  )
}

export default DeliveryStatus