import React from "react";
import "./Technology.css";

const Technology = () => {
  const techFeatures = [
    {
      title: "AI MAR",
      desc: "Clarity around metal, improving diagnostics.",
      bullets: [
        "Minimal scatter",
        "Reduced shading",
        "Clear bone/teeth structures",
      ],
      iconUrl: "https://hdxwill.de/wp-content/uploads/2025/01/image-48.png",
    },
    {
      title: "AEC",
      desc: "Adaptive Exposure Control reduces radiation.",
      bullets: ["Dose-efficient", "Unwavering image quality"],
      iconUrl: "https://hdxwill.de/wp-content/uploads/2025/01/image-49.png",
    },
    {
      title: "Panorama Auto Focus",
      desc: "Minimized distortion for clear images.",
      bullets: ["Exceptionally sharp images", "Choosing optimal layer"],
      iconUrl: "https://hdxwill.de/wp-content/uploads/2025/01/image-52.png",
    },
    {
      title: "Auto Landmark Detection",
      desc: "WillCeph’s Auto tracing feature.",
      bullets: [
        "Excellent diagnostic images",
        "Identifies anatomical locations in seconds",
      ],
      iconUrl: "https://hdxwill.de/wp-content/uploads/2025/01/image-51.png",
    },
    {
      title: "2.5D Panorama Advancement",
      desc: "2.5D panoramic feature for diagnostic needs.",
      bullets: [
        "Excellent diagnostic images",
        "Perfect for orthodontic practice",
      ],
      iconUrl: "https://hdxwill.de/wp-content/uploads/2025/01/image-50.png",
    },
    {
      title: "Time Delay Integration",
      desc: "TDI enhances responsivity through multi-stage exposures.",
      bullets: ["Multiple stages", "Synchronized charge transfer"],
      iconUrl: "https://hdxwill.de/wp-content/uploads/2024/12/image-47.svg",
    },
  ];

  return (
    <div className="technology-page animate-fade-in">
      {/* Hero Video Section */}
      <section className="tech-hero">
        <video className="tech-hero-video" autoPlay loop muted playsInline>
          <source
            src="https://hdxwill.de/wp-content/uploads/2025/03/04-technology.mp4"
            type="video/mp4"
          />
        </video>
        <div className="tech-hero-overlay"></div>
        <div className="container tech-hero-content text-center">
          <h1 className="hero-title">
            Experience the Future of Dental Imaging with Our Advanced Technology
          </h1>
        </div>
      </section>

      {/* Technology Grid Section */}
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
                  <button className="btn-tech-more">Know More</button>
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
