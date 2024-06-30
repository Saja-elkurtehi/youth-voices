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
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/connect">Connect</a></li>
            <li><a href="/learnact">Learn & Act</a></li>
            <li><a href="/stories">Narratives</a></li>
          </ul>
        </nav>
        <div className="triangle-content">
          <h1>Home</h1>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
