import React from "react";
import "./HomePage.scss";
import CategoryNavigation from "../../components/CategoryNavigation";
import OurServices from "../../components/OurServices";
import ConsultationForm from "../../components/ConsultationForm";
import StoreMap from "../../components/StoreMap";
import { Link } from "react-router-dom";
import FAQs from "../../components/FAQs";
import { Divider } from "@mui/material";
import AboutUs from "../../components/AboutUs";
import { Element, scroller } from "react-scroll";

const HomePage = () => {
  const handleScroll = (event) => {
    const sections = [
      "main",
      "category",
      "about",
      "services",
      "consultation",
      "store",
      "faqs",
    ];
    const currentScroll = window.scrollY;
    const sectionOffsets = sections.map((section) =>
      document.getElementById(section).offsetTop
    );

    if (event.deltaY > 0) {
      // Scroll down
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (currentScroll < sectionOffsets[i]) {
          scroller.scrollTo(sections[i], {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
          break;
        }
      }
    } else {
      // Scroll up
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (currentScroll > sectionOffsets[i]) {
          scroller.scrollTo(sections[i], {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
          break;
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <Divider />
      <div className="home-page">
        <Element name="main" id="main">
          <div className="container">
            <div className="main-content">
              <h1>Best Flooring Solution for Your Home</h1>
              <div className="intro-text">
                <Link to="/catalog" className="shop-button">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Element>

        <Divider variant="inset" />
        <Element name="category" id="category">
          <CategoryNavigation />
        </Element>
        <Divider />

        <Element name="about" id="about">
          <AboutUs />
        </Element>
        <Divider />

        <Element name="services" id="services">
          <OurServices />
        </Element>
        <Divider />

        <Element name="consultation" id="consultation">
          <ConsultationForm />
        </Element>
        <Divider variant="middle" />

        <Element name="store" id="store">
          <StoreMap />
        </Element>
        <Divider variant="middle" />

        <Element name="faqs" id="faqs">
          <FAQs />
        </Element>
        <Divider variant="middle" />
      </div>
    </>
  );
};

export default HomePage;