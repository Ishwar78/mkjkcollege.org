import React from "react";
import {
  FiBookOpen,
  FiShield,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiMessageCircle,
  FiFileText,
  FiAward,
} from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./LegalLiteracy.css";

export default function LegalLiteracy() {
  const awarenessAreas = [
    {
      icon: <FaBalanceScale />,
      title: "Rights & Duties",
      text: "Helping students understand basic legal rights, responsibilities and duties.",
    },
    {
      icon: <FiBookOpen />,
      title: "Legal Awareness",
      text: "Creating opportunities to learn about important legal and social issues.",
    },
    {
      icon: <FiShield />,
      title: "Access to Support",
      text: "Improving awareness about available legal resources and support systems.",
    },
    {
      icon: <FiUsers />,
      title: "Responsible Citizenship",
      text: "Encouraging informed participation and responsible civic behaviour.",
    },
  ];

  const activities = [
    "Legal awareness talks",
    "Interactive awareness programmes",
    "Rights and duties sessions",
    "Responsible citizenship activities",
    "Legal resource awareness",
    "Student interaction programmes",
  ];

  const principles = [
    {
      icon: <FiBookOpen />,
      title: "Learn",
      text: "Develop awareness through learning and meaningful information.",
    },
    {
      icon: <FiShield />,
      title: "Understand",
      text: "Understand rights, duties and available support resources.",
    },
    {
      icon: <FiUsers />,
      title: "Participate",
      text: "Encourage students to participate responsibly in society.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Act Responsibly",
      text: "Promote responsible and informed behaviour in everyday life.",
    },
  ];

  return (
    <>
      {/* =========================
          PAGE HERO
      ========================== */}
      <PageHero
        title="Legal Literacy Cell"
        subtitle="Building awareness of rights, duties and legal resources."
      />

      <main className="inner-page page-scope-legalliteracy">
        <div className="legal-container">

          {/* =========================
              HERO SECTION
          ========================== */}
          <section className="legal-hero">

            <div className="legal-hero-content">

              <span className="legal-eyebrow">
                <FaBalanceScale />
                RIGHTS • DUTIES • AWARENESS
              </span>

              <h1>
                Know your rights.
                <span> Understand your duties.</span>
              </h1>

              <p>
                The Legal Literacy Cell promotes awareness of basic legal
                rights, duties and access to support while encouraging
                students to become informed and responsible members of
                society.
              </p>

              <div className="legal-hero-actions">

                <a
                  href="mailto:mkjkmrt@gmail.com"
                  className="legal-primary-btn"
                >
                  Contact College
                  <FiArrowRight />
                </a>

                <Link
                  to="/student/notices"
                  className="legal-secondary-btn"
                >
                  Student Notices
                </Link>

              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="legal-hero-visual">

              <div className="legal-glow"></div>

              <div className="legal-main-circle">
                <FaBalanceScale />
              </div>

              <div className="legal-ring legal-ring-one"></div>
              <div className="legal-ring legal-ring-two"></div>

              <div className="legal-floating-card legal-floating-one">
                <FiShield />

                <div>
                  <strong>Rights</strong>
                  <span>Know & Understand</span>
                </div>
              </div>

              <div className="legal-floating-card legal-floating-two">
                <FiFileText />

                <div>
                  <strong>Duties</strong>
                  <span>Responsible Action</span>
                </div>
              </div>

              <div className="legal-floating-card legal-floating-three">
                <FiBookOpen />

                <div>
                  <strong>Awareness</strong>
                  <span>Learn & Participate</span>
                </div>
              </div>

            </div>
          </section>

          {/* =========================
              INTRODUCTION
          ========================== */}
          <section className="legal-intro">

            <div className="legal-intro-badge">
              <FiBookOpen />
            </div>

            <div className="legal-intro-content">

              <span className="legal-section-label">
                ABOUT THE CELL
              </span>

              <h2>
                Creating a culture of
                <span> legal awareness</span>
              </h2>

              <p>
                The Legal Literacy Cell aims to create awareness among
                students about basic legal rights, duties and the
                importance of responsible citizenship.
              </p>

              <p>
                Through awareness activities, interaction and educational
                programmes, students can develop a better understanding
                of legal and social responsibilities.
              </p>

            </div>

          </section>

          {/* =========================
              AWARENESS AREAS
          ========================== */}
          <section className="legal-awareness">

            <div className="legal-section-heading">

              <div>
                <span className="legal-section-label">
                  KEY AREAS
                </span>

                <h2>
                  What the Legal Literacy Cell
                  <span> focuses on</span>
                </h2>
              </div>

              <p>
                Awareness and understanding can help students make
                informed decisions and participate responsibly in society.
              </p>

            </div>

            <div className="legal-awareness-grid">

              {awarenessAreas.map((item, index) => (
                <article
                  className="legal-awareness-card"
                  key={index}
                >

                  <div className="legal-card-number">
                    0{index + 1}
                  </div>

                  <div className="legal-card-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <span className="legal-card-line"></span>

                </article>
              ))}

            </div>
          </section>

          {/* =========================
              RESPONSIBLE CITIZENSHIP
          ========================== */}
          <section className="legal-citizenship">

            <div className="legal-citizenship-visual">

              <div className="legal-citizenship-circle">
                <FaBalanceScale />
              </div>

              <div className="legal-mini-card legal-mini-card-one">
                <FiShield />
                <span>Rights</span>
              </div>

              <div className="legal-mini-card legal-mini-card-two">
                <FiUsers />
                <span>Community</span>
              </div>

            </div>

            <div className="legal-citizenship-content">

              <span className="legal-section-label light">
                RESPONSIBLE CITIZENSHIP
              </span>

              <h2>
                Awareness that leads to
                <span> responsible action</span>
              </h2>

              <p>
                Legal literacy is not limited to knowing rules. It also
                encourages students to understand their responsibilities,
                respect the rights of others and participate constructively
                in society.
              </p>

              <div className="legal-check-list">

                <div>
                  <FiCheckCircle />
                  <span>Understand basic rights and duties</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Develop awareness of legal resources</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Promote responsible participation</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Encourage informed decision-making</span>
                </div>

              </div>

            </div>
          </section>

          {/* =========================
              ACTIVITIES
          ========================== */}
          <section className="legal-activities">

            <div className="legal-section-heading">

              <div>
                <span className="legal-section-label">
                  CAMPUS ACTIVITIES
                </span>

                <h2>
                  Learning beyond the
                  <span> classroom</span>
                </h2>
              </div>

              <p>
                Awareness can be developed through interaction,
                educational sessions and student-focused activities.
              </p>

            </div>

            <div className="legal-activity-grid">

              {activities.map((activity, index) => (
                <div
                  className="legal-activity-item"
                  key={index}
                >

                  <div className="legal-activity-icon">
                    <FiCheckCircle />
                  </div>

                  <div>
                    <span className="legal-activity-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{activity}</strong>
                  </div>

                  <FiArrowRight className="legal-activity-arrow" />

                </div>
              ))}

            </div>
          </section>

          {/* =========================
              CORE PRINCIPLES
          ========================== */}
          <section className="legal-principles">

            <div className="legal-principles-header">

              <span className="legal-section-label">
                CORE PRINCIPLES
              </span>

              <h2>
                Learn. Understand.
                <span> Participate.</span>
              </h2>

              <p>
                The Legal Literacy Cell encourages a simple approach
                towards developing awareness and responsible citizenship.
              </p>

            </div>

            <div className="legal-principles-grid">

              {principles.map((item, index) => (
                <article
                  className="legal-principle-card"
                  key={index}
                >

                  <div className="legal-principle-icon">
                    {item.icon}
                  </div>

                  <span className="legal-principle-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>
              ))}

            </div>
          </section>

          {/* =========================
              SUPPORT / CONTACT CTA
          ========================== */}
          <section className="legal-support">

            <div className="legal-support-icon">
              <FiMessageCircle />
            </div>

            <div className="legal-support-content">

              <span className="legal-section-label">
                NEED MORE INFORMATION?
              </span>

              <h2>
                Stay informed.
                <span> Stay aware.</span>
              </h2>

              <p>
                For information related to the Legal Literacy Cell,
                students may contact the college through the official
                communication channel.
              </p>

            </div>

            <a
              href="mailto:mkjkmrt@gmail.com"
              className="legal-support-btn"
            >
              Contact College
              <FiArrowRight />
            </a>

          </section>

          {/* =========================
              FOOTER NOTE
          ========================== */}
          <section className="legal-footer-note">

            <div className="legal-footer-note-icon">
              <FiAward />
            </div>

            <div>
              <strong>
                Legal Literacy Cell
              </strong>

              <p>
                Promoting awareness, understanding and responsible
                citizenship among students.
              </p>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}