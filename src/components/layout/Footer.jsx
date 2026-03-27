import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FOOTER_LEGAL_LINKS } from "../../data/navigation";
import { CONTACT_INFO } from "../../data/contactInfo";
import SocialLinks from "../common/SocialLinks";
import "./Footer.css";

const LEGAL_KEYS = {
  "Privacy Policy": "footer.privacyPolicy",
  "Terms of Service": "footer.termsOfService",
  FAQs: "footer.faqs",
};

const Footer = () => {
  const { address, email, phone, phoneTel } = CONTACT_INFO;
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__grid">
          <div className="footer__column-left">
            <Link to="/" className="footer__logo-link">
              <img
                src="/images/header/site__logo.svg"
                alt="HDX WILL EUROPE GmbH"
                className="footer__logo-img"
              />
            </Link>
            <div className="footer__social-links">
              <SocialLinks size={20} />
            </div>
          </div>

          <div className="footer__column-right">
            <h4 className="footer__subtitle">{t("footer.contact")}</h4>
            <div className="footer__contact-details">
              <address className="footer__address">
                {address.street}
                <br />
                {address.city}
                <br />
                {address.country}
              </address>
              <ul className="footer__links">
                <li>
                  <a href={`mailto:${email}`} className="footer__link">
                    <Mail size={16} className="footer__inline-icon" /> {email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${phoneTel}`} className="footer__link">
                    <Phone size={16} className="footer__inline-icon" /> {phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            {t("footer.copyright")}
          </p>
          <div className="footer__legal">
            {FOOTER_LEGAL_LINKS.map((link, idx) => (
              <React.Fragment key={link.path}>
                {idx > 0 && <span className="footer__separator">|</span>}
                <Link to={link.path} className="footer__legal-link">
                  {t(LEGAL_KEYS[link.name] || link.name)}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
