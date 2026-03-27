import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VideoHero from "../components/common/VideoHero";
import { techFeatures } from "../data/techFeatures";
import "./TechDetail.css";

const TechDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const tech = techFeatures.find((tf) => tf.slug === slug);

  if (!tech) {
    return (
      <div className="tech-detail-page animate-fade-in">
        <div className="container" style={{ padding: "8rem 1.5rem", minHeight: "60vh" }}>
          <h1 style={{ color: "var(--primary)", marginBottom: "1rem" }}>
            {t("technology.detail.pageNotFound")}
          </h1>
          <Link to="/technology" className="btn btn-primary">
            {t("technology.detail.backToTechnology")}
          </Link>
        </div>
      </div>
    );
  }

  const detail = tech.detail;
  const detailTrans = t(`technology.detail.${slug}`, { returnObjects: true });

  return (
    <div className="tech-detail-page animate-fade-in">
      <VideoHero
        videoSrc="/videos/tech/04-technology.mp4"
        title={
          <>
            {t("technology.heroTitle").split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </>
        }
      />

      <div className="tech-detail-content">
        <div className="container">
          {detail ? (
            <div className="tech-detail-layout">
              <div className="tech-detail-image">
                <img src={detail.image} alt={tech.title} />
              </div>
              <div className="tech-detail-info">
                <Link to="/technology" className="tech-detail-back-btn">
                  {t("technology.detail.back")}
                </Link>
                <h2 className="tech-detail-full-title">{detailTrans?.fullTitle || detail.fullTitle}</h2>
                <div className="tech-detail-paragraphs">
                  {(detailTrans?.paragraphs || detail.paragraphs).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {detail.products && detail.products.length > 0 && (
                  <div className="tech-detail-products">
                    <p className="tech-detail-products-label">
                      {t("technology.detail.productsWithTech")}
                    </p>
                    <div className="tech-detail-products-btns">
                      {detail.products.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product?tab=${product.id}`}
                          className="tech-detail-product-btn"
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="tech-detail-placeholder">
              {t("technology.detail.comingSoon")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechDetail;
