import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import SliderNav from "../common/SliderNav";
import useSliderDrag from "../../hooks/useSliderDrag";
import { testimonials } from "../../data/testimonials";
import "./Testimonials.css";

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const { isDragging, translateX, handlers } = useSliderDrag({
    onNext: handleNext,
    onPrev: handlePrev,
  });

  return (
    <section className="testimonials">
      <div className="testimonials__bg-overlap">
        <div className="testimonials__bg-black"></div>
        <div className="testimonials__bg-light"></div>
      </div>

      <div className="container testimonials__content">
        <div className="testimonials__video-container">
          <iframe
            className="testimonials__video-iframe"
            src="https://www.youtube.com/embed/OTXUEiDMx9M"
            title="Company Introduce HDX WILL Europe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="testimonials__grid">
          <div className="testimonials__header">
            <h2 className="testimonials__title">
              {t("home.testimonials.title").split("\n").map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          <div className="testimonials__slider-container">
            <div className="testimonials__slider-header">
              <div className="testimonials__quote-icon">
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
              <SliderNav
                onPrev={handlePrev}
                onNext={handleNext}
                className="testimonials__controls"
                prevLabel="Previous Testimonial"
                nextLabel="Next Testimonial"
              />
            </div>

            <div
              className={`testimonials__viewport ${isDragging ? "grabbing" : "grab"}`}
              ref={sliderRef}
              {...handlers}
            >
              <div
                className="testimonials__track"
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                {testimonials.map((item, idx) => (
                  <div className="testimonials__slide" key={idx}>
                    <p className="testimonials__text">{item.text}</p>
                    <div className="testimonials__author">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="testimonials__author-img"
                      />
                      <div className="testimonials__author-info">
                        <h4 className="testimonials__author-name">
                          {item.name}
                        </h4>
                        <p className="testimonials__author-role">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials__dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`testimonials__dot ${currentIndex === idx ? "active" : ""}`}
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
