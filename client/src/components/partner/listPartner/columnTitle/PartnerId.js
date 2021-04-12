import React from 'react'

const PartnerId = (props) => {
  const handleSubmit = event => {
    event.preventDefault()
    props.handleFilterPartners()
  }
  return (
    <div>
      <div>Partner ID</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={props.id} onChange={event => props.setId(event.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default PartnerId