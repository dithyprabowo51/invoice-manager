import React from 'react'
import './ButtonSearchPartner.css'

const Partner = () => {
  return (
    <div className="container-search-partner">
      <div style={{ width: '100%' }}>
        <input type="text" className="search-partner-input" placeholder="Search" />
      </div>
      <div>
        <i className="fas fa-search text-secondary"></i>
      </div>
    </div>
  )
}

export default Partner