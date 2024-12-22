import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const handleThemeToggle = () => {
    document.body.classList.toggle('light-theme');
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        <span>NeWorld</span>
      </Link>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/about">About</Link>
        <button id="theme-button" onClick={handleThemeToggle}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default Header;
