import React, { useState, useRef } from "react";
import { heroTabs } from "../../data/heroSlides";
import "./HeroSlider.css";

const HeroSlider = () => {
  const [activeHeroTab, setActiveHeroTab] = useState("ai-mar");
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const activeHeroData = heroTabs.find((t) => t.id === activeHeroTab);

  const updateSliderPosition = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e) => updateSliderPosition(e.clientX);
  const handleTouchMove = (e) => updateSliderPosition(e.touches[0].clientX);

  return (
    <section className="hero">
      <video className="hero__video-bg" autoPlay loop muted playsInline>
        <source src="/videos/home/hdxwill__banner-video.mp4" type="video/mp4" />
      </video>
      <div className="hero__overlay"></div>
      <div className="container hero__container">
        <div className="hero__content-left">
          <h1 className="hero__title">
            Superior
            <br />
            Image Quality
          </h1>
          <p className="hero__text">
            HDX WILL's state of the art imaging reconstruction algorithm finds
            the best value of each voxel and enhances image contrast and
            sharpness.
          </p>
        </div>
        <div className="hero__content-right">
          <div
            className="hero__image-wrapper"
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            <img
              src={activeHeroData.image1}
              alt="Clear scan"
              className="hero__slider-img-base"
            />
            <img
              src={activeHeroData.image2}
              alt="Blurry scan"
              className="hero__slider-img-overlay"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            />
            <div
              className="hero__slider-line"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="hero__slider-label">image Quality</div>
            </div>
          </div>
          <div className="hero__tabs-container">
            {heroTabs.map((tab) => (
              <button
                key={tab.id}
                className={`hero__tab ${activeHeroTab === tab.id ? "active" : ""}`}
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
