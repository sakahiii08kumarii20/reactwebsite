import React from 'react';
import './Weddings.css';
import pic1 from './wedding1.jpeg';
import pic2 from './wedding2.jpeg';
import pic3 from './wedding3.jpeg';
import pic4 from './wedding4.jpeg';

function Weddings() {
  return (
    <div className="portfolio-details">
        <h1>Weddings</h1>
        <p>Gallery of wedding photography.</p>
        {/* Add some sample event images or descriptions */}
        <div className="gallery">
          <img src={pic1} alt="Wedding 1" />
          <img src={pic2} alt="Wedding 2" />
          <img src={pic3} alt="Wedding 3" />
          <img src={pic4} alt="Wedding 4" />
        
        </div>
      </div>
  );
}

export default Weddings;
