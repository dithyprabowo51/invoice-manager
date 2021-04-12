import React from 'react'

const PartnerCountry = (props) => {
  const handleSubmit = event => {
    event.preventDefault()
    props.handleFilterPartners()
  }
  return (
    <div>
      <div>City</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={props.city}
            onChange={event => props.setCity(event.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default PartnerCountry