import React from "react";
import {
  FiUsers,
  FiHeart,
  FiShield,
  FiBookOpen,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./GenderChampion.css";

export default function GenderChampion() {
  const focusAreas = [
    {
      icon: <FiUsers />,
      title: "Gender Equality",
      text: "Encouraging equal opportunities, participation and dignity for every student.",
    },
    {
      icon: <FiBookOpen />,
      title: "Awareness",
      text: "Promoting awareness about gender-related issues through educational activities.",
    },
    {
      icon: <FiShield />,
      title: "Respect & Dignity",
      text: "Encouraging respectful behaviour and a positive atmosphere across the campus.",
    },
    {
      icon: <FiAward />,
      title: "Student Leadership",
      text: "Creating opportunities for students to participate in campaigns and peer awareness.",
    },
  ];

  const activities = [
    "Gender equality awareness programmes",
    "Student awareness campaigns",
    "Peer-learning and interaction",
    "Respect and dignity initiatives",
    "Social awareness activities",
    "Student leadership opportunities",
  ];

  return (
    <>
      <PageHero
        title="Gender Champion"
        subtitle="Promoting gender equality and awareness."
      />

      <main className="inner-page page-scope-genderchampion">
        <div className="gender-container">

          {/* HERO */}

          <section className="gender-hero">

            <div className="gender-hero-content">

              <span className="gender-eyebrow">
                <FiUsers />
                EQUALITY • AWARENESS • LEADERSHIP
              </span>

              <h1>
                Building awareness,
                <span> equality & respect.</span>
              </h1>

              <p>
                Gender Champion initiatives encourage equality, dignity,
                respectful behaviour and awareness of gender-related
                issues while encouraging students to become active
                participants in creating a positive campus environment.
              </p>

              <div className="gender-hero-actions">

                <a
                  href="mailto:mkjkmrt@gmail.com"
                  className="gender-primary-btn"
                >
                  Get in Touch
                  <FiArrowRight />
                </a>

                <Link
                  to="/student/notices"
                  className="gender-secondary-btn"
                >
                  Student Notices
                </Link>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="gender-hero-visual">

              <div className="gender-glow"></div>

              <div className="gender-main-circle">
                <FiUsers />
              </div>

              <div className="gender-ring gender-ring-one"></div>
              <div className="gender-ring gender-ring-two"></div>

              <div className="gender-floating-card gender-floating-one">
                <FiHeart />

                <div>
                  <strong>Equality</strong>
                  <span>Equal Opportunities</span>
                </div>
              </div>

              <div className="gender-floating-card gender-floating-two">
                <FiShield />

                <div>
                  <strong>Respect</strong>
                  <span>Dignity for All</span>
                </div>
              </div>

              <div className="gender-floating-card gender-floating-three">
                <FiStar />

                <div>
                  <strong>Leadership</strong>
                  <span>Student Participation</span>
                </div>
              </div>

            </div>

          </section>


          {/* INTRO */}

          <section className="gender-intro">

            <span className="gender-section-label">
              ABOUT GENDER CHAMPION
            </span>

            <div className="gender-intro-grid">

              <div>
                <h2>
                  Encouraging students to
                  <span> understand, participate & lead.</span>
                </h2>
              </div>

              <div>

                <p>
                  Gender Champion initiatives encourage equality,
                  dignity, respectful behaviour and awareness of
                  gender-related issues.
                </p>

                <p>
                  Students can participate in campaigns and
                  peer-awareness activities that help promote a
                  positive and respectful learning environment.
                </p>

              </div>

            </div>

          </section>


          {/* FOCUS AREAS */}

          <section className="gender-focus">

            <div className="gender-heading-row">

              <div>

                <span className="gender-section-label">
                  KEY FOCUS AREAS
                </span>

                <h2>
                  Four pillars of
                  <span> positive change.</span>
                </h2>

              </div>

              <p>
                The initiative focuses on awareness, equality,
                respectful behaviour and active student participation.
              </p>

            </div>


            <div className="gender-focus-grid">

              {focusAreas.map((item, index) => (

                <article
                  className="gender-focus-card"
                  key={item.title}
                >

                  <div className="gender-card-top">

                    <div className="gender-card-icon">
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

                  <div className="gender-card-line"></div>

                </article>

              ))}

            </div>

          </section>


          {/* STUDENT LEADERSHIP */}

          <section className="gender-leadership">

            <div className="gender-leadership-visual">

              <div className="gender-leadership-circle">
                <FiAward />
              </div>

              <div className="gender-small-card gender-small-one">
                <FiUsers />
              </div>

              <div className="gender-small-card gender-small-two">
                <FiHeart />
              </div>

              <div className="gender-small-card gender-small-three">
                <FiCheckCircle />
              </div>

            </div>


            <div className="gender-leadership-content">

              <span className="gender-section-label">
                STUDENT LEADERSHIP
              </span>

              <h2>
                Students as ambassadors
                <span> of awareness & equality.</span>
              </h2>

              <p>
                Students can participate in campaigns and
                peer-awareness activities. Such participation
                provides an opportunity to share ideas, encourage
                respectful behaviour and contribute to campus
                awareness.
              </p>

              <div className="gender-check-list">

                <div>
                  <FiCheckCircle />
                  <span>Awareness campaigns</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Peer-awareness activities</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Equality-focused initiatives</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Student participation</span>
                </div>

              </div>

            </div>

          </section>


          {/* ACTIVITIES */}

          <section className="gender-activities">

            <div className="gender-activities-head">

              <span className="gender-section-label">
                CAMPUS ENGAGEMENT
              </span>

              <h2>
                Awareness that creates
                <span> positive participation.</span>
              </h2>

            </div>


            <div className="gender-activities-grid">

              {activities.map((activity, index) => (

                <div
                  className="gender-activity-item"
                  key={activity}
                >

                  <div className="gender-activity-number">
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


          {/* PRINCIPLES */}

          <section className="gender-principles">

            <div className="gender-principles-head">

              <span className="gender-section-label">
                OUR PRINCIPLES
              </span>

              <h2>
                A campus built around
                <span> equality & respect.</span>
              </h2>

            </div>

            <div className="gender-principles-grid">

              <div>
                <FiUsers />
                <strong>Equality</strong>
                <span>Equal participation and opportunity.</span>
              </div>

              <div>
                <FiHeart />
                <strong>Dignity</strong>
                <span>Respectful behaviour and interaction.</span>
              </div>

              <div>
                <FiShield />
                <strong>Awareness</strong>
                <span>Understanding gender-related issues.</span>
              </div>

              <div>
                <FiStar />
                <strong>Leadership</strong>
                <span>Encouraging students to participate.</span>
              </div>

            </div>

          </section>


          {/* CTA */}

          <section className="gender-support">

            <div className="gender-support-icon">
              <FiMessageCircle />
            </div>

            <div className="gender-support-content">

              <span>
                MKJK MAHAVIDYALAYA
              </span>

              <h2>
                Equality. Awareness. Respect.
              </h2>

              <p>
                Encouraging students to participate in
                awareness initiatives and contribute to a
                respectful campus environment.
              </p>

            </div>

            <a
              href="mailto:mkjkmrt@gmail.com"
              className="gender-support-btn"
            >
              Contact College
              <FiArrowRight />
            </a>

          </section>


          {/* FOOT NOTE */}

          <section className="gender-footer-note">

            <FiUsers />

            <div>

              <strong>
                Gender Champion
              </strong>

              <p>
                Promoting gender equality, awareness and
                responsible student participation.
              </p>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}