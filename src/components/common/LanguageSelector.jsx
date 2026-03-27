import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import "./LanguageSelector.css";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "pl", label: "Polski" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("hdxwill-lang", code);
    setOpen(false);
  };

  return (
    <div className="lang-selector" ref={ref}>
      <button
        className="lang-selector__trigger"
        onClick={() => setOpen(!open)}
        aria-label="Select language"
      >
        <span className="lang-selector__label">LANGUAGE</span>
        <span className="lang-selector__current">{currentLang.label}</span>
        <ChevronDown
          size={14}
          className={`lang-selector__chevron ${open ? "open" : ""}`}
        />
      </button>

      {open && (
        <div className="lang-selector__dropdown">
          {LANGUAGES.filter((l) => l.code !== currentLang.code).map((lang) => (
            <button
              key={lang.code}
              className="lang-selector__option"
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
