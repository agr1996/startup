import React, { useState } from 'react';
import Menu from './Menu.jsx';
import './App.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">Voodle</div>
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? 'X' : '☰'}
        </button>
      </header>
      {menuOpen && <Menu />}
    </>
  );
}

export default Header;