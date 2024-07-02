import React from "react";
import "./ServicesPage.scss";
import { Divider } from "@mui/material";
import contentImage from "./content-image.jpg";

const ServicesPage = () => {
  return (
    <>
      <div className="services-page">
        <div className="services-content">
          <div className="column">
            <img src={contentImage} alt="Service" className="service-image" />
          </div>
          <div className="column">
            <h2>Our Services</h2>
            <p>
              At Affordable Flooring LLC, we provide comprehensive solutions. We
              understand that buying flooring involves more than just the
              product. That's why we've streamlined the entire process for your
              convenience. From competitively priced products to expert
              installation services, we've got you covered every step of the
              way. Plus, we offer free estimates and measurements to ensure
              accuracy and transparency. Unlike other stores, we handle
              everything, ensuring a hassle-free interior design experience. So
              why settle for less? Choose Affordable Flooring LLC for effortless
              and affordable transformations.
            </p>
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-content">
            <h3>
              Hardwood Refinish 〰️ Carpet cleaning 〰️ Hardsurface installation
              〰️ Subfloor repair 〰️ Residential installation 〰️ Flooring repairs
              〰️ Commercial installations 〰️{" "}
            </h3>
            <h3>
              Hardwood Refinish 〰️ Carpet cleaning 〰️ Hardsurface installation
              〰️ Subfloor repair 〰️ Residential installation 〰️ Flooring repairs
              〰️ Commercial installations 〰️ {" "}
            </h3>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ServicesPage;