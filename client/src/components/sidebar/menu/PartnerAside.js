import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

const PartnerAside = () => {
  const history = useHistory()
  const handleChangePage = () => {
    history.push('/partner')
  }
  return (
    <div>
      <div onClick={handleChangePage} className="menu">
        <div className="d-flex">
          <div className="icon-menu">
            <i className="fas fa-user-friends"></i>
          </div>
          <div className="ms-2">
            Partner
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerAside