import React from "react";
import "./DentalSolutions.css";

const DentalSolutions = () => {
  return (
    <section className="dental-solutions">
      <div className="container">
        <div className="solutions-grid">
          <div className="solutions-image">
            <img src="/images/home/laptop.png" alt="Dental Solutions" />
          </div>
          <div className="solutions-text">
            <h2 className="section-title text-black">Dental Solutions</h2>
            <p className="section-desc">
              Our company provides <strong>advanced dental solutions</strong>{" "}
              driven by <strong>cutting-edge X-ray imaging technology</strong>.
              With{" "}
              <strong>high-precision and dependable imaging systems</strong>, we
              redefine patient diagnosis and treatment through{" "}
              <strong>technological innovation</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalSolutions;
