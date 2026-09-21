import React from "react";
import {
  FiHeart,
  FiShield,
  FiUsers,
  FiBookOpen,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./WomenCell.css";

export default function WomenCell() {
  const focusAreas = [
    {
      icon: <FiShield />,
      title: "Safe Campus",
      text: "Promoting a respectful, supportive and secure learning environment for women students.",
    },
    {
      icon: <FiBookOpen />,
      title: "Awareness",
      text: "Organising awareness programmes and educational activities on issues relevant to women.",
    },
    {
      icon: <FiUsers />,
      title: "Counselling & Support",
      text: "Providing opportunities for guidance, counselling and supportive interaction.",
    },
    {
      icon: <FiAward />,
      title: "Empowerment",
      text: "Encouraging confidence, leadership, capacity-building and personal development.",
    },
  ];

  const activities = [
    "Awareness programmes",
    "Counselling and guidance",
    "Capacity-building activities",
    "Women empowerment programmes",
    "Health and wellbeing awareness",
    "Interactive student sessions",
  ];

  return (
    <>
      <PageHero
        title="Women Cell"
        subtitle="Empowerment, awareness and support for women students."
      />

      <main className="inner-page page-scope-womencell">
        <div className="women-container">

          {/* ================= HERO ================= */}

          <section className="women-hero">

            <div className="women-hero-content">

              <span className="women-eyebrow">
                <FiHeart />
                WOMEN EMPOWERMENT & SUPPORT
              </span>

              <h1>
                Empowering women
                <span> through awareness & support.</span>
              </h1>

              <p>
                The Women Cell provides a supportive platform for women
                students through awareness, counselling, capacity-building
                and empowerment activities.
              </p>

              <div className="women-hero-actions">

                <a
                  href="mailto:mkjkmrt@gmail.com"
                  className="women-primary-btn"
                >
                  Get in Touch
                  <FiArrowRight />
                </a>

                <Link
                  to="/student/notices"
                  className="women-secondary-btn"
                >
                  Student Notices
                </Link>

              </div>

            </div>


            {/* Visual */}

            <div className="women-hero-visual">

              <div className="women-glow"></div>

              <div className="women-main-circle">
                <FiHeart />
              </div>

              <div className="women-ring women-ring-one"></div>
              <div className="women-ring women-ring-two"></div>

              <div className="women-float-card women-float-one">
                <FiShield />
                <div>
                  <strong>Safe Campus</strong>
                  <span>Supportive Environment</span>
                </div>
              </div>

              <div className="women-float-card women-float-two">
                <FiUsers />
                <div>
                  <strong>Empowerment</strong>
                  <span>Student Participation</span>
                </div>
              </div>

              <div className="women-float-card women-float-three">
                <FiStar />
                <div>
                  <strong>Awareness</strong>
                  <span>Positive Development</span>
                </div>
              </div>

            </div>

          </section>


          {/* ================= INTRO ================= */}

          <section className="women-intro">

            <div className="women-section-label">
              ABOUT THE WOMEN CELL
            </div>

            <div className="women-intro-grid">

              <div>
                <h2>
                  A supportive space for
                  <span> learning, confidence & growth.</span>
                </h2>
              </div>

              <div>

                <p>
                  The Women Cell can organise awareness, counselling,
                  capacity-building and empowerment activities for
                  students.
                </p>

                <p>
                  The initiative complements institutional efforts
                  towards creating a respectful, supportive and
                  inclusive learning environment where students can
                  learn, participate and grow with confidence.
                </p>

              </div>

            </div>

          </section>


          {/* ================= FOCUS AREAS ================= */}

          <section className="women-focus">

            <div className="women-heading-row">

              <div>
                <span className="women-section-label">
                  KEY FOCUS AREAS
                </span>

                <h2>
                  Supporting women students
                  <span> at every step.</span>
                </h2>
              </div>

              <p>
                Activities are designed around awareness, support,
                empowerment and a positive campus environment.
              </p>

            </div>


            <div className="women-focus-grid">

              {focusAreas.map((item, index) => (

                <article
                  className="women-focus-card"
                  key={item.title}
                >

                  <div className="women-card-top">

                    <div className="women-card-icon">
                      {item.icon}
                    </div>

                    <span>
                      0{index + 1}
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="women-card-line"></div>

                </article>

              ))}

            </div>

          </section>


          {/* ================= SAFE CAMPUS ================= */}

          <section className="women-safe">

            <div className="women-safe-visual">

              <div className="women-safe-circle">
                <FiShield />
              </div>

              <div className="women-safe-small safe-small-one">
                <FiHeart />
              </div>

              <div className="women-safe-small safe-small-two">
                <FiUsers />
              </div>

              <div className="women-safe-small safe-small-three">
                <FiCheckCircle />
              </div>

            </div>


            <div className="women-safe-content">

              <span className="women-section-label">
                SAFE & SUPPORTIVE CAMPUS
              </span>

              <h2>
                Building an environment
                <span> where students feel supported.</span>
              </h2>

              <p>
                The Women Cell complements institutional efforts
                towards a respectful, supportive and inclusive
                learning environment.
              </p>

              <div className="women-check-list">

                <div>
                  <FiCheckCircle />
                  <span>Respectful learning environment</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Awareness and guidance</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Student participation</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Capacity-building opportunities</span>
                </div>

              </div>

            </div>

          </section>


          {/* ================= ACTIVITIES ================= */}

          <section className="women-activities">

            <div className="women-activities-head">

              <span className="women-section-label">
                CAMPUS ENGAGEMENT
              </span>

              <h2>
                Activities that encourage
                <span> awareness & confidence.</span>
              </h2>

            </div>


            <div className="women-activities-grid">

              {activities.map((activity, index) => (

                <div
                  className="women-activity-item"
                  key={activity}
                >

                  <div className="women-activity-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <FiCheckCircle />

                  <span>
                    {activity}
                  </span>

                </div>

              ))}

            </div>

          </section>


          {/* ================= SUPPORT CTA ================= */}

          <section className="women-support">

            <div className="women-support-icon">
              <FiMessageCircle />
            </div>

            <div className="women-support-content">

              <span>
                MKJK MAHAVIDYALAYA
              </span>

              <h2>
                Awareness. Support. Empowerment.
              </h2>

              <p>
                The Women Cell encourages students to participate
                in activities that promote awareness, confidence,
                wellbeing and personal development.
              </p>

            </div>

            <a
              href="mailto:mkjkmrt@gmail.com"
              className="women-support-btn"
            >
              Contact College
              <FiArrowRight />
            </a>

          </section>


          {/* ================= FOOT NOTE ================= */}

          <section className="women-footer-note">

            <FiHeart />

            <div>
              <strong>
                Women Cell
              </strong>

              <p>
                Empowerment, awareness and support for women students.
              </p>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}