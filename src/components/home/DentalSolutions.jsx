import React from "react";
import "./DentalSolutions.css";

const DentalSolutions = () => {
  return (
    <section className="dental-solutions">
      <div className="container">
        <div className="solutions-grid">
          <div className="solutions-image">
            <img
              src="/images/home/dental_solutions.png"
              alt="Dental Solutions"
            />
          </div>
          <div className="solutions-text">
            <h2 className="solutions-title">Dental Solutions</h2>
            <p className="solutions-desc">
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
