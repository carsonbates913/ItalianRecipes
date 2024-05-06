import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <nav className="navbar">
      <div className="navbar-container">
        <div className='nav-logo'>Cucina <span style={{color: 'green', fontFamily: 'pritzious, sans-serif', fontWeight: '600', fontStyle: 'normal', fontSize: '2rem'}}>D</span>'Italia</div>
        <div className='nav-icon'>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-links">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link to="/restaurants" className="nav-links">Restaurants</Link>
          </li>
        </ul>
      </div>
    </nav>
  

  )

}

export default Navbar