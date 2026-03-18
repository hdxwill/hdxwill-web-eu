import React from "react";
import { Activity, Layers, Focus, Sun } from "lucide-react";
import "./CoreTech.css";

const CoreTech = () => {
  const features = [
    {
      title: "Superior Image Quality",
      desc: "HDX WILL’s state of the art imaging reconstruction algorithm finds the best value of each voxel and enhances image contrast and sharpness.",
      icon: <Sun size={32} />,
    },
    {
      title: "PrecisionMAR™",
      desc: "Offers unprecedented clarity around metal, improving diagnostics and planning. Minimal scatter, reduced shading artifact.",
      icon: <Focus size={32} />,
    },
    {
      title: "Panorama Auto Focus",
      desc: "Experience the power of our 2.5D multi-layer technology, seamlessly scrolling through 31 parallel panoramic layers.",
      icon: <Layers size={32} />,
    },
    {
      title: "Various cephalometric mode",
      desc: "AI-driven cephalometry tracing automatically identifies key landmarks, enabling instant, accurate diagnoses.",
      icon: <Activity size={32} />,
    },
  ];

  return (
    <section className="tech-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Core Technology</h2>
          <p className="section-subtitle">
            Innovating for superior diagnostics
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTech;
