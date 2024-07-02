import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Affordable Flooring LLC</h3>
          <p>1118 A St SE, Auburn, 98002</p>
          <p>(206) 683 0891</p>
          <input type="email" placeholder="Email us" className="input-email" />
        </div>
        <div className="footer-column">
          <div className="inner-column">
            <ul>
              <li>
                <Link to="/catalog">Products</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="inner-column">
            <ul>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Affordable Flooring LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;