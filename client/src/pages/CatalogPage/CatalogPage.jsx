import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

import "./CatalogPage.scss";

// import vinyl from "./vinyl.jpg";
// import spc from "./spc.jpg";
// import hardwood from "./hardwood.jpg";
// import laminate from "./laminate.jpg";
// import carpet from "./carpet.jpg";


const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    axios
      .get("/catalog")
      .then((response) => {
        console.log(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error("Произошла ошибка при получении продуктов!", error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== "All") {
      params.set("category", selectedCategory);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  }, [selectedCategory, setSearchParams]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="catalog-container">
      <div className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </li>
          {["Hardwood", "Luxury Vinyl Planks", "Laminate", "SPC", "Carpet"].map(
            (category) => (
              <li
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="product-and-pagination">
        <div className="product-grid">
          {currentItems.map((product) => (
            <Link key={product.id} className="product-card" to="/product">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  <strong>$ {product.price}</strong>
                </div>
                <div className="product-description">{product.description}</div>
              </div>
            </Link>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;