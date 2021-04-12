import React from 'react'

const PartnerType = (props) => {
  return (
    <div>
      <div>Type</div>
      <div>
        <select
          value={props.type}
          style={{ height: '30px' }}
          onChange={event => props.setType(event.target.value)}
        >
          <option value="">All</option>
          <option value="Both">Both</option>
          <option value="Supplier">Supplier</option>
          <option value="Client">Client</option>
        </select>
      </div>
    </div>
  )
}

export default PartnerType