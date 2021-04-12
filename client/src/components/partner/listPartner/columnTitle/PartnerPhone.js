import React from 'react'

const PartnerPhone = (props) => {
  const handleSubmit = event => {
    event.preventDefault()
    props.handleFilterPartners()
  }
  return (
    <div>
      <div>Phone</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={props.phone}
            onChange={event => props.setPhone(event.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default PartnerPhone