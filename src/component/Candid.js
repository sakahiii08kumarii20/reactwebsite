import React from 'react';
import './Candid.css';
import pic1 from './candid1.jpeg';
import pic2 from './candid2.jpeg';
import pic3 from './candidi3.jpeg';
import pic4 from './candidi4.jpeg';


function Candid() {
  return (
    <div className="portfolio-details">
      <h1>Candid</h1>
      <p>Gallery  of Candid photography.</p>
      {/* Add some sample landscape images or descriptions */}
      <div className="gallery">
        <img src={pic1} alt="Candid 1" />
        <img src={pic2} alt="Candid 2" />
        <img src={pic3} alt="Candid 3" />
        <img src={pic4} alt="Candid 3" />
      </div>
    </div>
  );
}

export default Candid;
