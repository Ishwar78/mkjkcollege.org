import React from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiAward,
  FiBell,
  FiCheckCircle,
  FiArrowRight,
  FiClock,
  FiMail,
  FiShield,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./Examination.css";

export default function Examination() {
  const examinationServices = [
    {
      icon: <FiCalendar />,
      title: "Examination Schedule",
      text: "Check official examination dates, schedules and related announcements.",
      link: "/student/notices",
      linkText: "View Updates",
    },
    {
      icon: <FiFileText />,
      title: "Examination Notices",
      text: "Stay informed about examination instructions and important notifications.",
      link: "/student/notices",
      linkText: "View Notices",
    },
    {
      icon: <FiAward />,
      title: "Results",
      text: "Find result-related information and official result updates.",
      link: "/student/notices",
      linkText: "Check Updates",
    },
    {
      icon: <FiBookOpen />,
      title: "Examination Resources",
      text: "Access relevant instructions and information for examination preparation.",
      link: "/student/notices",
      linkText: "Explore",
    },
  ];

  const examPoints = [
    "Check the latest official examination notice.",
    "Follow the examination schedule issued by the college.",
    "Read all examination instructions carefully.",
    "Rely on official college sources for examination updates.",
  ];

  return (
    <>
      <PageHero
        title="Examination"
        subtitle="Examination information, schedules and results."
      />

      <main className="inner-page page-scope-examination">
        <div className="examination-container">

          {/* ================= HERO ================= */}

          <section className="exam-hero">

            <div className="exam-hero-content">

              <span className="exam-eyebrow">
                <FiBookOpen />
                EXAMINATION INFORMATION
              </span>

              <h1>
                Stay informed.
                <span> Stay prepared.</span>
              </h1>

              <p>
                Access examination information, schedules, official notices,
                instructions and result-related updates through the college's
                dedicated student information channels.
              </p>

              <div className="exam-hero-actions">

                <Link
                  to="/student/notices"
                  className="exam-primary-btn"
                >
                  Examination Notices
                  <FiArrowRight />
                </Link>

                <Link
                  to="/academics/courses-offered"
                  className="exam-secondary-btn"
                >
                  Academic Programmes
                </Link>

              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="exam-hero-visual">

              <div className="exam-glow"></div>

              <div className="exam-calendar-card">

                <div className="exam-calendar-top">
                  <FiCalendar />
                  <span>EXAMINATION</span>
                </div>

                <div className="exam-calendar-body">
                  <strong>Official</strong>
                  <span>College Updates</span>
                </div>

                <div className="exam-calendar-footer">
                  <FiCheckCircle />
                  <span>Stay Updated</span>
                </div>

              </div>

              <div className="exam-floating-card exam-float-one">
                <FiBell />
                <div>
                  <strong>Notices</strong>
                  <span>Important Updates</span>
                </div>
              </div>

              <div className="exam-floating-card exam-float-two">
                <FiClock />
                <div>
                  <strong>Schedule</strong>
                  <span>Check Dates</span>
                </div>
              </div>

              <div className="exam-floating-card exam-float-three">
                <FiAward />
                <div>
                  <strong>Results</strong>
                  <span>Official Information</span>
                </div>
              </div>

            </div>

          </section>


          {/* ================= INTRO ================= */}

          <section className="exam-intro">

            <div className="exam-section-heading">

              <span>EXAMINATION RESOURCES</span>

              <h2>
                Everything important,
                <br />
                <strong>in one place.</strong>
              </h2>

            </div>

            <p>
              Students can access date sheets, result information, instructions
              and other examination updates through the dedicated pages.
              The latest official examination notice should always be followed
              for dates and instructions.
            </p>

          </section>


          {/* ================= SERVICES ================= */}

          <section className="exam-services">

            <div className="exam-section-heading center">

              <span>QUICK ACCESS</span>

              <h2>Examination Information</h2>

              <p>
                Explore important examination-related information and
                official student updates.
              </p>

            </div>

            <div className="exam-services-grid">

              {examinationServices.map((service, index) => (
                <article
                  className="exam-service-card"
                  key={service.title}
                  style={{
                    "--exam-delay": `${index * 0.08}s`,
                  }}
                >

                  <div className="exam-service-icon">
                    {service.icon}
                  </div>

                  <span className="exam-service-number">
                    0{index + 1}
                  </span>

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


          {/* ================= OFFICIAL SOURCE ================= */}

          <section className="exam-official">

            <div className="exam-official-content">

              <span className="exam-eyebrow">
                <FiShield />
                OFFICIAL SOURCE
              </span>

              <h2>
                Always follow the
                <span> latest examination notice.</span>
              </h2>

              <p>
                Examination dates, instructions and other examination-related
                information may be communicated through official notices.
                Students should rely on the latest examination notice for
                current dates and instructions.
              </p>

              <Link
                to="/student/notices"
                className="exam-official-btn"
              >
                View Official Notices
                <FiArrowRight />
              </Link>

            </div>

            <div className="exam-official-card">

              <div className="exam-official-icon">
                <FiBell />
              </div>

              <span>IMPORTANT</span>

              <h3>
                Keep checking official
                examination updates.
              </h3>

              <div className="exam-check-line">
                <FiCheckCircle />
                <span>Dates &amp; Schedules</span>
              </div>

              <div className="exam-check-line">
                <FiCheckCircle />
                <span>Instructions</span>
              </div>

              <div className="exam-check-line">
                <FiCheckCircle />
                <span>Result Updates</span>
              </div>

            </div>

          </section>


          {/* ================= STUDENT CHECKLIST ================= */}

          <section className="exam-checklist">

            <div className="exam-checklist-heading">

              <span>STUDENT CHECKLIST</span>

              <h2>
                Before your examination,
                <strong> stay updated.</strong>
              </h2>

            </div>

            <div className="exam-checklist-items">

              {examPoints.map((point, index) => (
                <div
                  className="exam-check-item"
                  key={point}
                >
                  <div className="exam-check-number">
                    {index + 1}
                  </div>

                  <p>{point}</p>

                  <FiCheckCircle />
                </div>
              ))}

            </div>

          </section>


          {/* ================= CONTACT ================= */}

          <section className="exam-contact">

            <div className="exam-contact-icon">
              <FiMail />
            </div>

            <div className="exam-contact-content">

              <span>NEED INFORMATION?</span>

              <h2>Contact the college for assistance.</h2>

              <p>
                For examination-related information or institutional
                assistance, use the official college contact channel.
              </p>

            </div>

            <a
              href="mailto:mkjkmrt@gmail.com"
              className="exam-contact-btn"
            >
              Contact College
              <FiArrowRight />
            </a>

          </section>


          {/* ================= FOOTER NOTE ================= */}

          <div className="exam-footer-note">
            <FiShield />
            <span>
              Always rely on the latest official examination notice for
              dates, schedules and instructions.
            </span>
          </div>

        </div>
      </main>
    </>
  );
}