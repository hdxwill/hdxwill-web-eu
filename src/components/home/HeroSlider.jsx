import React, { useState, useRef } from "react";
import "./HeroSlider.css";

const HeroSlider = () => {
  const [activeHeroTab, setActiveHeroTab] = useState("ai-mar");
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const heroTabs = [
    {
      id: "ai-mar",
      label: "AI MAR",
      image1: "/images/home/ai_mar_2.png",
      image2: "/images/home/ai_mar_1.png",
    },
    {
      id: "auto-landmark",
      label: "Auto landmark detection",
      image1: "/images/home/auto_landmark_detection_2.png",
      image2: "/images/home/auto_landmark_detection_1.png",
    },
    {
      id: "panorama",
      label: "Panorama Auto Focus",
      image1: "/images/home/panorama_auto_focus_2.png",
      image2: "/images/home/panorama_auto_focus_1.png",
    },
  ];
  const activeHeroData = heroTabs.find((t) => t.id === activeHeroTab);

  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(e.touches[0].clientX - rect.left, rect.width),
    );
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="hero">
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source src="/images/home/hdxwill__banner-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content-left">
          <h1 className="hero-title">
            Superior
            <br />
            Image Quality
          </h1>
          <p className="hero-text">
            HDX WILL’s state of the art imaging reconstruction algorithm finds
            the best value of each voxel and enhances image contrast and
            sharpness.
          </p>
        </div>
        <div className="hero-content-right">
          <div
            className="hero-image-wrapper"
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            <img
              src={activeHeroData.image1}
              alt="Clear scan"
              className="hero-slider-img-base"
            />
            <img
              src={activeHeroData.image2}
              alt="Blurry scan"
              className="hero-slider-img-overlay"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            />
            <div
              className="hero-slider-line"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="hero-slider-label">image Quality</div>
            </div>
          </div>
          <div className="hero-tabs-container">
            {heroTabs.map((tab) => (
              <button
                key={tab.id}
                className={`hero-tab ${activeHeroTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveHeroTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
