import React from 'react'
import {NavLink} from 'react-router-dom'
export default function navbar() {
  return (
    <ul className="nav">
        <li className="nav-item">
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/customers">Customers</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
    </ul>
  )
}
