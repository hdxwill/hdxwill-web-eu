import React, { useState } from "react";
import { Download } from "lucide-react";
import VideoHero from "../components/common/VideoHero";
import { productDetails, productTabs } from "../data/products";
import "./Products.css";

const Products = () => {
  const [activeProduct, setActiveProduct] = useState("eco-x");
  const current = productDetails[activeProduct];

  return (
    <div className="products-page animate-fade-in">
      <VideoHero
        videoSrc="/videos/product/02-Products.mp4"
        title={
          <>
            Comprehensive Imaging Solutions
            <br /> for Your Growing Practice
          </>
        }
      />

      <div
        className="container"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="product-tabs">
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              className={`product-tab-btn ${activeProduct === tab.id ? "active" : ""}`}
              onClick={() => setActiveProduct(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="product-showcase">
          <div className="product-info animate-fade-in" key={current.title}>
            <h1 className="product-title">{current.title}</h1>
            <p className="product-desc">{current.desc}</p>

            <ul className="product-feature-list">
              {current.features.map((feat, idx) => (
                <li key={idx} className="feat-item">
                  <div className="feat-icon"></div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="product-actions">
              <a href="/contact-us" className="btn btn-primary">
                Contact Us
              </a>
              <a href={current.brochureUrl} className="brochure-link">
                <Download size={20} /> Download Brochure
              </a>
            </div>
          </div>

          <div
            className="product-image-container animate-fade-in"
            key={current.image}
          >
            <img
              src={current.image}
              alt={current.title}
              className="product-main-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
