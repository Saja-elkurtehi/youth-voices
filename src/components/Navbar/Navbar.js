import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Add the path to your logo

const Navbar = () => {
  return (
    <header className="header">
      <div className="triangle-background">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="nav-background">
        <nav className="navbar">
          <div className="navbar-container">
           
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/" className="nav-links">Home</a>
              </li>
              <li className="nav-item">
                <a href="/connect" className="nav-links">Connect</a>
              </li>
              <li className="nav-item">
                <a href="/learnact" className="nav-links">Learn & Act</a>
              </li>
              <li className="nav-item">
                <a href="/stories" className="nav-links">Narratives</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="triangle-content">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
