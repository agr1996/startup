import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  function Menu() {
    return (
      <div className="menu">
        <nav>
          <NavLink to="/" onClick='closeMenu()' className='link'>Home</NavLink>
          <NavLink to="/SignIn" onClick='closeMenu()' className='link'>Sign in</NavLink>
          <NavLink to="/Register" onClick='closeMenu()' className='link'>Register</NavLink>
          <NavLink to="/Markup" onClick='closeMenu()' className='link'>Markup</NavLink>
          <NavLink to="/Share" onClick='closeMenu()' className='link'>Share</NavLink>
        </nav>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <button className='navigation' onClick={toggleMenu}>☰</button>
        <div className="logo">Voodle</div>

      </header>
      {menuOpen && <Menu />}
    </>
  );
}



export default Header;