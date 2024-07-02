import React from "react";
import StoreMap from "../../components/StoreMap";
import "./AboutPage.scss";
import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.jpg";
import photo5 from "./photo5.jpg";
import photo6 from "./photo6.jpg";
import { Divider } from "@mui/material";

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="header">
        <div className="header-content">
          <h1>
            Welcome to Affrodable flooring LLC, your <br /> premier destination
            for all your flooring needs
          </h1>
        </div>
      </header>

      <Divider />

      <section className="content-section">
        <div className="content-container">
          <div className="side-column">
            <img src={photo1} alt="Flooring Example 1" />
            <img src={photo2} alt="Flooring Example 2" />
            <img src={photo3} alt="Flooring Example 3" />
          </div>
          <div className="main-content">
            <h2>About Us</h2>
            <p>
              <strong>
                At Affordable Flooring LLC, we take pride in offering a wide
                range of high-quality flooring solutions to suit every style and
                budget. Whether you're in search of luxurious hardwood, durable
                luxury vinyl plank (LVP), resilient stone polymer composite
                (SPC), cozy carpet, or versatile laminate flooring, we've got
                you covered.
              </strong>
            </p>
            <p>
              With years of experience in the industry, our team is committed to
              helping you find the perfect flooring option to enhance the beauty
              and functionality of your space. From residential to commercial
              projects, we have the expertise to handle jobs of all sizes with
              precision and professionalism.
            </p>
            <p>
              But we don't just stop at providing exceptional products. We also
              offer comprehensive measurement and estimation services to ensure
              accurate planning and budgeting for your project. Our dedicated
              installation team will then bring your vision to life with expert
              craftsmanship and attention to detail, leaving you with a flawless
              finish that exceeds your expectations.
            </p>
            <p>
              For us, customer's satisfaction is our top priority. We strive to
              deliver unparalleled service from the moment you step into our
              showroom to the completion of your project and beyond. Trust us to
              transform your space with quality flooring solutions that stand
              the test of time.
            </p>
            <p>
              Experience the difference with Affordable Flooring LLC. Visit us
              today and let us help you elevate your space with beautiful,
              durable flooring that you'll love for years to come.
            </p>
          </div>
          <div className="side-column">
            <img src={photo4} alt="Flooring Example 4" />
            <img src={photo5} alt="Flooring Example 5" />
            <img src={photo6} alt="Flooring Example 6" />
          </div>
        </div>
      </section>
      <StoreMap />
      <Divider />
    </div>
  );
};

export default AboutUs;