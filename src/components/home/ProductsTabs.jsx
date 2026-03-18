import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsTabs.css";

const ProductsTabs = () => {
  const products = [
    {
      id: "eco-x",
      name: "eco-x",
      desc: "Designed for capturing dentition, sinus, or TMJ with a max 16×9 cm FOV. Key features include 2D panoramic with Autofocus, extraoral bitewing images, various cephalometric modes, and Model CBCT Scan for STL extraction.",
      image: "/images/products/C-1-1.png",
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
      image: "/images/products/DENTRI-CEPH-ONESHOT.png",
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
      image: "/images/products/DENTIO-CEPH-DUAL-2.png",
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
      image: "/images/products/new-image.png",
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
      image: "/images/products/Picture3.png",
      features: [
        "Maximum durability",
        "High image quality",
        "Air-and watertight",
        "Easy to install",
      ],
    },
  ];

  const [activeProduct, setActiveProduct] = useState("eco-x");
  const currentProduct = products.find((p) => p.id === activeProduct);

  return (
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
  );
};

export default ProductsTabs;
