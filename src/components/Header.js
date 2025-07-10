import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">Girijesh</div>
    <nav className="nav-links">
  <a href="#hero" className="button">Home</a>
  <a href="#about" className="button">About</a>
  <a href="#skills" className="button">Skills</a>
  <a href="#projects" className="button">Projects</a>
  <a href="#contact" className="button">Contact</a>
     </nav>

    </header>
  );
}

export default Header;
