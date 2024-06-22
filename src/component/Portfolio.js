import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-section">
        <h1>Portfolio</h1>
        <ul className="portfolio-links">
          <li><button><Link to="weddings">Weddings</Link></button></li>
          <li><button><Link to="birthday">Birthday</Link></button></li>
          <li><button><Link to="candid">Candid</Link></button></li>
          <li><button><Link to="traditional">Traditional</Link></button></li>
        </ul>
      </div>
       <Outlet /> {/* This is where the nested routes will be rendered */}
    
    </div>
  );
}

export default Portfolio;
