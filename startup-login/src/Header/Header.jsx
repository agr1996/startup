import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { isAuthenticated } from '../AuthState';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  function signOut() {
    fetch(`/api/auth/signout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        navigate('/')
      });
  }

  const renderButton = () => {
    switch (location.pathname) {
      case '/':
        return <button onClick={() => navigate('/SignIn')}>Sign In</button>;
      case '/SignIn':
        return <button onClick={() => navigate('/Register')}>Create Account</button>;
      case '/Register':
        return <button onClick={() => navigate('/SignIn')}>Sign In</button>;
      case '/Markup':
        return <button onClick={() => signOut()}>Sign Out</button>;
      case '/Share':
        return <button onClick={() => navigate('/Markup')}>Markup</button>;
      default:
        return <button onClick={() => navigate('/')}>Home</button>;
    }
  };


  function Menu() {
    const authenticated = isAuthenticated();
    return (
      <div className="menu">
        <nav>
          <NavLink to="/" onClick='closeMenu()' className='link'>Home</NavLink>
          {!authenticated && (
            <>
              <NavLink to="/SignIn" onClick='closeMenu()' className='link'>Sign in</NavLink>
              <NavLink to="/Register" onClick='closeMenu()' className='link'>Register</NavLink>
            </>
          )}
          {authenticated && (
            <>
              <NavLink to="/Markup" onClick='closeMenu()' className='link'>Markup</NavLink>
              <NavLink to="/Share" onClick='closeMenu()' className='link'>Share</NavLink>
            </>
          )}
        </nav>
      </div>
    );
  }


  return (
    <>
      <header className="header">
        <button className='navigation' onClick={toggleMenu}>☰</button>
        <div className="logo">Voodle</div>
        {renderButton()}
      </header>
      {menuOpen && <Menu />}
    </>
  );
}



export default Header;