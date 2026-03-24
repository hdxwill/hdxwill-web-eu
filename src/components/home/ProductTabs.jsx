import React, { useState } from "react";
import { homeProducts } from "../../data/homeProducts";
import { getProductIcon } from "../common/ProductIcons";
import "./ProductTabs.css";

const ProductTabs = () => {
  const [activeProduct, setActiveProduct] = useState("eco-x");
  const currentProduct = homeProducts.find((p) => p.id === activeProduct);

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="products-section__title">Our Products</h2>
        <div className="products-section__tabs">
          {homeProducts.map((p) => (
            <button
              key={p.id}
              className={`products-section__tab ${activeProduct === p.id ? "active" : ""}`}
              onClick={() => setActiveProduct(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="products-section__showcase">
          <div
            className="products-section__info animate-fade-in"
            key={currentProduct.id}
          >
            <h3 className="products-section__brand">{currentProduct.name}</h3>

            <div className="products-section__features-grid">
              {currentProduct.features.map((feat, fidx) => (
                <div className="products-section__feature-item" key={fidx}>
                  <div className="products-section__feature-icon">
                    {getProductIcon(feat.icon)}
                  </div>
                  <span className="products-section__feature-text">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="products-section__actions">
              <a href="#" className="products-section__download-btn">
                <span className="products-section__arrow-down">↓</span>{" "}
                Download Brochure
              </a>
            </div>
          </div>

          <div
            className="products-section__image animate-fade-in"
            key={`${currentProduct.id}-img`}
          >
            <img src={currentProduct.image} alt={currentProduct.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
