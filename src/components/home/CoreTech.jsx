import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { coreTechSlides } from "../../data/coreTechSlides";
import "./CoreTech.css";

const AUTO_ROTATE_INTERVAL = 5000;

const CoreTech = () => {
  const { t } = useTranslation();
  const translatedSlides = t("home.coreTech.slides", { returnObjects: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coreTechSlides.length);
    }, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const formatTitle = (title) => {
    return title.split("\n").map((line, i, arr) => (
      <React.Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="core-tech">
      <div className="container core-tech__container">
        <div className="core-tech__viewport">
          <div
            className="core-tech__track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {coreTechSlides.map((slide, idx) => (
              <div key={idx} className="core-tech__slide">
                <div className="core-tech__content">
                  <div className="core-tech__text">
                    <h2 className="core-tech__title">
                      {formatTitle(Array.isArray(translatedSlides) && translatedSlides[idx] ? translatedSlides[idx].title : slide.title)}
                    </h2>
                    <p className="core-tech__desc">{Array.isArray(translatedSlides) && translatedSlides[idx] ? translatedSlides[idx].desc : slide.desc}</p>
                  </div>
                </div>
                <div className="core-tech__image">
                  <img src={slide.image} alt="Technology Feature" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="core-tech__pagination">
          {coreTechSlides.map((_, idx) => (
            <button
              key={idx}
              className={`core-tech__dot ${currentSlide === idx ? "active" : ""}`}
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
