import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VideoHero from "../components/common/VideoHero";
import { techFeatures } from "../data/techFeatures";
import "./Technology.css";

const Technology = () => {
  const { t } = useTranslation();

  return (
    <div className="technology-page animate-fade-in">
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

      <section className="tech-grid-section">
        <div className="container">
          <div className="tech-grid">
            {techFeatures.map((tech, idx) => {
              const feat = t(`technology.features.${tech.slug}`, { returnObjects: true });
              const bullets = feat?.bullets || tech.bullets;
              return (
              <div
                key={idx}
                className="tech-card animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="tech-title">{feat?.title || tech.title}</h3>
                <p className="tech-desc">{feat?.desc || tech.desc}</p>
                <ul className="tech-bullets">
                  {bullets.map((bullet, bidx) => (
                    <li key={bidx}>&bull; {bullet}</li>
                  ))}
                </ul>
                <div className="tech-card-bottom">
                  <Link to={`/${tech.slug}`} className="btn-tech-more">{t("technology.knowMore")}</Link>
                  <img
                    src={tech.iconUrl}
                    alt={tech.title}
                    className="tech-icon"
                  />
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
