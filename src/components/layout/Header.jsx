import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import useScrollPosition from "../../hooks/useScrollPosition";
import { NAV_LINKS } from "../../data/navigation";
import SocialLinks from "../common/SocialLinks";
import LanguageSelector from "../common/LanguageSelector";
import "./Header.css";

const NAV_KEYS = {
  Company: "nav.company",
  Products: "nav.products",
  Technology: "nav.technology",
  "Hands-On 3D": "nav.handsOn3d",
  Contacts: "nav.contacts",
};

const NavItem = ({ link, className, isActive, onClick, t }) => {
  const label = t(NAV_KEYS[link.name] || link.name);
  if (link.external) {
    return (
      <a
        href={link.path}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
  return (
    <Link
      to={link.path}
      className={`${className} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  const isScrolled = useScrollPosition(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header__container">
        <Link to="/" className="header__logo-link" onClick={closeMenu}>
          <img
            src="/images/header/site__logo.png"
            alt="HDX WILL EUROPE GmbH"
            className={`header__logo ${!isScrolled && location.pathname === "/" ? "header__logo--white" : ""}`}
          />
        </Link>

        <nav className="header__desktop-nav">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavItem
                  link={link}
                  className="header__nav-item"
                  isActive={location.pathname === link.path}
                  t={t}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__right-actions">
          <div className="header__social-icons">
            <SocialLinks size={20} />
          </div>
          <LanguageSelector />
        </div>

        <button
          className="header__mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`header__mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="header__mobile-list">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <NavItem
                link={link}
                className="header__mobile-item"
                isActive={location.pathname === link.path}
                onClick={closeMenu}
                t={t}
              />
            </li>
          ))}
        </ul>
        <div className="header__mobile-lang">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
