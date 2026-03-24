import React, { useState } from "react";
import VideoHero from "../components/common/VideoHero";
import { CONTACT_INFO } from "../data/contactInfo";
import "./Contact.css";

const Contact = () => {
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
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    alert("Thank you! Your message has been sent.");
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
            Get in Touch and Discover
            <br />
            What HDX WILL Imaging Can Do for You
          </>
        }
      />

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get in Touch</h2>
              <p className="contact-subtext">
                Have something in your mind? To request a quote contact us
                directly or fill out the form and let us know how can we help.
              </p>

              <div className="contact-details-box">
                <h3 className="contact-details-title">Contact</h3>
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
                  title="HDX WILL Germany Office"
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
                    placeholder="Name *"
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
                    placeholder="Email *"
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
                    placeholder="Phone *"
                    required
                    className="form-control"
                    pattern="[0-9\-\+\s\(\)]+"
                    title="Valid phone number"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="Profession *"
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
                      Choose Subject
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sales">Sales &amp; Distribution</option>
                    <option value="Support">Technical Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message *"
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
                      I agree to the Terms &amp; Conditions.
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-submit">
                  Submit
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
