import React, { useState } from "react";
import "./ProductPage.scss";

import vinyl from "../CatalogPage/vinyl.jpg";
import spc from "../CatalogPage/spc.jpg";
import hardwood from "../CatalogPage/hardwood.jpg";

const ProductPage = () => {
  const product = {
    id: 1,
    name: "Название товара",
    images: [vinyl, spc, hardwood],
    price: "$100",
    description: "Описание товара здесь.",
  };

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    console.log(`Добавлено ${quantity} ${product.name} в корзину.`);
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="product-page-container">
      <div className="product-images-section">
        <div className="main-image">
          <img src={selectedImage} alt="Product" />
        </div>
        <div className="image-gallery">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="image-thumbnail"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="product-info-section">
        <h2>{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="quantity-control">
          <button onClick={decrementQuantity}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button onClick={addToCart}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;