import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return  <nav className="py-3">
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add-book">Add Book</NavLink>
      </li>
    </ul>
  </nav>

}

export default Menu