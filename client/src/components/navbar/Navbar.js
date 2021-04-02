import React from 'react'
import './Navbar.css'

import { useHistory } from 'react-router-dom'

const Navbar = () => {
  const history = useHistory()
  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ paddingRight: '50px' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Adityo Prabowo</div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar