import React from 'react'

const PartnerEmail = (props) => {
  const handleSubmit = event => {
    event.preventDefault()
    props.handleFilterPartners()
  }
  return (
    <div>
      <div>Email</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={props.email}
            onChange={event => props.setEmail(event.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default PartnerEmail