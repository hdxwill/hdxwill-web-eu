import React, { useState } from "react";
import VideoHero from "../components/common/VideoHero";
import "./Company.css";

const Company = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Us" },
    { id: "history", label: "History" },
    { id: "partners", label: "Partners" },
  ];

  return (
    <div className="company-page animate-fade-in">
      <VideoHero
        videoSrc="/videos/company/01-Company.mp4"
        title={
          <>
            Pioneering Medical and Dental Innovation
            <br />
            Since 1982, Built on a Legacy of Excellence
          </>
        }
      />

      <section className="company-tabs-section">
        <div className="company-container">
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === "about" && (
              <div className="tab-pane animate-fade-in about-layout">
                <div className="tab-image-wrapper">
                  <div className="tab-image-bg"></div>
                  <img
                    src="/images/company/Group-20468.png"
                    alt="HDX WILL Vision"
                    className="tab-image"
                  />
                </div>
                <div className="tab-text">
                  <h2>Our Vision</h2>
                  <p>
                    HDX WILL aspires to revolutionize global dental imaging and
                    medical diagnostics through relentless innovation and
                    cutting-edge technology. By advancing CBCT and expanding into
                    fields like plastic surgery and otolaryngology, the company
                    is reshaping the future of healthcare imaging. Committed to
                    setting new industry benchmarks, HDX WILL aims to establish
                    its technology as the definitive standard in diagnostics
                    worldwide, driving precision, efficiency, and global impact.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="tab-pane animate-fade-in history-layout">
                <div className="tab-text">
                  <h2>Our History</h2>
                  <p>
                    HDX WILL began as a medical device distributor in 1988 and
                    evolved into a specialized manufacturer of dental imaging
                    equipment in 2008, leveraging its proprietary technology. And
                    HDX WILL received international certification for compliance
                    with medical device manufacturing and quality management
                    standards.
                  </p>
                  <p>
                    In 2021, the company established a European subsidiary in
                    Germany and has continued its steady growth ever since.
                  </p>
                </div>
                <div className="tab-image-wrapper">
                  <div className="tab-image-bg"></div>
                  <img
                    src="/images/company/20161004151559_xuflzoez_edit_v1.png"
                    alt="HDX WILL Office"
                    className="tab-image"
                  />
                </div>
              </div>
            )}

            {activeTab === "partners" && (
              <div className="tab-pane animate-fade-in partners-layout">
                <div className="partners-map-container">
                  <img
                    src="/images/company/image-66.png"
                    alt="Global partners map"
                    className="partners-map"
                  />
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
