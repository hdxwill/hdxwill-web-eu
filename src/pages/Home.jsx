import React, { useState, useRef } from "react";
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
      id: "eco-x",
      name: "eco-x",
      desc: "Designed for capturing dentition, sinus, or TMJ with a max 16×9 cm FOV. Key features include 2D panoramic with Autofocus, extraoral bitewing images, various cephalometric modes, and Model CBCT Scan for STL extraction.",
      image: "https://hdxwill.de/wp-content/uploads/2025/02/C-1-1.png",
      features: [
        "Paired with AI technology",
        "Superior Image Quality",
        "Minimized Metal Artifacts",
        "Low Dose Radiation",
      ],
    },
    {
      id: "dentri",
      name: "Dentri",
      desc: "A professional imaging solution (max 16×14.5 cm FOV) suitable for radiology centers. It features stable image acquisition and various cephalometric imaging modes.",
      image:
        "https://hdxwill.de/wp-content/uploads/2025/02/DENTRI-CEPH-ONESHOT.png",
      features: [
        "Expansive FOV (Max 16x14.5 cm)",
        "Superior Image Quality",
        "Minimized Metal Artifacts",
        "Cephalometry add-on",
      ],
    },
    {
      id: "dentio",
      name: "Dentio",
      desc: "A lightweight, 'Two-in-One' system that doesn't require wall or floor mounting. It focuses on high-quality 2D images with minimized X-ray radiation.",
      image:
        "https://hdxwill.de/wp-content/uploads/2025/02/DENTIO-CEPH-DUAL-2.png",
      features: [
        "High quality 2D image system",
        "Minimized x ray radiation",
        "Cephalometry add-on option",
      ],
    },
    {
      id: "real-arch",
      name: "Real Arch",
      desc: "A powder-free, handheld scanner with a precision of ≤ 20 μm. It includes an anti-fogging fan-type mirror and exported files in STL, PLY, and OBJ formats.",
      image: "https://hdxwill.de/wp-content/uploads/2025/03/new-image.png",
      features: [
        "Accurate & Reliable",
        "Light-weight Handpiece",
        "Enables accurate matching with 3D",
      ],
    },
    {
      id: "dentra",
      name: "Dentra",
      desc: "An affordable, durable dental sensor known for being air-and-watertight and easy to install.",
      image: "https://hdxwill.de/wp-content/uploads/2024/12/Picture3.png",
      features: [
        "Maximum durability",
        "High image quality",
        "Air-and watertight",
        "Easy to install",
      ],
    },
  ];

  const [activeHeroTab, setActiveHeroTab] = useState("ai-mar");
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const heroTabs = [
    {
      id: "ai-mar",
      label: "AI MAR",
      image1: "/images/hero/ai_mar_2.png",
      image2: "/images/hero/ai_mar_1.png",
    },
    {
      id: "auto-landmark",
      label: "Auto landmark detection",
      image1: "/images/hero/auto_landmark_detection_2.png",
      image2: "/images/hero/auto_landmark_detection_1.png",
    },
    {
      id: "panorama",
      label: "Panorama Auto Focus",
      image1: "/images/hero/panorama_auto_focus_2.png",
      image2: "/images/hero/panorama_auto_focus_1.png",
    },
  ];
  const activeHeroData = heroTabs.find((t) => t.id === activeHeroTab);

  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(e.touches[0].clientX - rect.left, rect.width),
    );
    setSliderPosition((x / rect.width) * 100);
  };

  const [activeProduct, setActiveProduct] = useState("eco-x");
  const currentProduct = products.find((p) => p.id === activeProduct);

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
        <video className="hero-video-bg" autoPlay loop muted playsInline>
          <source
            src="/images/hero/hdxwill__banner-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content-left">
            <h1 className="hero-title">
              Superior
              <br />
              Image Quality
            </h1>
            <p className="hero-text">
              HDX WILL’s state of the art imaging reconstruction algorithm finds
              the best value of each voxel and enhances image contrast and
              sharpness.
            </p>
          </div>
          <div className="hero-content-right">
            <div
              className="hero-image-wrapper"
              ref={sliderRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              <img
                src={activeHeroData.image1}
                alt="Clear scan"
                className="hero-slider-img-base"
              />
              <img
                src={activeHeroData.image2}
                alt="Blurry scan"
                className="hero-slider-img-overlay"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              />
              <div
                className="hero-slider-line"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="hero-slider-label">image Quality</div>
              </div>
            </div>
            <div className="hero-tabs-container">
              {heroTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`hero-tab ${activeHeroTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveHeroTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dental Solutions */}
      <section className="dental-solutions">
        <div className="container">
          <div className="solutions-grid">
            <div className="solutions-image">
              <img src="/images/hero/laptop.png" alt="Dental Solutions" />
            </div>
            <div className="solutions-text">
              <h2 className="section-title text-black">Dental Solutions</h2>
              <p className="section-desc">
                Our company provides <strong>advanced dental solutions</strong>{" "}
                driven by <strong>cutting-edge X-ray imaging technology</strong>
                . With{" "}
                <strong>high-precision and dependable imaging systems</strong>,
                we redefine patient diagnosis and treatment through{" "}
                <strong>technological innovation</strong>.
              </p>
            </div>
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
          <div className="home-product-tabs">
            {products.map((p) => (
              <button
                key={p.id}
                className={`home-product-tab ${activeProduct === p.id ? "active" : ""}`}
                onClick={() => setActiveProduct(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="home-product-showcase">
            <div
              className="home-product-info animate-fade-in"
              key={currentProduct.id}
            >
              <h2 className="home-product-title">{currentProduct.name}</h2>
              <ul className="home-product-features">
                {currentProduct.features.map((feat, fidx) => (
                  <li key={fidx}>
                    <div className="home-feat-bullet"></div> {feat}
                  </li>
                ))}
              </ul>
              <div className="home-product-actions">
                <Link
                  to="/product"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#00C853", borderColor: "#00C853" }}
                >
                  Learn More
                </Link>
                <a href="#" className="download-brochure">
                  <span className="download-icon">↓</span> Download Brochure
                </a>
              </div>
            </div>

            <div
              className="home-product-image animate-fade-in"
              key={`${currentProduct.id}-img`}
            >
              <img src={currentProduct.image} alt={currentProduct.name} />
            </div>
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
