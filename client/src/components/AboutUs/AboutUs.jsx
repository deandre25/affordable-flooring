import React from 'react';
import './AboutUs.scss';

import storeImage from './store-image.jpg';

const AboutUs = () => {
  return (
    <div className="about-page">
      <h2 className="about-heading">About us</h2>
      <div className="about-container">
        <div className="about-row">
          <div className="about-column">
            <img 
              src={storeImage} 
              alt="Affordable Flooring LLC Store" 
              className="about-image"
            />
          </div>
          <div className="about-column">
            <p>
              At Affordable Flooring LLC, we understand that beauty shouldn't come at a premium. 
              That's why we're dedicated to providing not only the finest materials but also the 
              best value, ensuring that luxury is within reach for every homeowner. Our commitment 
              to affordability is matched only by our dedication to excellence, with every product 
              meeting the highest standards of durability and sustainability.
            </p>
            <p>
              But beyond our commitment to quality and value lies a deeper ethos—one of service 
              and community. As a locally-owned business, we take pride in our roots and strive 
              to cultivate lasting relationships with our customers. From the moment you step 
              through our doors to the final installation, we're here to support you every step 
              of the way, ensuring that your journey to the perfect floor is as seamless as it 
              is satisfying.
            </p>
            <button className="learn-more-btn">Learn more...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;