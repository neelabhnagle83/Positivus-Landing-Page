import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/icon.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="navbar">
      <div className="left-section">
        <img src={logo} alt="Logo" />
        <h1>Positivus</h1>
      </div>

      <div className={`mid-section ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>

      <button className="butt-req">Request a quote</button>
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
