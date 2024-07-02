import React, { useState } from "react";
import "./ContactPage.scss";

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Ready to experience hassle-free flooring delivery? Don't hesitate to
          get in touch with our friendly team at Affordable Flooring LLC today!
          Whether you have questions about our services, need assistance with
          scheduling a delivery, or want to request a quote, we're here to
          help.
        </p>
        <p>
          You can reach us by phone at <strong>(206) 683 0891</strong> or by
          email at{" "}
          <a href="mailto:1affordableflooringllc@gmail.com">
            1affordableflooringllc@gmail.com
          </a>
          . Our knowledgeable representatives are standing by to assist you and
          provide the information you need to get started on your next project.
        </p>
        <button className="get-in-touch-btn" onClick={toggleForm}>
          Get in Touch
        </button>
      </div>
      {showForm && (
        <div className="contact-form-overlay">
          <div className="contact-form">
            <span className="close-form-btn" onClick={toggleForm}>
              &#10006;
            </span>
            <h2>Get in Touch</h2>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;