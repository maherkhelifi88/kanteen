import React from 'react';
import './jcp.css'; // Import the CSS file for styling
import mezcalImage from './mezca.jpg'; // Make sure to replace with the correct path

const MezcalPage = () => {
  return (
    <div className="mezcal-container">
      <div className="mezcal-header">
        {/* Simulating the iPhone 15 Max notch */}
        <div className="notch"></div>
      </div>
      <img 
        src={mezcalImage} 
        alt="Mezcal Bottle"
        className="mezcal-image"
      />
      <div className="mezcal-content">
        <h1>Yes! it's true</h1>
        <p>
          Yes, mezcal is from Mexico only. Mezcal is a distilled alcoholic beverage made from any type of agave, which is a plant native to Mexico...
        </p>
        <button className="next-button">NEXT</button>
      </div>
    </div>
  );
};

export default MezcalPage;
