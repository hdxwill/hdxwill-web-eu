import React from "react";
import { Download } from "lucide-react";
import { getProductIcon } from "../home/ProductIcons";
import SliderNav from "../common/SliderNav";

const ProductShowcase = ({ current, images, imageIndex, onPrevImage, onNextImage }) => {
  const hasIcons =
    current.features.length > 0 && typeof current.features[0] === "object";

  return (
    <div className="product-showcase" key={current.title}>
      <div className="product-info animate-fade-in">
        <h1 className="product-title">{current.title}</h1>

        {current.bullets ? (
          <ul className="product-bullets">
            {current.bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="product-desc">{current.desc}</p>
        )}

        {hasIcons ? (
          <div className="product-features-grid">
            {current.features.map((feat, idx) => (
              <div key={idx} className="product-feature-item">
                <span className="product-feature-icon">
                  {getProductIcon(feat.icon)}
                </span>
                <span className="product-feature-text">{feat.text}</span>
              </div>
            ))}
          </div>
        ) : (
          <ul className="product-feature-list">
            {current.features.map((feat, idx) => (
              <li key={idx} className="feat-item">
                <div className="feat-icon"></div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="product-actions">
          <a href="/contact-us" className="btn btn-primary">
            Contact
          </a>
          <a href={current.brochureUrl} className="brochure-link">
            <Download size={20} /> Download brochure
          </a>
        </div>
      </div>

      <div className="product-image-container animate-fade-in">
        <div className="product-image-viewport">
          <div
            className="product-image-track"
            style={{ transform: `translateX(-${imageIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="product-image-slide">
                <img src={img} alt={current.title} className="product-main-image" />
              </div>
            ))}
          </div>
        </div>
        {images.length > 1 && (
          <SliderNav
            onPrev={onPrevImage}
            onNext={onNextImage}
            className="product-image-nav"
            prevLabel="Previous image"
            nextLabel="Next image"
          />
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
