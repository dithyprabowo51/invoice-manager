import React from 'react'

const PartnerType = () => {
  return (
    <div>
      <div>Type</div>
      <div>
        <select style={{ height: '30px' }}>
          <option value="">All</option>
          <option value="both">Both</option>
          <option value="supplier">Supplier</option>
          <option value="client">Client</option>
        </select>
      </div>
    </div>
  )
}

export default PartnerType