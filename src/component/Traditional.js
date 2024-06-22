import React from 'react';
import './Traditional.css';
import pic1 from "./traditional1.jpeg";
import pic2 from "./traditional2.jpeg";
import pic3 from "./traditional3.jpeg";
import pic4 from "./traditional4.jpeg";



function Traditional() {
  return (
    <div className="portfolio-details">
      <h1>Traditional</h1>
      <p>Gallery of Traditional photography.</p>
      {/* Add some sample event images or descriptions */}
      <div className="gallery">
        <img src={pic1} alt="Treaditional 1" />
        <img src={pic2} alt="Treaditional 2" />
        <img src={pic3} alt="Treaditional 3" />
        <img src={pic4} alt="Treaditional 3" />
      </div>
    </div>
  );
}

export default Traditional;
