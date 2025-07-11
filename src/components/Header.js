import React, { useState } from 'react';
import '../styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">Girijesh</div>

      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" className="button" onClick={closeMenu}>Home</a>
        <a href="#about" className="button" onClick={closeMenu}>About</a>
        <a href="#skills" className="button" onClick={closeMenu}>Skills</a>
        <a href="#projects" className="button" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="button" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
