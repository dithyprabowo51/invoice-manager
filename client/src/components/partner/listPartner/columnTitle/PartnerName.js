import React from 'react'

const PartnerName = (props) => {
  const handleSubmit = event => {
    event.preventDefault()
    props.handleFilterPartners()
  }
  return (
    <div>
      <div>Name</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={props.name} onChange={event => props.setName(event.target.value)} />
        </form>
      </div>
    </div>
  )
}

export default PartnerName