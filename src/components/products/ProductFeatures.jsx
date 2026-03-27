import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SliderNav from "../common/SliderNav";

const FeatureSlide = ({ item, t }) => (
  <div className="detail-feature-slide">
    {item.image && (
      <div className="detail-feature-image">
        <img src={item.image} alt={item.title || ""} />
      </div>
    )}
    <div className="detail-feature-info">
      {item.title && <h3 className="detail-feature-title">{item.title}</h3>}
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
      {item.desc && <p className="detail-feature-desc">{item.desc}</p>}
      {item.link && (
        <Link to={item.link} className="detail-feature-link">
          {t("common.moreInformation")}
        </Link>
      )}
    </div>
  </div>
);

const ProductFeatures = ({ featuresContent, featureSlide, onSlideChange }) => {
  const { t } = useTranslation();

  if (!featuresContent?.items?.length) {
    return <p className="detail-placeholder">{t("common.featuresComingSoon")}</p>;
  }

  const items = featuresContent.items;
  const safeSlide = featureSlide % items.length;

  return (
    <div className="detail-feature-slider">
      <div className="detail-feature-viewport">
        <div
          className="detail-feature-track"
          style={{ transform: `translateX(-${safeSlide * 100}%)` }}
        >
          {items.map((item, idx) => (
            <FeatureSlide key={idx} item={item} t={t} />
          ))}
        </div>
      </div>
      {items.length > 1 && (
        <SliderNav
          onPrev={() =>
            onSlideChange((safeSlide - 1 + items.length) % items.length)
          }
          onNext={() => onSlideChange((safeSlide + 1) % items.length)}
          className="detail-feature-nav"
          prevLabel="Previous feature"
          nextLabel="Next feature"
        />
      )}
    </div>
  );
};

export default ProductFeatures;
