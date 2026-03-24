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
  const [featureSlide, setFeatureSlide] = useState(0);
  const current = productDetails[activeProduct];

  const images = current.images || [current.image];

  const handleProductChange = (id) => {
    setActiveProduct(id);
    setImageIndex(0);
    setActiveDetailTab("features");
    setFeatureSlide(0);
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
            <div className="product-image-viewport">
              <div
                className="product-image-track"
                style={{
                  transform: `translateX(-${imageIndex * 100}%)`,
                }}
              >
                {images.map((img, idx) => (
                  <div key={idx} className="product-image-slide">
                    <img
                      src={img}
                      alt={current.title}
                      className="product-main-image"
                    />
                  </div>
                ))}
              </div>
            </div>
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
                {featuresContent && featuresContent.items?.length > 0 ? (
                  (() => {
                    const items = featuresContent.items;
                    const safeSlide = featureSlide % items.length;
                    return (
                      <div className="detail-feature-slider">
                        <div className="detail-feature-viewport">
                          <div
                            className="detail-feature-track"
                            style={{
                              transform: `translateX(-${safeSlide * 100}%)`,
                            }}
                          >
                            {items.map((item, idx) => (
                              <div key={idx} className="detail-feature-slide">
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
                                  {item.subSections?.map((sub, si) => (
                                    <div key={si} className="detail-feature-subsection">
                                      <h4 className="detail-feature-subtitle">{sub.title}</h4>
                                      <ul className="detail-feature-bullets">
                                        {sub.bullets.map((b, bi) => (
                                          <li key={bi}>{b}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                  {item.desc && (
                                    <p className="detail-feature-desc">{item.desc}</p>
                                  )}
                                  {item.link && (
                                    <a href={item.link} className="detail-feature-link">
                                      More Information
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {items.length > 1 && (
                          <div className="detail-feature-nav">
                            <button
                              className="product-nav-btn"
                              onClick={() =>
                                setFeatureSlide(
                                  (safeSlide - 1 + items.length) % items.length
                                )
                              }
                              aria-label="Previous feature"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              className="product-nav-btn"
                              onClick={() =>
                                setFeatureSlide(
                                  (safeSlide + 1) % items.length
                                )
                              }
                              aria-label="Next feature"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })()
                ) : (
                  <p className="detail-placeholder">
                    Features content coming soon.
                  </p>
                )}
              </div>
            )}

            {activeDetailTab === "specifications" && (
              <div className="product-detail-panel animate-fade-in">
                {specsContent?.sections ? (
                  <div className="specs-sections">
                    {specsContent.sections.map((section, si) => (
                      <div key={si} className="specs-section">
                        <h3 className="specs-section-title">{section.title}</h3>
                        <table className="specs-table">
                          <tbody>
                            {section.rows.map((row, ri) => (
                              <tr key={ri}>
                                <th>{row.label}</th>
                                <td>{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {section.images && (
                          <div className="specs-images">
                            {section.images.map((img, ii) => (
                              <img key={ii} src={img} alt={`${section.title} ${ii + 1}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : specsContent?.rows ? (
                  <table className="specs-table">
                    <tbody>
                      {specsContent.rows.map((row, idx) => (
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
