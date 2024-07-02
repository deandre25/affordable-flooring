import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "./FAQs.scss";

const faqs = [
  {
    question: 'HOW CAN I REQUEST A QUOTE FOR MY FLOORING PROJECT?',
    answer: "Getting a quote is a breeze! Just get in touch with our friendly team, either by giving us a call or filling out the contact form on our website. We'll ask you a few questions about your project and then we'll give you a detailed quote that's competitive. No matter if you're interested in waterproof, hardwood, vinyl, or laminate flooring, we're here to help with your project."
  },
  {
    question: 'WHAT FLOORING OPTIONS ARE AVAILABLE AT AFFORDABLE FLOORING LLC?',
    answer: "At Affordable Flooring LLC, we've got a wide range of flooring options to suit every taste and requirement. From waterproof and hardwood to laminate, luxury vinyl, tile, carpets, and more, our selection has something for everyone. We're dedicated to offering you plenty of choices to enhance your space, and we take pride in doing so."
  },
  {
    question: 'DO YOU ALSO OFFER INSTALLATION SERVICES?',
    answer: "Absolutely! Our skilled team of professionals is dedicated to providing top-notch flooring installation services. No matter if you've selected hardwood, laminate, or any other flooring type from our range, we're here to ensure a flawless and stunning installation. Leave the details to us, and relax knowing that your new floors are in expert hands."
  },
  {
    question: 'HOW CAN I CHOOSE THE PERFECT FLOORING FOR MY SPACE?',
    answer: "Selecting the ideal flooring is a significant choice. Our expert team is here to support you throughout the process. By understanding your preferences, requirements, and budget, we'll help you discover the perfect flooring solution. Explore our website for more information on our extensive range of flooring options."
  },
  {
    question: 'DO YOU PROVIDE DELIVERY SERVICES?',
    answer: "We've got you covered with delivery services too! If you're unable to transport your purchased materials yourself, just leave it to us. Our team will ensure your items get to you safely and on time."
  }
];

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3>
              {faq.question}
              <FaChevronDown className='icon' />
            </h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;