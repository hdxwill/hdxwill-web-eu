import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import VideoHero from "../components/common/VideoHero";
import "./Company.css";

const Company = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: t("company.tabs.about") },
    { id: "history", label: t("company.tabs.history") },
    { id: "partners", label: t("company.tabs.partners") },
  ];

  return (
    <div className="company-page animate-fade-in">
      <VideoHero
        videoSrc="/videos/company/01-Company.mp4"
        title={
          <>
            {t("company.heroTitle").split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
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
                  <h2>{t("company.about.title")}</h2>
                  <p>{t("company.about.text")}</p>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="tab-pane animate-fade-in history-layout">
                <div className="tab-text">
                  <h2>{t("company.history.title")}</h2>
                  <p>{t("company.history.text1")}</p>
                  <p>{t("company.history.text2")}</p>
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
