import React from "react";
import "./style.css";
import {NavLink} from "react-router-dom"

const Header = () => {

  return (
    <nav className="container pt-3">
      <NavLink exact to="/">Home</NavLink>
      {" | "}
      <NavLink to="/courses">Courses</NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Header;