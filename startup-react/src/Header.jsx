import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  function Menu() {
    return (
      <div className="menu-overlay">
        <nav className="menu-nav">
          <NavLink to="/" onClick='closeMenu()' className="menu-link">Home</NavLink>
          <NavLink to="/SignIn" onClick='closeMenu()' className="menu-link">Sign in</NavLink>
          <NavLink to="/Register" onClick='closeMenu()' className="menu-link">Register</NavLink>
          <NavLink to="/Markup" onClick='closeMenu()' className="menu-link">Markup</NavLink>
          <NavLink to="/Share" onClick='closeMenu()' className="menu-link">Share</NavLink>
        </nav>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        <div className="logo">Voodle</div>

      </header>
      {menuOpen && <Menu />}
    </>
  );
}



export default Header;