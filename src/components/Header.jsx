import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Linkedin, Facebook, Youtube, Instagram } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Company", path: "/company" },
    { name: "Products", path: "/product" },
    { name: "Technology", path: "/technology" },
    {
      name: "Hands-On 3D",
      path: "https://hdxwill.com/3d-viewer?data=sinus&isSavedCase=false",
      external: true,
    },
    { name: "Contacts", path: "/contact-us" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img
            src="/images/header/site__logo.png"
            alt="HDX WILL EUROPE GmbH"
            className={`header-logo ${!isScrolled && location.pathname === "/" ? "logo-white" : ""}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-item"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-item ${location.pathname === link.path ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons for Desktop */}
        <div className="header-social-icons">
          <a
            href="https://www.linkedin.com/company/hdx-will-europe-gmbh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/hdxwilleurope/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCbIvVup-JLDN2SjGc-QwGcQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://www.instagram.com/hdxwilleurope/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-item"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`mobile-nav-item ${location.pathname === link.path ? "active" : ""}`}
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
