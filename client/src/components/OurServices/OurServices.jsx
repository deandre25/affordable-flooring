import React from 'react';
import './OurServices.scss';

const OurServices = () => {
  return (
    <div className="our-services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-column">
          <h3>Installation</h3>
          <p>Providing installation for flooring materials is essential for ensuring your satisfaction and maintaining the quality of work. It's not just about laying down the materials but also ensuring that the entire process is carried out efficiently and effectively. From preparing the surface to installing the flooring and finishing touches, every step matters in delivering a seamless result.</p>
        </div>
        <div className="service-column">
          <h3>Delivery</h3>
          <p>Unlock the potential of your space with our unbeatable flooring measurement and estimation services. We're committed to providing you with precise measurements and comprehensive estimates, all at FREE to you. Our team of experts will meticulously assess your project needs, ensuring every detail is accounted for. From room dimensions to material requirements, we've got you covered every step of the way.</p>
        </div>
        <div className="service-column">
          <h3>Estimates & Measurements</h3>
          <p>Our extensive network allows us to deliver flooring materials to your doorstep promptly, no matter the size or scope of your project. We prioritize reliability and precision, ensuring that your materials arrive intact and ready for installation.</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;