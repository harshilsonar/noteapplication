import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isopen,setisopen]=useState(false);
  const currentuser=JSON.parse(localStorage.getItem("current user"))
  return (
    <header className="navbar">
      <div className="navbar-logo">📝 {currentuser}</div>
      <nav className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/notes" className="nav-link">Notes</NavLink>
        <NavLink to="/add-notes" className="nav-link">Add Notes</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
        <NavLink to="/register" className="nav-link">Register</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
