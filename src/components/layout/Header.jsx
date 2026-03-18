import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useScrollPosition from "../../hooks/useScrollPosition";
import { NAV_LINKS } from "../../constants/navigation";
import SocialLinks from "../common/SocialLinks";
import "./Header.css";

const Header = () => {
  const isScrolled = useScrollPosition(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header__nav-item"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`header__nav-item ${location.pathname === link.path ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__social-icons">
          <SocialLinks size={20} />
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
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header__mobile-item"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`header__mobile-item ${location.pathname === link.path ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
