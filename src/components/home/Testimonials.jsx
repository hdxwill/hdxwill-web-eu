import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";

const testimonialsData = [
  {
    text: "It's a very good machine in terms of 3D image, everything we want. I'm really very happy, so I highly recommend it!",
    name: "M. BEN ADIL",
    role: "SOS Dental Numeric, Paris, France",
    image: "/images/home/M.-Ben-Adil.png",
  },
  {
    text: "The contributions of having an HDX WILL in our practice is that it provides images of very high quality access by the patient to the machine. And the directives the machine provides are very easy to understand.",
    name: "CLEBER SILVA, DDS, OMFR, FICOI, FAAIP",
    role: "School of Dentistry, University of Washington, USA",
    image: "/images/home/CLEBER-SILVA-DDS-OMFR-FICOI-FAAIP.png",
  },
  {
    text: "The 3D capture area can be individually adjusted with the eco-x AI, allowing for minimal radiation exposure, especially in children. The Pano Scout function allows for precise determination of the 3D capture area, allowing for targeted diagnostic imaging. The price-performance ratio is excellent, and the 2D and 3D image quality is truly remarkable.. I can wholeheartedly recommend the eco-x AI system.",
    name: "DR. KRESHNIK GRAJCEVCI",
    role: "Clinic Dental Pro Munich Dr. Dr. Kreshnik Grajcevci",
    image: "/images/home/Client.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1,
    );
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type.includes("mouse") ? e.pageX : e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold for snapping to next/prev slide (e.g., 50px)
    if (translateX < -50) {
      handleNext();
    } else if (translateX > 50) {
      handlePrev();
    }
    setTranslateX(0);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) handleDragEnd();
    };
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, translateX]);

  return (
    <section className="testimonials-section">
      {/* Background overlapping layout */}
      <div className="bg-overlap-container">
        <div className="bg-overlap-black"></div>
        <div className="bg-overlap-light"></div>
      </div>

      <div className="container testimonials-content">
        {/* Youtube Video Embed overlapping the backgrounds */}
        <div className="video-container">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/OTXUEiDMx9M"
            title="Company Introduce HDX WILL Europe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="testimonials-grid">
          <div className="testimonials-header">
            <h2 className="testimonials-title">
              What Our
              <br />
              Client Say
              <br />
              About Us:
            </h2>
          </div>

          <div className="testimonials-slider-container">
            <div className="testimonials-slider-header">
              <div className="quote-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 11H6V7H10V11ZM10 13H6C6 15.21 7.79 17 10 17V19C6.69 19 4 16.31 4 13V5H12V13C12 14.1 11.1 15 10 15V13ZM20 11H16V7H20V11ZM20 13H16C16 15.21 17.79 17 20 17V19C16.69 19 14 16.31 14 13V5H22V13C22 14.1 21.1 15 20 15V13Z" />
                </svg>
              </div>
              <div className="slider-controls">
                <button
                  className="control-btn"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="control-btn"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div
              className={`testimonials-viewport ${isDragging ? "grabbing" : "grab"}`}
              ref={sliderRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
            >
              <div
                className="testimonials-track"
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                {testimonialsData.map((item, idx) => (
                  <div className="testimonial-slide" key={idx}>
                    <p className="testimonial-text">{item.text}</p>
                    <div className="testimonial-author">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="author-img"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{item.name}</h4>
                        <p className="author-role">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials-dots">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
