import React from "react";
import { Link } from "react-router-dom";
import VideoHero from "../components/common/VideoHero";
import { techFeatures } from "../data/techFeatures";
import "./Technology.css";

const Technology = () => {
  return (
    <div className="technology-page animate-fade-in">
      <VideoHero
        videoSrc="/videos/tech/04-technology.mp4"
        title={
          <>
            Experience the Future of Dental Imaging
            <br />
            with Our Advanced Technology
          </>
        }
      />

      <section className="tech-grid-section">
        <div className="container">
          <div className="tech-grid">
            {techFeatures.map((tech, idx) => (
              <div
                key={idx}
                className="tech-card animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="tech-title">{tech.title}</h3>
                <p className="tech-desc">{tech.desc}</p>
                <ul className="tech-bullets">
                  {tech.bullets.map((bullet, bidx) => (
                    <li key={bidx}>&bull; {bullet}</li>
                  ))}
                </ul>
                <div className="tech-card-bottom">
                  <Link to={`/${tech.slug}`} className="btn-tech-more">Know More</Link>
                  <img
                    src={tech.iconUrl}
                    alt={tech.title}
                    className="tech-icon"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
