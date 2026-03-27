import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import VideoHero from "../components/common/VideoHero";
import { CONTACT_INFO } from "../data/contactInfo";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    subject: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert(t("contact.form.alertAgree"));
      return;
    }
    alert(t("contact.form.alertSuccess"));
    setFormData({
      name: "",
      email: "",
      phone: "",
      profession: "",
      subject: "",
      message: "",
      agreed: false,
    });
  };

  const { address, email, phone, phoneTel, mapEmbedUrl } = CONTACT_INFO;

  return (
    <div className="contact-page animate-fade-in">
      <VideoHero
        videoSrc="/videos/contact/06.-Contact.mp4"
        title={
          <>
            {t("contact.heroTitle").split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </>
        }
      />

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">{t("contact.title")}</h2>
              <p className="contact-subtext">
                {t("contact.subtitle")}
              </p>

              <div className="contact-details-box">
                <h3 className="contact-details-title">{t("contact.detailsTitle")}</h3>
                <address className="contact-address">
                  {address.line1}
                  <br />
                  {address.street}
                  <br />
                  {address.city}
                  <br />
                  {address.country}
                </address>

                <div className="contact-links">
                  <a href={`mailto:${email}`} className="contact-link">
                    {email}
                  </a>
                  <a href={`tel:${phoneTel}`} className="contact-link">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("common.officeTitle")}
                ></iframe>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.name")}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.email")}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.form.phone")}
                    required
                    className="form-control"
                    pattern="[0-9\-\+\s\(\)]+"
                    title={t("common.validPhone")}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder={t("contact.form.profession")}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="" disabled>
                      {t("contact.form.chooseSubject")}
                    </option>
                    <option value="General Inquiry">{t("contact.form.generalInquiry")}</option>
                    <option value="Sales">{t("contact.form.sales")}</option>
                    <option value="Support">{t("contact.form.support")}</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.message")}
                    required
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>

                <div className="form-checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      required
                    />
                    <span className="checkbox-text">
                      {t("contact.form.agree")}
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-submit">
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
