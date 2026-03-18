import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-column-left">
            <Link to="/" className="footer-logo-link">
              <img
                src="/images/header/site__logo.svg"
                alt="HDX WILL EUROPE GmbH"
                className="footer-logo-img"
              />
            </Link>
            <div className="social-links">
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
          </div>

          <div className="footer-column-right">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="footer-contact-details">
              <address className="footer-address">
                Kölner Str. 1<br />
                65760 Eschborn
                <br />
                Germany
              </address>
              <ul className="footer-links">
                <li>
                  <a href="mailto:info@hdxwill.de" className="footer-link">
                    <Mail size={16} className="inline-icon" /> info@hdxwill.de
                  </a>
                </li>
                <li>
                  <a href="tel:+49%206173%20394%207309" className="footer-link">
                    <Phone size={16} className="inline-icon" /> +49 6173 394
                    7309
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 HDX Will Is Proudly By Modal Creativity
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="legal-link">
              Privacy Policy
            </Link>
            <span className="separator">|</span>
            <Link to="/terms-and-conditions" className="legal-link">
              Terms of Service
            </Link>
            <span className="separator">|</span>
            <Link to="/faqs" className="legal-link">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
