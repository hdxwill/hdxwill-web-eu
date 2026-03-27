import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VideoHero from "../components/common/VideoHero";
import ProductShowcase from "../components/products/ProductShowcase";
import ProductFeatures from "../components/products/ProductFeatures";
import ProductSpecifications from "../components/products/ProductSpecifications";
import { productDetails, productTabs } from "../data/products";
import "./Products.css";

const Products = () => {
  const { t } = useTranslation();
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

  // Build translated feature items
  const translatedFeatureItems = t(`products.${activeProduct}.featureItems`, { returnObjects: true });
  const translatedFeaturesContent = detailContent.features ? {
    ...detailContent.features,
    items: detailContent.features.items.map((item, idx) => {
      const trans = Array.isArray(translatedFeatureItems) ? translatedFeatureItems[idx] : null;
      if (!trans) return item;
      return {
        ...item,
        title: trans.title || item.title,
        bullets: trans.bullets || item.bullets,
        subSections: trans.subSections || item.subSections,
      };
    }),
  } : detailContent.features;

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
            {t("products.heroTitle").split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
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
              {t("products.features")}
            </button>
            <button
              className={`product-detail-tab ${activeDetailTab === "specifications" ? "active" : ""}`}
              onClick={() => setActiveDetailTab("specifications")}
            >
              {t("products.specifications")}
            </button>
          </div>

          <div className="product-detail-content">
            {activeDetailTab === "features" && (
              <div className="product-detail-panel animate-fade-in">
                <ProductFeatures
                  featuresContent={translatedFeaturesContent}
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
