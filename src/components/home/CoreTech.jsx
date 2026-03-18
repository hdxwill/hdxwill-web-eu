import React, { useState, useEffect } from "react";
import "./CoreTech.css";

const slides = [
  {
    title: (
      <>
        Superior
        <br />
        Image Quality
      </>
    ),
    desc: "HDX WILL’s state of the art imaging reconstruction algorithm finds the best value of each voxel and enhances image contrast and sharpness.",
    image: "/images/home/home-tech_1.png",
  },
  {
    title: <>PrecisionMAR</>,
    desc: "Offers unprecedented clarity around metal, improving diagnostics and planning. Minimal scatter, reduced shading artifact.",
    image: "/images/home/home-tech_2.png",
  },
  {
    title: (
      <>
        Panorama
        <br />
        Auto Focus
      </>
    ),
    desc: "Experience the power of our 2.5D multi-layer technology, seamlessly scrolling through 31 parallel panoramic layers.",
    image: "/images/home/home-tech_3.png",
  },
  {
    title: (
      <>
        Various
        <br />
        cephalometric mode
      </>
    ),
    desc: "AI-driven cephalometry tracing automatically identifies key landmarks, enabling instant, accurate diagnoses.",
    image: "/images/home/home-tech_4.png",
  },
];

const CoreTech = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="tech-section">
      <div className="container tech-container-relative">
        <div className="tech-slider-viewport">
          <div
            className="tech-slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="tech-slide">
                <div className="tech-slider-content">
                  <div className="tech-text-container">
                    <h2 className="tech-slide-title">{slide.title}</h2>
                    <p className="tech-slide-desc">{slide.desc}</p>
                  </div>
                </div>
                <div className="tech-slider-image">
                  <img src={slide.image} alt="Technology Feature" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-slider-pagination">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`tech-dot ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTech;
