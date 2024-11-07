import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'; 

function Menu() {
  return (
    <div className="menu-overlay">
      <nav className="menu-nav">
        <NavLink to="/" className="menu-link">Home</NavLink>
        <NavLink to="/SignIn" className="menu-link">Sign in</NavLink>
        <NavLink to="/Register" className="menu-link">Register</NavLink>
        <NavLink to="/Markup" className="menu-link">Markup</NavLink>
        <NavLink to="/Share" className="menu-link">Share</NavLink>
      </nav>
    </div>
  );
}

export default Menu;