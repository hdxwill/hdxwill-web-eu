import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsTabs.css";

const Icons = {
  ai: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="5" width="14" height="14" rx="1.5" ry="1.5"></rect>
      <rect x="9" y="9" width="6" height="6" fill="#111" stroke="none"></rect>
      <text
        x="12"
        y="13.5"
        fontSize="4.5"
        textAnchor="middle"
        fill="#fff"
        stroke="none"
        fontWeight="bold"
      >
        AI
      </text>
      <line x1="9" y1="2" x2="9" y2="5"></line>
      <line x1="15" y1="2" x2="15" y2="5"></line>
      <line x1="9" y1="19" x2="9" y2="22"></line>
      <line x1="15" y1="19" x2="15" y2="22"></line>
      <line x1="19" y1="9" x2="22" y2="9"></line>
      <line x1="19" y1="15" x2="22" y2="15"></line>
      <line x1="2" y1="9" x2="5" y2="9"></line>
      <line x1="2" y1="15" x2="5" y2="15"></line>
      <circle cx="9" cy="2" r="1.5" fill="currentColor"></circle>
      <circle cx="15" cy="2" r="1.5" fill="currentColor"></circle>
      <circle cx="9" cy="22" r="1.5" fill="currentColor"></circle>
      <circle cx="15" cy="22" r="1.5" fill="currentColor"></circle>
      <circle cx="2" cy="9" r="1.5" fill="currentColor"></circle>
      <circle cx="2" cy="15" r="1.5" fill="currentColor"></circle>
      <circle cx="22" cy="9" r="1.5" fill="currentColor"></circle>
      <circle cx="22" cy="15" r="1.5" fill="currentColor"></circle>
    </svg>
  ),
  diamond: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 6h14l4 5-11 11L1 11Z"></path>
      <path d="M11 6 8 11l4 11"></path>
      <path d="M12 6v16"></path>
      <path d="M13 6l3 5-4 11"></path>
      <path d="M1 11h22"></path>
    </svg>
  ),
  toothSparkle: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M10 20.5c-1 0-2-.5-2-2.5v-3.5c0-1.5-1-2.5-2-2.5s-2-1-2-2A3 3 0 0 1 7 7c1 0 2 1 2 1s1-1.5 3-1.5a3.5 3.5 0 0 1 3.5 3.5c0 1.5-.5 2-2 2s-3 1-3 2.5v3.5c0 2-1 2.5-2 2.5Z"
        transform="translate(1,0)"
      />
      <path
        d="M14 7c1 0 2 1 2 1s1-1.5 3-1.5a3.5 3.5 0 0 1 3.5 3.5c0 1.5-.5 2-2 2s-3 1-3 2.5v3.5c0 2-1 2.5-2 2.5-1 0-2-.5-2-2.5v-3.5c0-1.5-1-2.5-2-2.5s-2-1-2-2A3 3 0 0 1 14 7Z"
        transform="translate(-1,0)"
      />
      <path
        d="M5 2l1.5 1.5M5 5l1.5-1.5M8 2L6.5 3.5M6.5 3.5v2"
        strokeWidth="1"
      />
      <path
        d="M20 20l-1.5-1.5M20 17l-1.5 1.5M23 17l-1.5 1.5M21.5 18.5v2"
        strokeWidth="1"
      />
    </svg>
  ),
  heartPlus: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M19.5 13.5c1.4-1.4 2.5-3.2 2.5-5.5A5.5 5.5 0 0 0 16.5 2.5c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8c0 2.3 1.1 4.1 2.5 5.5L12 21Z"
        fill="#111"
        stroke="none"
      />
      <circle
        cx="16"
        cy="16"
        r="6"
        fill="#111"
        stroke="#fff"
        strokeWidth="2.5"
      />
      <path d="M16 13v6M13 16h6" stroke="#fff" strokeWidth="2.5" />
    </svg>
  ),
  fov: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="8" width="20" height="8" rx="1" ry="1"></rect>
      <path d="M5 12h14"></path>
      <path d="M8 9l-3 3 3 3"></path>
      <path d="M16 9l3 3-3 3"></path>
    </svg>
  ),
  headAi: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 3a6 6 0 0 0-6 6v2l-1.5 1.5A3.5 3.5 0 0 0 4.5 15H5v4a2 2 0 0 0 2 2h4l4-3h1a4 4 0 0 0 4-4v-4a6 6 0 0 0-6-6Z"></path>
      <circle cx="15" cy="10" r="1.5"></circle>
      <circle cx="11" cy="14" r="1.5"></circle>
      <circle cx="15" cy="16" r="1.5"></circle>
      <path d="M15 11.5v3"></path>
      <path d="M12.5 14h1.5"></path>
      <path d="M13.8 11.2l-1.6 1.6"></path>
    </svg>
  ),
  headAiExpanded: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2a6.5 6.5 0 0 0-6.5 6.5v2.5L5 12.5a3 3 0 0 0-3 3V17a2 2 0 0 0 2 2h5l4-3h1.5A4.5 4.5 0 0 0 19 11.5V6.5A6.5 6.5 0 0 0 12.5 2h-.5z"></path>
      <rect
        x="9"
        y="8"
        width="6"
        height="6"
        rx="1"
        stroke="none"
        fill="#111"
      ></rect>
      <text
        x="12"
        y="12"
        fontSize="3"
        textAnchor="middle"
        fill="#fff"
        stroke="none"
        fontWeight="bold"
      >
        AI
      </text>
      <circle cx="5" cy="10" r="1" fill="currentColor"></circle>
      <circle cx="5" cy="13" r="1" fill="currentColor"></circle>
      <line x1="5" y1="10" x2="8" y2="10"></line>
      <line x1="5" y1="13" x2="8" y2="13"></line>
    </svg>
  ),
  monitor2d: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="20" height="12" rx="1.5" ry="1.5"></rect>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
      <text
        x="12"
        y="13.5"
        fontSize="6"
        textAnchor="middle"
        fill="#111"
        stroke="none"
        fontWeight="bold"
      >
        2D
      </text>
    </svg>
  ),
  toothXray: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="1"></rect>
      <path d="M15 16s-1.5-1.5-3-1.5-3 1.5-3 1.5V9.5C9 8.5 10.5 7.5 12 7.5s3 1 3 2V16Z"></path>
      <path d="M12 7.5v-4"></path>
      <path d="M12 20.5v-4.5"></path>
      <path d="M5.5 12h4"></path>
      <path d="M14.5 12h4"></path>
      <path d="M7 6l2 2"></path>
      <path d="M17 6l-2 2"></path>
      <path d="M7 18l2-2"></path>
      <path d="M17 18l-2-2"></path>
    </svg>
  ),
  skull: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c-4.4 0-8 3.6-8 8s1.6 4.7 2.2 6.5c.2.6-.1 1.2-.6 1.6-1.1.9-1.6 2.5-1.6 3.9h6v-2h4v2h6c0-1.4-.5-3-1.6-3.9-.5-.4-.8-1-.6-1.6.6-1.8 2.2-2.1 2.2-6.5 0-4.4-3.6-8-8-8z"></path>
      <circle cx="8" cy="12" r="2.5"></circle>
      <circle cx="16" cy="12" r="2.5"></circle>
      <path d="M12 16v2"></path>
    </svg>
  ),
  target: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="12" cy="12" r="1.5"></circle>
      <path d="M22 2 15 9"></path>
      <path d="M22 2l-2 5-3-3 5-2Z"></path>
      <path d="M5 5L2 2M19 19l3 3M5 19l-3 3" strokeDasharray="2 2"></path>
    </svg>
  ),
  feather: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 4c-5-2-11 1-13 6-3 1-5 4-5 6v3h3c2 0 5-2 6-5 5-2 8-8 6-13Z"></path>
      <path d="M13 14 7 20"></path>
      <path d="M15 9l-3.5 3.5"></path>
      <path d="M18 6l-2 2"></path>
      <path d="M6 13c3 1.5 6 1 8-1"></path>
    </svg>
  ),
  scanFrame: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 8V6a2 2 0 0 1 2-2h2"></path>
      <path d="M15 4h2a2 2 0 0 1 2 2v2"></path>
      <path d="M19 16v2a2 2 0 0 1-2 2h-2"></path>
      <path d="M9 20H7a2 2 0 0 1-2-2v-2"></path>
      <rect x="8" y="9" width="8" height="6"></rect>
    </svg>
  ),
  boxMatch: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="8" width="10" height="12" rx="1"></rect>
      <rect
        x="8"
        y="4"
        width="12"
        height="12"
        rx="1"
        strokeDasharray="3 3"
      ></rect>
    </svg>
  ),
  brokenChain: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
      <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
      <line x1="8" y1="12" x2="11" y2="12"></line>
      <line x1="16" y1="12" x2="13" y2="12"></line>
      <path d="M10 6l4 12" strokeWidth="1.5"></path>
    </svg>
  ),
  hd: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="1.5"></rect>
      <text
        x="12"
        y="13.5"
        fontSize="6.5"
        textAnchor="middle"
        fill="#111"
        stroke="none"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        HD
      </text>
    </svg>
  ),
  power: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 6.5A8 8 0 1 1 8 6.5"></path>
      <line x1="12" y1="3" x2="12" y2="12"></line>
      <circle cx="12" cy="12" r="10" strokeDasharray="3 3"></circle>
    </svg>
  ),
  shieldCheck: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  ),
  wrenchHex: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2 L22 7 L22 17 L12 22 L2 17 L2 7 Z"></path>
      <circle cx="16" cy="8" r="1.5" fill="currentColor"></circle>
      <path d="M14 9l-5 5"></path>
      <circle cx="7.5" cy="15.5" r="2.5"></circle>
      <circle cx="7.5" cy="15.5" r="1"></circle>
    </svg>
  ),
};

