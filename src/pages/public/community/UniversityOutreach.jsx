import React from "react";
import {
  FiGlobe,
  FiUsers,
  FiBookOpen,
  FiHeart,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiActivity,
  FiHome,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./UniversityOutreach.css";

export default function UniversityOutreach() {
  const outreachAreas = [
    {
      icon: <FiBookOpen />,
      title: "Education",
      text: "Sharing knowledge, awareness and educational opportunities with the wider community.",
    },
    {
      icon: <FiHeart />,
      title: "Health Awareness",
      text: "Supporting awareness initiatives related to health, wellbeing and responsible living.",
    },
    {
      icon: <FiGlobe />,
      title: "Environment",
      text: "Encouraging environmental awareness and responsible participation in community activities.",
    },
    {
      icon: <FiUsers />,
      title: "Social Awareness",
      text: "Creating opportunities for students and faculty to engage with important social issues.",
    },
  ];

  const impactPoints = [
    "Knowledge sharing",
    "Community engagement",
    "Health awareness",
    "Environmental responsibility",
    "Social awareness",
    "Student participation",
  ];

  return (
    <>
      <PageHero
        title="University Outreach Program"
        subtitle="Connecting the campus with the wider community."
      />

      <main className="inner-page page-scope-universityoutreach">

        <div className="uop-container">

          {/* ================= HERO ================= */}

          <section className="uop-hero">

            <div className="uop-hero-content">

              <span className="uop-eyebrow">
                <FiGlobe />
                UNIVERSITY OUTREACH
              </span>

              <h1>
                Connecting
                <span> Campus & Community.</span>
              </h1>

              <p>
                University outreach activities create opportunities for
                students and faculty to share knowledge, awareness and
                service beyond the campus and contribute meaningfully
                to the wider community.
              </p>

              <div className="uop-hero-actions">

                <Link
                  to="/student/notices"
                  className="uop-primary-btn"
                >
                  View Student Notices
                  <FiArrowRight />
                </Link>

                <a
                  href="mailto:mkjkmrt@gmail.com"
                  className="uop-secondary-btn"
                >
                  Contact College
                </a>

              </div>

            </div>


            <div className="uop-hero-visual">

              <div className="uop-orbit uop-orbit-one"></div>
              <div className="uop-orbit uop-orbit-two"></div>

              <div className="uop-globe">
                <FiGlobe />
              </div>

              <div className="uop-floating-card uop-float-one">
                <FiBookOpen />
                <div>
                  <strong>Education</strong>
                  <span>Knowledge Sharing</span>
                </div>
              </div>

              <div className="uop-floating-card uop-float-two">
                <FiHeart />
                <div>
                  <strong>Community</strong>
                  <span>Social Service</span>
                </div>
              </div>

              <div className="uop-floating-card uop-float-three">
                <FiUsers />
                <div>
                  <strong>Students</strong>
                  <span>Active Participation</span>
                </div>
              </div>

            </div>

          </section>


          {/* ================= INTRO ================= */}

          <section className="uop-intro">

            <div className="uop-section-label">
              ABOUT THE PROGRAM
            </div>

            <div className="uop-intro-grid">

              <div>
                <h2>
                  Outreach that takes
                  <span> learning beyond campus.</span>
                </h2>
              </div>

              <div>

                <p>
                  University outreach activities create opportunities
                  for students and faculty to share knowledge, awareness
                  and service beyond campus.
                </p>

                <p>
                  Such activities can focus on education, health,
                  environment, social awareness and community needs,
                  encouraging meaningful interaction between the
                  institution and the wider community.
                </p>

              </div>

            </div>

          </section>


          {/* ================= AREAS ================= */}

          <section className="uop-areas">

            <div className="uop-heading-row">

              <div>
                <span className="uop-section-label">
                  OUTREACH AREAS
                </span>

                <h2>
                  Areas of community engagement
                </h2>
              </div>

              <p>
                Encouraging students and faculty to contribute
                through knowledge, awareness and service.
              </p>

            </div>


            <div className="uop-area-grid">

              {outreachAreas.map((item, index) => (

                <article
                  className="uop-area-card"
                  key={index}
                >

                  <div className="uop-area-icon">
                    {item.icon}
                  </div>

                  <span className="uop-area-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="uop-card-line"></div>

                </article>

              ))}

            </div>

          </section>


          {/* ================= IMPACT ================= */}

          <section className="uop-impact">

            <div className="uop-impact-visual">

              <div className="uop-impact-circle">
                <FiUsers />
              </div>

              <div className="uop-impact-mini uop-mini-one">
                <FiBookOpen />
              </div>

              <div className="uop-impact-mini uop-mini-two">
                <FiHeart />
              </div>

              <div className="uop-impact-mini uop-mini-three">
                <FiGlobe />
              </div>

            </div>


            <div className="uop-impact-content">

              <span className="uop-section-label">
                COMMUNITY IMPACT
              </span>

              <h2>
                Learning becomes meaningful
                <span> when it reaches people.</span>
              </h2>

              <p>
                Outreach activities can help students understand
                community needs while providing opportunities to
                apply knowledge, develop social responsibility and
                participate in meaningful initiatives.
              </p>


              <div className="uop-impact-list">

                {impactPoints.map((point, index) => (

                  <div
                    className="uop-impact-item"
                    key={index}
                  >
                    <FiCheckCircle />
                    <span>{point}</span>
                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* ================= ENGAGEMENT ================= */}

          <section className="uop-engagement">

            <div className="uop-engagement-head">

              <span className="uop-section-label">
                STUDENT & FACULTY ENGAGEMENT
              </span>

              <h2>
                From campus learning to
                <span> community participation.</span>
              </h2>

            </div>


            <div className="uop-engagement-grid">

              <div className="uop-step">

                <div className="uop-step-icon">
                  <FiBookOpen />
                </div>

                <span>01</span>

                <h3>
                  Learn
                </h3>

                <p>
                  Understand community needs, awareness issues
                  and opportunities for meaningful participation.
                </p>

              </div>


              <div className="uop-step">

                <div className="uop-step-icon">
                  <FiUsers />
                </div>

                <span>02</span>

                <h3>
                  Participate
                </h3>

                <p>
                  Students and faculty can participate in outreach
                  and awareness activities.
                </p>

              </div>


              <div className="uop-step">

                <div className="uop-step-icon">
                  <FiHeart />
                </div>

                <span>03</span>

                <h3>
                  Serve
                </h3>

                <p>
                  Translate knowledge and awareness into responsible
                  community-oriented action.
                </p>

              </div>

            </div>

          </section>


          {/* ================= CTA ================= */}

          <section className="uop-cta">

            <div className="uop-cta-icon">
              <FiActivity />
            </div>

            <div className="uop-cta-content">

              <span>
                MKJK MAHAVIDYALAYA
              </span>

              <h2>
                Be part of meaningful outreach.
              </h2>

              <p>
                Stay connected with college activities and
                student notices for opportunities to participate.
              </p>

            </div>

            <Link
              to="/student/notices"
              className="uop-cta-button"
            >
              Student Notices
              <FiArrowRight />
            </Link>

          </section>


          {/* ================= LOCATION ================= */}

          <section className="uop-location">

            <div className="uop-location-icon">
              <FiMapPin />
            </div>

            <div>
              <span>
                COLLEGE LOCATION
              </span>

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