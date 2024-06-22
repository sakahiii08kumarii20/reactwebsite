import React from 'react';
import './Birthday.css';
import pic1 from './bday1.jpeg';
import pic2 from './bday2.jpeg';
import pic3 from './bday3.jpeg';
import pic4 from './bday4.jpeg';
function Birthday() {
  return (
    <div className="portfolio-details">
      <h1>Birthday</h1>
      <p>Gallery of Birthday photography.</p>
      {/* Add some sample portrait images or descriptions */}
      <div className="gallery">
        <img src={pic1} alt="Birthday 1" />
        <img src={pic2} alt="Birthday 2" />
        <img src={pic3} alt="Birthday 3" />
         <img src={pic4} alt="Birthday 4"/>
      </div>
    </div>
  );
}

export default Birthday;
