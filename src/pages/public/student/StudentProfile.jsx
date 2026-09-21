import React from "react";
import {
  FiUser,
  FiBookOpen,
  FiBell,
  FiActivity,
  FiShield,
  FiArrowRight,
  FiMail,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./StudentProfile.css";

export default function StudentProfile() {
  const studentServices = [
    {
      icon: <FiBookOpen />,
      title: "Academic Information",
      text: "Access academic information, programme details and student-related updates.",
      link: "/academics/courses-offered",
      linkText: "Explore Programmes",
    },
    {
      icon: <FiBell />,
      title: "Latest Notices",
      text: "Stay updated with official college notices, announcements and important information.",
      link: "/student/notices",
      linkText: "View Notices",
    },
    {
      icon: <FiActivity />,
      title: "Student Activities",
      text: "Discover activities, events and opportunities available for students.",
      link: "/student/notices",
      linkText: "View Updates",
    },
    {
      icon: <FiFileText />,
      title: "Student Support",
      text: "Find student-facing information and institutional support resources.",
      link: "/contact",
      linkText: "Get Support",
    },
  ];

  const profileFeatures = [
    "Academic records and student information",
    "Official college notices and announcements",
    "Student activities and institutional updates",
    "Access to relevant support information",
  ];

  return (
    <>
      <PageHero
        title="Student Profile"
        subtitle="A digital gateway to student-facing information and services."
      />

      <main className="inner-page page-scope-studentprofile">
        <div className="student-profile-container">

          {/* ================= HERO ================= */}
          <section className="student-profile-hero">

            <div className="student-profile-hero-content">
              <span className="student-profile-eyebrow">
                <FiUser />
                STUDENT INFORMATION PORTAL
              </span>

              <h1>
                Everything students need,
                <span> in one place.</span>
              </h1>

              <p>
                The Student Profile area provides a digital gateway to
                student-facing information, academic updates, notices,
                activities and support services of MKJK Mahavidyalaya.
              </p>

              <div className="student-profile-actions">
                <Link
                  to="/student/notices"
                  className="student-profile-primary-btn"
                >
                  Latest Notices
                  <FiArrowRight />
                </Link>

                <Link
                  to="/academics/courses-offered"
                  className="student-profile-secondary-btn"
                >
                  Explore Programmes
                </Link>
              </div>
            </div>

            <div className="student-profile-visual">

              <div className="student-profile-glow"></div>

              <div className="student-profile-main-card">
                <div className="student-profile-avatar">
                  <FiUser />
                </div>

                <div>
                  <span>MKJK</span>
                  <strong>Student Profile</strong>
                  <small>Student Information Gateway</small>
                </div>
              </div>

              <div className="student-profile-mini-card student-mini-one">
                <FiBookOpen />
                <div>
                  <strong>Academic</strong>
                  <span>Information</span>
                </div>
              </div>

              <div className="student-profile-mini-card student-mini-two">
                <FiBell />
                <div>
                  <strong>Notices</strong>
                  <span>Stay Updated</span>
                </div>
              </div>

              <div className="student-profile-mini-card student-mini-three">
                <FiShield />
                <div>
                  <strong>Privacy</strong>
                  <span>Protected Access</span>
                </div>
              </div>

            </div>

          </section>


          {/* ================= INTRO ================= */}
          <section className="student-profile-intro">

            <div className="student-section-heading">
              <span>STUDENT INFORMATION</span>
              <h2>A connected student experience</h2>
            </div>

            <p>
              The student profile area can connect learners with academic
              records, notices, activities and support services. It is
              designed as a central point for accessing student-facing
              institutional information.
            </p>

          </section>


          {/* ================= SERVICES ================= */}
          <section className="student-services">

            <div className="student-section-heading center">
              <span>STUDENT SERVICES</span>
              <h2>Explore Student Information</h2>
              <p>
                Quick access to important student-facing areas of the
                college website.
              </p>
            </div>

            <div className="student-services-grid">

              {studentServices.map((service, index) => (
                <article
                  className="student-service-card"
                  key={service.title}
                  style={{ "--service-delay": `${index * 0.08}s` }}
                >
                  <div className="student-service-icon">
                    {service.icon}
                  </div>

                  <div className="student-service-number">
                    0{index + 1}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <Link to={service.link}>
                    {service.linkText}
                    <FiArrowRight />
                  </Link>
                </article>
              ))}

            </div>

          </section>


          {/* ================= INFORMATION ================= */}
          <section className="student-information">

            <div className="student-information-content">

              <span className="student-profile-eyebrow">
                <FiCheckCircle />
                STUDENT INFORMATION
              </span>

              <h2>
                A simple gateway to
                <span> student-facing information.</span>
              </h2>

              <p>
                Students can use the college website to stay informed about
                academic information, official notices, activities and
                available support services.
              </p>

              <div className="student-feature-list">
                {profileFeatures.map((feature) => (
                  <div
                    className="student-feature-item"
                    key={feature}
                  >
                    <FiCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="student-information-card">

              <div className="student-information-card-icon">
                <FiUser />
              </div>

              <span>STUDENT PROFILE</span>

              <h3>
                Your student information,
                <br />
                connected with MKJK.
              </h3>

              <p>
                Use the official college website for relevant student
                information and institutional updates.
              </p>

              <Link to="/contact">
                Contact College
                <FiArrowRight />
              </Link>

            </div>

          </section>


          {/* ================= PRIVACY ================= */}
          <section className="student-privacy">

            <div className="student-privacy-icon">
              <FiShield />
            </div>

            <div className="student-privacy-content">
              <span>PRIVACY &amp; RESPONSIBLE ACCESS</span>

              <h2>Student information deserves careful handling.</h2>

              <p>
                Personal student information should be accessed only through
                authenticated institutional systems. Students should use
                official college channels when accessing information related
                to their academic or personal records.
              </p>
            </div>

            <Link to="/contact" className="student-privacy-btn">
              Contact College
              <FiMail />
            </Link>

          </section>


          {/* ================= FOOTER NOTE ================= */}
          <div className="student-profile-note">
            <FiShield />
            <span>
              Student information should be accessed only through
              appropriate institutional channels.
            </span>
          </div>

        </div>
      </main>
    </>
  );
}