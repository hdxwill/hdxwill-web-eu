import React, { useState } from "react";
import { ChevronRight, Download } from "lucide-react";
import "./Company.css";

const Company = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="company-page animate-fade-in">
      {/* Hero Section */}
      <section className="company-hero">
        <div className="company-hero-overlay"></div>
        <div className="container company-hero-content text-center">
          <h1 className="hero-title">
            Pioneering Medical and Dental Innovation Since 1982,
            <br /> Built on a Legacy of Excellence
          </h1>
        </div>
      </section>

      {/* Tabs Layout */}
      <section className="company-tabs-section">
        <div className="container">
          <div className="tabs-nav text-center">
            <button
              className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              ABOUT US
            </button>
            <button
              className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
              onClick={() => setActiveTab("history")}
            >
              HISTORY
            </button>
            <button
              className={`tab-btn ${activeTab === "partners" ? "active" : ""}`}
              onClick={() => setActiveTab("partners")}
            >
              PARTNERS
            </button>
          </div>

          <div className="tab-content">
            {/* About Us Tab */}
            {activeTab === "about" && (
              <div className="tab-pane animate-fade-in flex-layout">
                <div className="tab-image animate-fade-in">
                  <img
                    src="/images/company/20161004151559_xuflzoez_edit_v1.png"
                    alt="HDX WILL Germany Office"
                  />
                </div>
                <div className="tab-text">
                  <span className="section-subtitle">HDX WILL</span>
                  <h2 className="section-title" style={{ fontSize: "3rem" }}>
                    Our Vision
                  </h2>
                  <p>
                    HDX WILL aspires to revolutionize global dental imaging and
                    medical diagnostics through relentless innovation and
                    cutting-edge technology. By advancing CBCT and expanding
                    into fields like plastic surgery and otolaryngology, the
                    company is reshaping the future of healthcare imaging.
                  </p>
                  <p>
                    Committed to setting new industry benchmarks, HDX WILL aims
                    to establish its technology as the definitive standard in
                    diagnostics worldwide, driving precision, efficiency, and
                    global impact.
                  </p>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === "history" && (
              <div className="tab-pane animate-fade-in flex-layout row-reverse">
                <div className="tab-image animate-fade-in">
                  <img
                    src="/images/company/image-66.png"
                    alt="Eco-friendly dental technology"
                  />
                </div>
                <div className="tab-text">
                  <span className="section-subtitle">Since 1982</span>
                  <h2 className="section-title" style={{ fontSize: "3rem" }}>
                    Our History
                  </h2>
                  <p>
                    HDX WILL began as a medical device distributor in 1988 and
                    evolved into a specialized manufacturer of dental imaging
                    equipment in 2008, leveraging its proprietary technology.
                  </p>
                  <p>
                    HDX WILL received international certification for compliance
                    with medical device manufacturing and quality management
                    standards. In 2021, the company established a European
                    subsidiary in Germany and has continued its steady growth
                    ever since.
                  </p>
                </div>
              </div>
            )}

            {/* Partners Tab */}
            {activeTab === "partners" && (
              <div className="tab-pane animate-fade-in text-center">
                <span className="section-subtitle">Global Network</span>
                <h2
                  className="section-title"
                  style={{ fontSize: "3rem", marginBottom: "3rem" }}
                >
                  Our Partners
                </h2>
                <div className="map-container">
                  <div className="tab-image animate-fade-in">
                    <img
                      src="/images/company/Group-20468.png"
                      alt="Global operations map"
                      style={{
                        width: "100%",
                        maxWidth: "900px",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
