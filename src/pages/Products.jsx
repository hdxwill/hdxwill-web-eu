import React, { useState } from "react";
import { Download } from "lucide-react";
import "./Products.css";

const Products = () => {
  const [activeProduct, setActiveProduct] = useState("eco-x");

  const productsData = {
    "eco-x": {
      title: "eco-x",
      desc: "Designed for capturing dentition, sinus, or TMJ with a max 16×9 cm FOV. Key features include 2D panoramic with Autofocus, extraoral bitewing images, various cephalometric modes, and Model CBCT Scan for STL extraction.",
      image: "https://hdxwill.de/wp-content/uploads/2025/02/C-1-1.png",
      features: [
        "Paired with AI Technology",
        "Superior Image Quality",
        "Minimized Metal Artifacts",
        "Low Dose Radiation",
        "Wide FOV",
      ],
      brochureUrl: "#",
    },
    dentri: {
      title: "Dentri",
      desc: "A professional imaging solution (max 16×14.5 cm FOV) suitable for radiology centers. It features stable image acquisition and various cephalometric imaging modes.",
      image:
        "https://hdxwill.de/wp-content/uploads/2025/02/DENTRI-CEPH-ONESHOT.png",
      features: [
        "Expansive FOV (Max 16x14.5 cm)",
        "Superior Image Quality",
        "Minimized Metal Artifacts",
        "Low Dose Radiation",
      ],
      brochureUrl: "#",
    },
    dentio: {
      title: "Dentio",
      desc: 'A lightweight, "Two-in-One" system that doesn\'t require wall or floor mounting. It focuses on high-quality 2D images with minimized X-ray radiation.',
      image:
        "https://hdxwill.de/wp-content/uploads/2025/02/DENTIO-CEPH-DUAL-2.png",
      features: [
        "High quality 2D image system",
        "Minimized x ray radiation",
        "Cephalometry add-on option",
      ],
      brochureUrl: "#",
    },
    "real-arch": {
      title: "Real Arch",
      desc: "A powder-free, handheld scanner with a precision of ≤ 20 μm. It includes an anti-fogging fan-type mirror and exported files in STL, PLY, and OBJ formats.",
      image: "https://hdxwill.de/wp-content/uploads/2025/03/new-image.png",
      features: [
        "Accurate & Reliable",
        "Light-weight Handpiece",
        "Easy & convenient Scan Program",
        "Enables accurate matching with 3D",
      ],
      brochureUrl: "#",
    },
    dentra: {
      title: "Dentra",
      desc: "An affordable, durable dental sensor known for being air-and-watertight and easy to install.",
      image: "https://hdxwill.de/wp-content/uploads/2024/12/Picture3.png",
      features: [
        "Maximum durability",
        "High image quality",
        "Convenient quickstart",
        "Air-and watertight",
        "Easy to install",
      ],
      brochureUrl: "#",
    },
  };

  const productTabs = [
    { id: "eco-x", label: "eco-x" },
    { id: "dentri", label: "Dentri" },
    { id: "dentio", label: "Dentio" },
    { id: "real-arch", label: "Real Arch" },
    { id: "dentra", label: "Dentra" },
  ];

  const current = productsData[activeProduct];

  return (
    <div className="products-page animate-fade-in">
      <div
        className="container"
        style={{ paddingTop: "120px", paddingBottom: "80px" }}
      >
        {/* Product Navigation Tabs */}
        <div className="product-tabs">
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              className={`product-tab-btn ${activeProduct === tab.id ? "active" : ""}`}
              onClick={() => setActiveProduct(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Details Section */}
        <div className="product-showcase">
          <div className="product-info animate-fade-in" key={current.title}>
            <h1 className="product-title">{current.title}</h1>
            <p className="product-desc">{current.desc}</p>

            <ul className="product-feature-list">
              {current.features.map((feat, idx) => (
                <li key={idx} className="feat-item">
                  <div className="feat-icon"></div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="product-actions">
              <a href="/contact-us" className="btn btn-primary">
                Contact Us
              </a>
              <a href={current.brochureUrl} className="brochure-link">
                <Download size={20} /> Download Brochure
              </a>
            </div>
          </div>

          <div
            className="product-image-container animate-fade-in"
            key={current.image}
          >
            <img
              src={current.image}
              alt={current.title}
              className="product-main-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
