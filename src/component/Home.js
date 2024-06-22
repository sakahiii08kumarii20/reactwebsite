import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import pic1 from './wedding10.jpg'
import pic2 from './bday1.jpeg'
import pic3 from './candidi3.jpeg'
import pic4 from './traditional1.jpeg'

function Home() {
  return (
      <div className="home-container">
        <div className="hero-section">
          <h1>Welcome to Hrashad Art!!</h1>
          <p>Capturing moments from today, creating memories for a lifetime.</p>
          <div className="button-container">
            <button className="portfolio-button"><Link to="/portfolio">Explore Portfolio</Link></button>
          </div>
        </div>
        <div className="featured-work">
          <h2>Featured Work</h2>
          <div className="work-grid">
            <div className="work-item wedding" data-title="Wedding">
              <img src={pic1} alt="Wedding" />
            </div>
            <div className="work-item birthday" data-title="Birthday">
              <img src={pic2} alt="Birthday" />
            </div>
            <div className="work-item candid" data-title="Candid">
              <img src={pic3} alt="Candid" />
            </div>
            <div className="work-item traditional" data-title="Traditional">
              <img src={pic4} alt="Traditional" />
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <h2>Let's Work Together</h2>
          <p>Contact us to capture your special moments.</p>
          <button className="contact-button"><Link to="/contact">Contact Us</Link></button>
        </div>
      </div>
  
  );
}

export default Home;
