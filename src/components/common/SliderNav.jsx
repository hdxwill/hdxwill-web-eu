import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./SliderNav.css";

const SliderNav = ({ onPrev, onNext, className = "", prevLabel = "Previous", nextLabel = "Next" }) => (
  <div className={`slider-nav ${className}`}>
    <button className="slider-nav-btn" onClick={onPrev} aria-label={prevLabel}>
      <ChevronLeft size={20} />
    </button>
    <button className="slider-nav-btn" onClick={onNext} aria-label={nextLabel}>
      <ChevronRight size={20} />
    </button>
  </div>
);

export default SliderNav;
