import React from 'react';
import './StoreMap.scss';

const StoreMap = () => {
  return (
    <div className="store-map">
      <h2>How to Find Us</h2>
      <div className="content">
        <div className="text-column">
          <div className="store-info">
            <h3>Visit Us</h3>
            <p>1118 A ST SE, Auburn, 98002</p>
            <h3>Hours</h3>
            <p>Monday to Friday: 9 am - 5:30 pm</p>
            <p>Saturday: 11 am - 4 pm</p>
            <h3>Phone</h3>
            <p>(206) 683 0891</p>
          </div>
        </div>
        <div className="map-column">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21479.709617114986!2d-122.2285573!3d47.2975069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549058757be6c0dd%3A0x5a46fbdbd1b85882!2s1118%20A%20St%20SE%2C%20Auburn%2C%20WA%2098002%2C%20USA!5e0!3m2!1sen!2sua!4v1644321748534!5m2!1sen!2sua"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StoreMap;