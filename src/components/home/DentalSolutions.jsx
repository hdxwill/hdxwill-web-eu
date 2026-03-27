import React from "react";
import { useTranslation } from "react-i18next";
import "./DentalSolutions.css";

const DentalSolutions = () => {
  const { t } = useTranslation();

  return (
    <section className="dental-solutions">
      <div className="container">
        <div className="solutions-grid">
          <div className="solutions-image">
            <img
              src="/images/home/dental_solutions.png"
              alt={t("home.dentalSolutions.title")}
            />
          </div>
          <div className="solutions-text">
            <h2 className="solutions-title">{t("home.dentalSolutions.title")}</h2>
            <p
              className="solutions-desc"
              dangerouslySetInnerHTML={{ __html: t("home.dentalSolutions.desc") }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalSolutions;
