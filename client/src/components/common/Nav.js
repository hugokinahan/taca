import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

function Nav() {
  
  useLocation()
  const isLoggedIn = isAuthenticated()
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/') // logs out & returns user to homepage

  }


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
        {!isLoggedIn ? 
          <Link to="/login">
            <li>Admin Login</li>
          </Link>
          :
          <li onClick={handleLogout}>Logout</li>
        }
      </ul>
    </nav>
  )
}

export default Nav
