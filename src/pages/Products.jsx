import React, { useState } from "react";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import VideoHero from "../components/common/VideoHero";
import { productDetails, productTabs } from "../data/products";
import { getProductIcon } from "../components/home/ProductIcons";
import "./Products.css";

const Products = () => {
  const [activeProduct, setActiveProduct] = useState("eco-x");
  const [imageIndex, setImageIndex] = useState(0);
  const [activeDetailTab, setActiveDetailTab] = useState("features");
  const current = productDetails[activeProduct];

  const images = current.images || [current.image];

  const handleProductChange = (id) => {
    setActiveProduct(id);
    setImageIndex(0);
    setActiveDetailTab("features");
  };

  const goPrevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const hasIcons =
    current.features.length > 0 && typeof current.features[0] === "object";

  const detailContent = current.detailTabs || {};
  const featuresContent = detailContent.features || null;
  const specsContent = detailContent.specifications || null;

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
              onClick={() => handleProductChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

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
            {images.length > 1 && (
              <div className="product-image-nav">
                <button
                  className="product-nav-btn"
                  onClick={goPrevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="product-nav-btn"
                  onClick={goNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
            <img
              src={images[imageIndex]}
              alt={current.title}
              className="product-main-image"
            />
          </div>
        </div>
      </div>

      {/* Features & Specifications Section */}
      <div className="product-detail-section">
        <div className="container">
          <div className="product-detail-tabs">
            <button
              className={`product-detail-tab ${activeDetailTab === "features" ? "active" : ""}`}
              onClick={() => setActiveDetailTab("features")}
            >
              Features
            </button>
            <button
              className={`product-detail-tab ${activeDetailTab === "specifications" ? "active" : ""}`}
              onClick={() => setActiveDetailTab("specifications")}
            >
              Specifications
            </button>
          </div>

          <div className="product-detail-content">
            {activeDetailTab === "features" && (
              <div className="product-detail-panel animate-fade-in">
                {featuresContent ? (
                  <>
                    {featuresContent.items?.map((item, idx) => (
                      <div key={idx} className="detail-feature-block">
                        {item.image && (
                          <div className="detail-feature-image">
                            <img src={item.image} alt={item.title || ""} />
                          </div>
                        )}
                        <div className="detail-feature-info">
                          {item.title && (
                            <h3 className="detail-feature-title">
                              {item.title}
                            </h3>
                          )}
                          {item.bullets && (
                            <ul className="detail-feature-bullets">
                              {item.bullets.map((b, bi) => (
                                <li key={bi}>{b}</li>
                              ))}
                            </ul>
                          )}
                          {item.desc && (
                            <p className="detail-feature-desc">{item.desc}</p>
                          )}
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            className="detail-feature-link"
                          >
                            More Information
                          </a>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="detail-placeholder">
                    Features content coming soon.
                  </p>
                )}
              </div>
            )}

            {activeDetailTab === "specifications" && (
              <div className="product-detail-panel animate-fade-in">
                {specsContent ? (
                  <table className="specs-table">
                    <tbody>
                      {specsContent.rows?.map((row, idx) => (
                        <tr key={idx}>
                          <th>{row.label}</th>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="detail-placeholder">
                    Specifications content coming soon.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
