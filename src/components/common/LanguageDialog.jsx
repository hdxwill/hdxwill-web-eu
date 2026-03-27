import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageDialog.css";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "pl", label: "Polski" },
];

const LanguageDialog = ({ onClose }) => {
  const { t, i18n } = useTranslation();

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("hdxwill-lang", code);
    onClose();
  };

  return (
    <div className="lang-dialog__overlay">
      <div className="lang-dialog">
        <div className="lang-dialog__logo">
          <img
            src="/images/header/site__logo.svg"
            alt="HDX WILL EUROPE GmbH"
            className="lang-dialog__logo-img"
          />
        </div>

        <h2 className="lang-dialog__title">{t("langDialog.title")}</h2>

        <div className="lang-dialog__buttons">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className="lang-dialog__btn"
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <div className="lang-dialog__divider" />
        <div className="lang-dialog__disclaimer">
          <p>
            {t("langDialog.disclaimer").split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <p>
            {t("langDialog.contact").split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageDialog;
