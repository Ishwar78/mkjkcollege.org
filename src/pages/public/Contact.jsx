import React, { useEffect, useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiArrowRight,
  FiNavigation,
  FiMessageCircle,
} from "react-icons/fi";
import PageHero from "../../components/PageHero";
import api from "../../lib/api";
import "./Contact.css";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    phone: "01262-274660, 9812152759",
    email: "mkjkmrt@gmail.com",
    address: "Delhi Road, Rohtak, Haryana – 124001",
    officeHours: "Monday – Saturday\n9:00 AM – 5:00 PM",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Maharani+Kishori+Jat+Kanya+Mahavidyalaya+Rohtak",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function loadContact() {
      try {
        const res = await api.get("/api/contact");
        if (res && res.contact) {
          setContactInfo({
            phone: res.contact.phone || "01262-274660, 9812152759",
            email: res.contact.email || "mkjkmrt@gmail.com",
            address: res.contact.address || "Delhi Road, Rohtak, Haryana – 124001",
            officeHours:
              res.contact.officeHours || "Monday – Saturday\n9:00 AM – 5:00 PM",
            mapLink:
              res.contact.mapLink ||
              "https://www.google.com/maps/search/?api=1&query=Maharani+Kishori+Jat+Kanya+Mahavidyalaya+Rohtak",
          });
        }
      } catch (err) {
        console.warn("Using default contact info:", err.message);
      }
    }
    loadContact();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await api.post("/api/inquiries", {
        ...form,
        type: "contact",
      });
      if (res && res.success) {
        setSent(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMsg(res.message || "Could not submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Inquiry submission error:", err);
      setErrorMsg(err.message || "Could not connect to server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We are here to help students, parents, alumni and visitors."
      />

      <main className="contact-page page-scope-contact">
        <div className="contact-container">

          {/* =====================================================
              INTRO
          ===================================================== */}
          <section className="contact-intro">
            <div>
              <span className="contact-eyebrow">
                GET IN TOUCH WITH MKJK
              </span>

              <h1>
                Let's start a <span>conversation.</span>
              </h1>

              <p>
                Whether you are looking for admission information, academic
                guidance, student support or general assistance, the MKJK
                team is here to help you.
              </p>
            </div>

            <div className="contact-intro-badge">
              <div className="intro-badge-icon">
                <FiMessageCircle />
              </div>

              <strong>We're here to help</strong>
              <span>Connect with our college</span>
            </div>
          </section>

          {/* =====================================================
              MAIN CONTACT AREA
          ===================================================== */}
          <section className="contact-main-grid">

            {/* LEFT - INFORMATION */}
            <div className="contact-information">

              <div className="section-label">
                <span>CONTACT INFORMATION</span>
                <div></div>
              </div>

              <h2>
                Connect with
                <br />
                <span>MKJK Mahavidyalaya</span>
              </h2>

              <p className="information-intro">
                Reach us through the contact details below. Our college is
                located on Delhi Road, Rohtak, Haryana.
              </p>

              {/* Address */}
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noreferrer"
                className="contact-detail-card"
              >
                <div className="detail-icon">
                  <FiMapPin />
                </div>

                <div className="detail-content">
                  <span>VISIT US</span>
                  <strong>College Address</strong>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {contactInfo.address}
                  </p>
                </div>

                <FiArrowRight className="detail-arrow" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone.split(",")[0].trim()}`}
                className="contact-detail-card"
              >
                <div className="detail-icon">
                  <FiPhone />
                </div>

                <div className="detail-content">
                  <span>CALL US</span>
                  <strong>Phone</strong>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {contactInfo.phone.replace(/,\s*/g, "\n")}
                  </p>
                </div>

                <FiArrowRight className="detail-arrow" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="contact-detail-card"
              >
                <div className="detail-icon">
                  <FiMail />
                </div>

                <div className="detail-content">
                  <span>EMAIL US</span>
                  <strong>Email</strong>
                  <p>{contactInfo.email}</p>
                </div>

                <FiArrowRight className="detail-arrow" />
              </a>

              {/* Office Hours */}
              <div className="contact-detail-card">
                <div className="detail-icon">
                  <FiClock />
                </div>

                <div className="detail-content">
                  <span>OFFICE HOURS</span>
                  <strong>College Office</strong>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {contactInfo.officeHours}
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT - FORM */}
            <div className="contact-form-wrapper">

              <div className="form-heading">
                <span>WRITE TO US</span>

                <h2>
                  How can we
                  <br />
                  <span>help you?</span>
                </h2>

                <p>
                  Fill in the details below and send us your enquiry.
                </p>
              </div>

              <form
                className="premium-contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-field">
                    <label htmlFor="contact-name">
                      Your Name <b>*</b>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">
                      Email Address <b>*</b>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-field">
                    <label htmlFor="contact-phone">
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-subject">
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What can we help with?"
                    />
                  </div>

                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">
                    Your Message <b>*</b>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                  />
                </div>

                {errorMsg && (
                  <div style={{ color: "#c53414", fontSize: "13px", fontWeight: "600", marginBottom: "10px" }}>
                    {errorMsg}
                  </div>
                )}

                <div className="form-submit-row">

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={submitting}
                  >
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                    <FiSend />
                  </button>

                  <span className="form-note">
                    We value your enquiry.
                  </span>

                </div>

                {sent && (
                  <div className="contact-success">
                    <span>✓</span>
                    <div>
                      <strong>Your inquiry has been sent successfully!</strong>
                      <p>
                        Our college administrative office will review your query and
                        get in touch with you soon.
                      </p>
                    </div>
                  </div>
                )}

              </form>

            </div>
          </section>

          {/* =====================================================
              LOCATION SECTION
          ===================================================== */}
          <section className="location-section">

            <div className="location-heading">
              <span>OUR LOCATION</span>

              <h2>
                Find us in
                <span> Rohtak</span>
              </h2>

              <p>
                Maharani Kishori Jat Kanya Mahavidyalaya is situated on
                Delhi Road, Rohtak, Haryana.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Maharani+Kishori+Jat+Kanya+Mahavidyalaya+Rohtak"
                target="_blank"
                rel="noreferrer"
                className="directions-btn"
              >
                <FiNavigation />
                Open in Maps
                <FiArrowRight />
              </a>
            </div>

            <div className="location-visual">

              <div className="map-pattern"></div>

              <div className="map-pin">
                <div className="pin-circle">
                  <FiMapPin />
                </div>

                <div className="pin-label">
                  <strong>MKJK Mahavidyalaya</strong>
                  <span>Delhi Road, Rohtak</span>
                </div>
              </div>

              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>

              <div className="map-mini-card">
                <FiMapPin />
                <div>
                  <strong>Rohtak, Haryana</strong>
                  <span>124001</span>
                </div>
              </div>

            </div>

          </section>

          {/* =====================================================
              BOTTOM CTA
          ===================================================== */}
          <section className="contact-bottom-cta">

            <div className="cta-symbol">
              <FiPhone />
            </div>

            <div className="cta-content">
              <span>NEED ASSISTANCE?</span>

              <h2>
                Have a question about MKJK?
              </h2>

              <p>
                Contact the college office directly for assistance.
              </p>
            </div>

            <div className="cta-actions">

              <a
                href="tel:01262274660"
                className="cta-call"
              >
                <FiPhone />
                Call College
              </a>

              <a
                href="mailto:mkjkmrt@gmail.com"
                className="cta-email"
              >
                <FiMail />
                Email Us
              </a>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}