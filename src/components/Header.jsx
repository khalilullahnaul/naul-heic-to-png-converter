import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <i className="fa-solid fa-terminal"></i>
          <span className="logo-text">Naul HEIC Converter</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/privacy" 
            className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            className={`nav-link ${isActive('/terms') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
