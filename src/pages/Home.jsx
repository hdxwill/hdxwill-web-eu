import React from "react";
import {
  ChevronRight,
  Activity,
  Layers,
  Maximize,
  Zap,
  ShieldCheck,
  Focus,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const products = [
    {
      name: "eco-x",
      features: [
        "Paired with AI technology",
        "Superior Image Quality",
        "Minimized Metal Artifacts",
        "Low Dose Radiation",
      ],
      icon: <Zap size={40} />,
    },
    {
      name: "Dentri",
      features: [
        "Expansive FOV (Max 16x14.5 cm)",
        "Superior Image Quality",
        "Minimized Metal Artifacts",
        "Cephalometry add-on",
      ],
      icon: <Maximize size={40} />,
    },
    {
      name: "Dentio",
      features: [
        "High quality 2D image system",
        "Minimized x ray radiation",
        "Cephalometry add-on option",
      ],
      icon: <Layers size={40} />,
    },
    {
      name: "Real Arch",
      features: [
        "Accurate & Reliable",
        "Light-weight Handpiece",
        "Enables accurate matching with 3D",
      ],
      icon: <Activity size={40} />,
    },
    {
      name: "Dentra",
      features: [
        "Maximum durability",
        "High image quality",
        "Air-and watertight",
        "Easy to install",
      ],
      icon: <ShieldCheck size={40} />,
    },
  ];

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
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-subtitle">HDX WILL Europe</span>
          <h1 className="hero-title">Advanced Dental Solutions</h1>
          <p className="hero-text">
            Driven by cutting-edge X-ray imaging technology. With high-precision
            and dependable imaging systems, we redefine patient diagnosis and
            treatment through technological innovation.
          </p>
          <div className="hero-actions">
            <Link to="/product" className="btn btn-primary">
              Explore Products{" "}
              <ChevronRight size={18} style={{ marginLeft: "8px" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Technology / Features */}
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

      {/* Products Showcase */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Comprehensive solutions for modern dentistry
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-icon-wrapper">{product.icon}</div>
                <h3 className="product-name">{product.name}</h3>
                <ul className="product-features">
                  {product.features.map((feat, fidx) => (
                    <li key={fidx}>
                      <ChevronRight size={14} className="list-icon" /> {feat}
                    </li>
                  ))}
                </ul>
                <div className="product-action">
                  <Link to="/product" className="view-more">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="testimonials-section">
        <div className="container text-center">
          <h2 className="section-title" style={{ color: "white" }}>
            What Our Clients Say About Us
          </h2>
          <p
            className="section-subtitle"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Trusted by professionals worldwide.
          </p>
          <div className="testimonials-wrapper">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "HDX WILL has completely transformed our diagnostic
                capabilities. The image quality is unparalleled."
              </p>
              <div className="testimonial-author">
                - Dr. Smith, Dental Clinic
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
