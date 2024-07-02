import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { Divider } from "@mui/material";

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleCatalogMouseEnter = () => {
    setIsCatalogOpen(true);
  };

  const handleCatalogMouseLeave = () => {
    setIsCatalogOpen(false);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <h1>Affordable Flooring LLC</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              onMouseEnter={handleCatalogMouseEnter}
              onMouseLeave={handleCatalogMouseLeave}
            >
              <Link to="/catalog">Products</Link>
              {isCatalogOpen && (
                <ul className="dropdown-content">
                  <li>
                    <Link to="/catalog?category=Carpet">Carpet</Link>
                  </li>
                  <li>
                    <Link to="/catalog?category=Laminate">Laminate</Link>
                  </li>
                  <li>
                    <Link to="/catalog?category=Hardwood">Hardwood</Link>
                  </li>
                  <li>
                    <Link to="/catalog?category=Luxury%20Vinyl%20Planks">
                      Luxury Vinyl
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalog?category=SPC">SPC</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="cart-icon">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
          </Link>
        </div>
      </header>
      <Divider />
    </>
  );
};

export default Header;