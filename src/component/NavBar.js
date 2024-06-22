// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../logo.jpeg';

function NavBar() {
  return (
    <nav className="navbar">
          <div className="navbar-container"> 
            <div className='navbar-logo'>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
            <Link to="/portfolio" className="navbar-link">Portfolio</Link>
            <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
          
        </div>
              </div>
             </div>  
    </nav>
  );
}

export default NavBar;
