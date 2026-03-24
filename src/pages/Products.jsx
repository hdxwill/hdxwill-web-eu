import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VideoHero from "../components/common/VideoHero";
import ProductShowcase from "../components/products/ProductShowcase";
import ProductFeatures from "../components/products/ProductFeatures";
import ProductSpecifications from "../components/products/ProductSpecifications";
import { productDetails, productTabs } from "../data/products";
import "./Products.css";

const Products = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = tabParam && productDetails[tabParam] ? tabParam : "eco-x";
  const [activeProduct, setActiveProduct] = useState(initialTab);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeDetailTab, setActiveDetailTab] = useState("features");
  const [featureSlide, setFeatureSlide] = useState(0);

  useEffect(() => {
    if (tabParam && productDetails[tabParam]) {
      setActiveProduct(tabParam);
      setImageIndex(0);
      setActiveDetailTab("features");
      setFeatureSlide(0);
    }
  }, [tabParam]);

  const current = productDetails[activeProduct];
  const images = current.images || [current.image];
  const detailContent = current.detailTabs || {};

  const handleProductChange = (id) => {
    setActiveProduct(id);
    setImageIndex(0);
    setActiveDetailTab("features");
    setFeatureSlide(0);
  };

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

        <ProductShowcase
          current={current}
          images={images}
          imageIndex={imageIndex}
          onPrevImage={() =>
            setImageIndex((prev) => (prev - 1 + images.length) % images.length)
          }
          onNextImage={() =>
            setImageIndex((prev) => (prev + 1) % images.length)
          }
        />
      </div>

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
                <ProductFeatures
                  featuresContent={detailContent.features}
                  featureSlide={featureSlide}
                  onSlideChange={setFeatureSlide}
                />
              </div>
            )}

            {activeDetailTab === "specifications" && (
              <div className="product-detail-panel animate-fade-in">
                <ProductSpecifications
                  specsContent={detailContent.specifications}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
