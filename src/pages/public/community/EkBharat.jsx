import React from "react";
import {
  FiGlobe,
  FiUsers,
  FiMapPin,
  FiBookOpen,
  FiHeart,
  FiArrowRight,
  FiCheckCircle,
  FiMessageCircle,
  FiCompass,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./EkBharat.css";

export default function EkBharat() {
  const exchangeAreas = [
    {
      icon: <FiGlobe />,
      title: "Cultural Exchange",
      text: "Promoting understanding of India's diverse languages, cultures, traditions and regional identities.",
    },
    {
      icon: <FiUsers />,
      title: "Student Participation",
      text: "Encouraging students to participate in cultural programmes, presentations, events and collaborative activities.",
    },
    {
      icon: <FiMapPin />,
      title: "Regional Diversity",
      text: "Helping students appreciate the unique traditions, identities and cultural expressions of different regions.",
    },
    {
      icon: <FiHeart />,
      title: "Unity in Diversity",
      text: "Celebrating India's diversity while encouraging mutual respect, understanding and togetherness.",
    },
  ];

  const activities = [
    "Cultural exchange programmes",
    "Student presentations",
    "Regional culture activities",
    "Traditional and cultural events",
    "Collaborative student activities",
    "Language and cultural awareness",
  ];

  const values = [
    {
      icon: <FiGlobe />,
      title: "Diversity",
      text: "Appreciating India's rich cultural and regional diversity.",
    },
    {
      icon: <FiUsers />,
      title: "Participation",
      text: "Creating opportunities for students to learn and participate together.",
    },
    {
      icon: <FiHeart />,
      title: "Respect",
      text: "Encouraging respect for different cultures, traditions and identities.",
    },
    {
      icon: <FiCompass />,
      title: "Understanding",
      text: "Developing wider understanding through cultural interaction.",
    },
  ];

  return (
    <>
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <PageHero
        title="Ek Bharat / Shreshth Bharat"
        subtitle="Celebrating unity in diversity."
      />

      <main className="inner-page page-scope-ekbharat">
        <div className="ekbharat-container">

          {/* =====================================================
              MAIN HERO
          ====================================================== */}
          <section className="ekbharat-hero">

            <div className="ekbharat-hero-content">

              <span className="ekbharat-eyebrow">
                <FiGlobe />
                UNITY • DIVERSITY • CULTURAL EXCHANGE
              </span>

              <h1>
                One India.
                <span>Many cultures. One spirit.</span>
              </h1>

              <p>
                Ek Bharat / Shreshth Bharat celebrates India's cultural
                diversity by encouraging students to understand different
                languages, traditions, cultures and regional identities
                through meaningful interaction and participation.
              </p>

              <div className="ekbharat-hero-actions">

                <Link
                  to="/student/notices"
                  className="ekbharat-primary-btn"
                >
                  Student Notices
                  <FiArrowRight />
                </Link>

                <a
                  href="mailto:mkjkmrt@gmail.com"
                  className="ekbharat-secondary-btn"
                >
                  Contact College
                </a>

              </div>

            </div>

            {/* =====================================================
                HERO VISUAL
            ====================================================== */}
            <div className="ekbharat-hero-visual">

              <div className="ekbharat-glow"></div>

              <div className="ekbharat-orbit ekbharat-orbit-one"></div>
              <div className="ekbharat-orbit ekbharat-orbit-two"></div>

              <div className="ekbharat-main-circle">
                <div className="ekbharat-circle-inner">
                  <FiGlobe />
                  <strong>EK</strong>
                  <span>BHARAT</span>
                </div>
              </div>

              <div className="ekbharat-floating-card ekbharat-floating-one">
                <FiMapPin />

                <div>
                  <strong>Regions</strong>
                  <span>Many identities</span>
                </div>
              </div>

              <div className="ekbharat-floating-card ekbharat-floating-two">
                <FiUsers />

                <div>
                  <strong>Students</strong>
                  <span>Learn together</span>
                </div>
              </div>

              <div className="ekbharat-floating-card ekbharat-floating-three">
                <FiHeart />

                <div>
                  <strong>Unity</strong>
                  <span>One spirit</span>
                </div>
              </div>

            </div>
          </section>

          {/* =====================================================
              INTRO
          ====================================================== */}
          <section className="ekbharat-intro">

            <div className="ekbharat-intro-icon">
              <FiBookOpen />
            </div>

            <div className="ekbharat-intro-content">

              <span className="ekbharat-section-label">
                ABOUT EK BHARAT / SHRESHTH BHARAT
              </span>

              <h2>
                Understanding India through
                <span> cultural exchange</span>
              </h2>

              <p>
                Activities can promote understanding of India's diverse
                languages, cultures, traditions and regional identities.
              </p>

              <p>
                Students learn through cultural exchange, presentations,
                events and collaborative activities, creating opportunities
                to appreciate the diversity that exists across India.
              </p>

            </div>

          </section>

          {/* =====================================================
              CULTURAL EXCHANGE AREAS
          ====================================================== */}
          <section className="ekbharat-exchange">

            <div className="ekbharat-section-heading">

              <div>
                <span className="ekbharat-section-label">
                  CULTURAL EXCHANGE
                </span>

                <h2>
                  Discover the richness of
                  <span> India's diversity</span>
                </h2>
              </div>

              <p>
                Cultural interaction provides students with opportunities
                to understand different traditions, identities and ways
                of life.
              </p>

            </div>

            <div className="ekbharat-exchange-grid">

              {exchangeAreas.map((item, index) => (
                <article
                  className="ekbharat-exchange-card"
                  key={index}
                >

                  <span className="ekbharat-card-number">
                    0{index + 1}
                  </span>

                  <div className="ekbharat-card-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="ekbharat-card-line"></div>

                </article>
              ))}

            </div>

          </section>

          {/* =====================================================
              CULTURAL JOURNEY DARK SECTION
          ====================================================== */}
          <section className="ekbharat-journey">

            <div className="ekbharat-journey-visual">

              <div className="ekbharat-journey-globe">
                <FiGlobe />
              </div>

              <div className="ekbharat-map-dot dot-one"></div>
              <div className="ekbharat-map-dot dot-two"></div>
              <div className="ekbharat-map-dot dot-three"></div>
              <div className="ekbharat-map-dot dot-four"></div>

              <div className="ekbharat-journey-card journey-card-one">
                <FiMapPin />
                <span>Culture</span>
              </div>

              <div className="ekbharat-journey-card journey-card-two">
                <FiUsers />
                <span>Students</span>
              </div>

            </div>

            <div className="ekbharat-journey-content">

              <span className="ekbharat-section-label light">
                CULTURAL JOURNEY
              </span>

              <h2>
                Different traditions.
                <span> Shared understanding.</span>
              </h2>

              <p>
                Student participation in cultural exchange, presentations,
                events and collaborative activities can create meaningful
                opportunities to learn about the diversity of India.
              </p>

              <div className="ekbharat-check-list">

                <div>
                  <FiCheckCircle />
                  <span>Explore different cultural traditions</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Learn about regional identities</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Participate in cultural activities</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Build mutual understanding</span>
                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              STUDENT PARTICIPATION
          ====================================================== */}
          <section className="ekbharat-participation">

            <div className="ekbharat-section-heading">

              <div>
                <span className="ekbharat-section-label">
                  STUDENT PARTICIPATION
                </span>

                <h2>
                  Learning through
                  <span> participation</span>
                </h2>
              </div>

              <p>
                Students learn through interaction, presentations, events
                and collaborative cultural activities.
              </p>

            </div>

            <div className="ekbharat-activity-grid">

              {activities.map((activity, index) => (
                <div
                  className="ekbharat-activity-item"
                  key={index}
                >

                  <div className="ekbharat-activity-icon">
                    <FiCheckCircle />
                  </div>

                  <div className="ekbharat-activity-content">

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{activity}</strong>

                  </div>

                  <FiArrowRight className="ekbharat-activity-arrow" />

                </div>
              ))}

            </div>

          </section>

          {/* =====================================================
              VALUES
          ====================================================== */}
          <section className="ekbharat-values">

            <div className="ekbharat-values-header">

              <span className="ekbharat-section-label">
                OUR VALUES
              </span>

              <h2>
                Diversity that brings us
                <span> together</span>
              </h2>

              <p>
                Ek Bharat / Shreshth Bharat encourages students to
                appreciate diversity while developing a shared sense
                of understanding and togetherness.
              </p>

            </div>

            <div className="ekbharat-values-grid">

              {values.map((item, index) => (
                <article
                  className="ekbharat-value-card"
                  key={index}
                >

                  <div className="ekbharat-value-icon">
                    {item.icon}
                  </div>

                  <span className="ekbharat-value-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>
              ))}

            </div>

          </section>

          {/* =====================================================
              CONTACT CTA
          ====================================================== */}
          <section className="ekbharat-support">

            <div className="ekbharat-support-icon">
              <FiMessageCircle />
            </div>

            <div className="ekbharat-support-content">

              <span className="ekbharat-section-label">
                EK BHARAT / SHRESHTH BHARAT
              </span>

              <h2>
                Learn about India.
                <span> Celebrate its diversity.</span>
              </h2>

              <p>
                For information related to activities and student
                participation, contact the college through the official
                communication channel.
              </p>

            </div>

            <a
              href="mailto:mkjkmrt@gmail.com"
              className="ekbharat-support-btn"
            >
              Contact College
              <FiArrowRight />
            </a>

          </section>

          {/* =====================================================
              FOOTER NOTE
          ====================================================== */}
          <section className="ekbharat-footer-note">

            <div className="ekbharat-footer-note-icon">
              <FiGlobe />
            </div>

            <div>
              <strong>
                Ek Bharat / Shreshth Bharat
              </strong>

              <p>
                Celebrating unity in diversity through cultural exchange,
                student participation and shared understanding.
              </p>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}