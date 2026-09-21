import React from "react";
import {
  FiHeart,
  FiUsers,
  FiShield,
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./YouthRedCross.css";

export default function YouthRedCross() {
  const activities = [
    {
      icon: <FiHeart />,
      title: "Humanity & Service",
      text: "Students are encouraged to develop humanitarian values and participate in activities that support the community.",
    },
    {
      icon: <FiActivity />,
      title: "Health Awareness",
      text: "Awareness programmes can promote health, safety, hygiene and responsible practices among students.",
    },
    {
      icon: <FiShield />,
      title: "Safety Awareness",
      text: "The unit encourages students to understand safety, preparedness and responsible behaviour.",
    },
    {
      icon: <FiUsers />,
      title: "Community Participation",
      text: "Students can participate in awareness drives, social activities and community-oriented initiatives.",
    },
  ];

  const values = [
    "Humanitarian values",
    "Health and safety awareness",
    "Community service",
    "Student participation",
    "Social responsibility",
    "Awareness and outreach",
  ];

  return (
    <>
      <PageHero
        title="Youth Red Cross (YRS)"
        subtitle="Humanity in action through youth participation."
      />

      <main className="inner-page page-scope-youthredcross">

        <div className="yrc-container">

          {/* ================= HERO ================= */}
          <section className="yrc-hero">

            <div className="yrc-hero-content">

              <span className="yrc-eyebrow">
                <FiHeart />
                YOUTH RED CROSS
              </span>

              <h1>
                Humanity in Action,
                <span> Youth in Service.</span>
              </h1>

              <p>
                Youth Red Cross activities promote humanitarian values,
                awareness, health, safety and community service through
                meaningful student participation.
              </p>

              <div className="yrc-hero-actions">

                <a
                  href="mailto:mkjkmrt@gmail.com"
                  className="yrc-primary-btn"
                >
                  Contact College
                  <FiArrowRight />
                </a>

                <Link
                  to="/student/notices"
                  className="yrc-secondary-btn"
                >
                  Student Notices
                </Link>

              </div>

            </div>

            <div className="yrc-hero-visual">

              <div className="yrc-main-icon">
                <FiHeart />
              </div>

              <div className="yrc-floating-card yrc-card-one">
                <FiUsers />
                <div>
                  <strong>Youth</strong>
                  <span>Participation</span>
                </div>
              </div>

              <div className="yrc-floating-card yrc-card-two">
                <FiActivity />
                <div>
                  <strong>Health</strong>
                  <span>Awareness</span>
                </div>
              </div>

              <div className="yrc-floating-card yrc-card-three">
                <FiShield />
                <div>
                  <strong>Safety</strong>
                  <span>& Service</span>
                </div>
              </div>

            </div>

          </section>


          {/* ================= INTRO ================= */}
          <section className="yrc-intro">

            <div className="yrc-section-label">
              ABOUT THE UNIT
            </div>

            <div className="yrc-intro-grid">

              <div>
                <h2>
                  Service values and
                  <span> student engagement</span>
                </h2>
              </div>

              <div>
                <p>
                  Youth Red Cross activities provide students with
                  opportunities to participate in humanitarian,
                  health-awareness and community-service initiatives.
                  These activities encourage students to understand
                  their social responsibilities and contribute positively
                  to the community.
                </p>

                <p>
                  Students can participate in awareness drives and
                  service activities organised by the unit as part of
                  campus engagement and community outreach.
                </p>
              </div>

            </div>

          </section>


          {/* ================= ACTIVITIES ================= */}
          <section className="yrc-activities">

            <div className="yrc-heading-row">

              <div>
                <span className="yrc-section-label">
                  CAMPUS ENGAGEMENT
                </span>

                <h2>
                  What the Youth Red Cross promotes
                </h2>
              </div>

              <p>
                Building awareness, responsibility and a spirit of service.
              </p>

            </div>


            <div className="yrc-activity-grid">

              {activities.map((item, index) => (
                <article
                  className="yrc-activity-card"
                  key={index}
                >

                  <div className="yrc-activity-icon">
                    {item.icon}
                  </div>

                  <span className="yrc-activity-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="yrc-card-line" />

                </article>
              ))}

            </div>

          </section>


          {/* ================= VALUES ================= */}
          <section className="yrc-values">

            <div className="yrc-values-content">

              <span className="yrc-section-label">
                CORE VALUES
              </span>

              <h2>
                Learn. Serve.
                <br />
                <span>Make a difference.</span>
              </h2>

              <p>
                Youth participation can help create awareness,
                responsibility and a culture of service within the
                campus and surrounding community.
              </p>

            </div>


            <div className="yrc-values-list">

              {values.map((value, index) => (
                <div
                  className="yrc-value-item"
                  key={index}
                >
                  <FiCheckCircle />
                  <span>{value}</span>
                </div>
              ))}

            </div>

          </section>


          {/* ================= PARTICIPATION ================= */}
          <section className="yrc-participation">

            <div className="yrc-participation-icon">
              <FiUsers />
            </div>

            <div className="yrc-participation-content">

              <span className="yrc-section-label">
                GET INVOLVED
              </span>

              <h2>
                Participate in campus service activities
              </h2>

              <p>
                Students interested in Youth Red Cross activities
                can stay connected with the college and participate
                in awareness and service initiatives organised by
                the unit.
              </p>

            </div>

            <Link
              to="/student/notices"
              className="yrc-outline-btn"
            >
              View Student Notices
              <FiArrowRight />
            </Link>

          </section>


          {/* ================= CONTACT STRIP ================= */}
          <section className="yrc-contact">

            <div className="yrc-contact-icon">
              <FiMapPin />
            </div>

            <div>
              <span>MKJK MAHAVIDYALAYA</span>
              <h3>
                Delhi Road, Rohtak, Haryana – 124001
              </h3>
            </div>

            <a href="mailto:mkjkmrt@gmail.com">
              Contact College
              <FiArrowRight />
            </a>

          </section>

        </div>

      </main>
    </>
  );
}