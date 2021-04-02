import React from 'react'

const DeliveryStatus = () => {
  return (
    <div>
      <div>Delivery Status</div>
      <div>
        <select style={{ height: '30px' }}>
          <option value="">All</option>
          <option value="not sent">Not Sent</option>
          <option value="sent">Sent</option>
          <option value="failed">Failed</option>
        </select>
      </div>
    </div>
  )
}

export default DeliveryStatus