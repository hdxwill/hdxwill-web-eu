import React from "react";
import { useTranslation } from "react-i18next";

const DummyPage = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="dummy-page animate-fade-in">
      <div
        className="container"
        style={{ padding: "8rem 1.5rem", minHeight: "60vh" }}
      >
        <h1 style={{ color: "var(--primary)", marginBottom: "1rem" }}>
          {title}
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.2rem" }}>
          {t("common.underConstruction")}
        </p>
      </div>
    </div>
  );
};

export default DummyPage;