const ProductsTabs = () => {
  const products = [
    {
      id: "eco-x",
      name: "eco-x",
      desc: "",
      image: "/images/home/home-ecox.png",
      features: [
        { text: "Paired with AI technology", icon: "ai" },
        { text: "Superior Image Quality", icon: "diamond" },
        { text: "Minimized Metal Artifacts", icon: "toothSparkle" },
        { text: "Low Dose Radiation", icon: "heartPlus" },
        { text: "Wide FOV", icon: "fov" },
        { text: "Auto Cephalometric Landmark Tracing", icon: "headAi" },
      ],
    },
    {
      id: "dentri",
      name: "Dentri",
      desc: "",
      image: "/images/home/home-dentri.png",
      features: [
        { text: "Expansive FOV (Max 16x14.5 cm)", icon: "headAiExpanded" },
        { text: "Superior Image Quality", icon: "diamond" },
        { text: "Minimized Metal Artifacts", icon: "toothSparkle" },
        { text: "Low Dose Radiation", icon: "heartPlus" },
        { text: "Cephalometry add-on option", icon: "skull" },
      ],
    },
    {
      id: "dentio",
      name: "Dentio",
      desc: "",
      image: "/images/home/home-dentio.png",
      features: [
        { text: "High quality 2D image system", icon: "monitor2d" },
        { text: "Minimized x ray radiation", icon: "toothXray" },
        { text: "Cephalometry add-on option", icon: "skull" },
      ],
    },
    {
      id: "real-arch",
      name: "Real Arch",
      desc: "",
      image: "/images/home/home-realarch.png",
      features: [
        { text: "Accurate & Reliable", icon: "target" },
        { text: "Light-weight Handpiece", icon: "feather" },
        { text: "Easy & convenient Scan Program", icon: "scanFrame" },
        { text: "Enables accurate matching with 3D", icon: "boxMatch" },
      ],
    },
    {
      id: "dentra",
      name: "Dentra",
      desc: "",
      image: "/images/home/home-dentra.png",
      features: [
        { text: "Maximum durability", icon: "brokenChain" },
        { text: "High image quality", icon: "hd" },
        { text: "Convenient quickstart", icon: "power" },
        { text: "Air-and watertight", icon: "shieldCheck" },
        { text: "Easy to install", icon: "wrenchHex" },
      ],
    },
  ];

  const [activeProduct, setActiveProduct] = useState("eco-x");
  const currentProduct = products.find((p) => p.id === activeProduct);

  const getIcon = (iconName) => {
    return Icons[iconName] || Icons.diamond; // Fallback
  };

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="products-section-title">Our Products</h2>
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
            <h3 className="home-product-brand">{currentProduct.name}</h3>

            <div className="home-product-features-grid">
              {currentProduct.features.map((feat, fidx) => (
                <div className="home-product-feature-item" key={fidx}>
                  <div className="home-feature-icon">{getIcon(feat.icon)}</div>
                  <span className="home-feature-text">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="home-product-actions">
              <a href="#" className="btn-download-brochure">
                <span className="arrow-down">↓</span> Download Brochure
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
  );
};

export default ProductsTabs;
