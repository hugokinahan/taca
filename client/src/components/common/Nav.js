import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {


  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/people">
          <li>People</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/history">
          <li>Village History</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="/login">
          <li>Admin Login</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
