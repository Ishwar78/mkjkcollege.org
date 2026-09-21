import React from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiFileText,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./AdmissionSchedule.css";

export default function AdmissionSchedule() {
  return (
    <>
      <PageHero
        title="Admission Schedule"
        subtitle="Admission information for the current academic cycle."
      />

      <main className="inner-page page-scope-admissionschedule">
        <div className="admission-container">

          {/* HERO */}
          <section className="admission-hero">
            <div className="admission-hero-content">

              <span className="admission-eyebrow">
                <FiCalendar />
                ADMISSIONS • SESSION 2026–27
              </span>

              <h1>
                Begin Your
                <span> Academic Journey</span>
              </h1>

              <p>
                The official college website currently carries an admission
                update for session 2026–27. Students are advised to check
                the latest official notices for dates, forms, eligibility
                and admission procedures.
              </p>

              <div className="admission-actions">
                <Link
                  to="/academics/courses-offered"
                  className="admission-primary-btn"
                >
                  Explore Programmes
                  <FiArrowRight />
                </Link>

                <Link
                  to="/student/notices"
                  className="admission-secondary-btn"
                >
                  Latest Notices
                </Link>
              </div>
            </div>

            <div className="admission-hero-visual">
              <div className="admission-circle">
                <FiCalendar />
                <strong>2026–27</strong>
                <span>Admission Session</span>
              </div>

              <div className="admission-floating admission-floating-one">
                <FiFileText />
                <div>
                  <strong>Official Updates</strong>
                  <span>Check latest notices</span>
                </div>
              </div>

              <div className="admission-floating admission-floating-two">
                <FiBookOpen />
                <div>
                  <strong>Programmes</strong>
                  <span>Explore courses</span>
                </div>
              </div>
            </div>
          </section>

          {/* SESSION */}
          <section className="admission-session">

            <div className="admission-section-heading">
              <span>ADMISSION SESSION</span>
              <h2>Session 2026–27</h2>
            </div>

            <div className="admission-session-card">

              <div className="session-icon">
                <FiCalendar />
              </div>

              <div className="session-content">
                <span className="session-label">
                  CURRENT ACADEMIC CYCLE
                </span>

                <h3>Admission Update for Session 2026–27</h3>

                <p>
                  The official college website currently carries an
                  admission update for session 2026–27. Dates, forms
                  and procedures should be checked against the latest
                  official notice.
                </p>
              </div>

              <Link
                to="/student/notices"
                className="session-link"
              >
                Check Notices
                <FiArrowRight />
              </Link>

            </div>
          </section>

          {/* APPLICATION JOURNEY */}
          <section className="application-section">

            <div className="application-heading">
              <span>ADMISSION PROCESS</span>

              <h2>Application Journey</h2>

              <p>
                Follow the latest official communication and review
                the important admission information before submitting
                your application.
              </p>
            </div>

            <div className="application-grid">

              <div className="application-card">
                <div className="application-number">01</div>

                <div className="application-icon">
                  <FiBookOpen />
                </div>

                <h3>Check Eligibility</h3>

                <p>
                  Review the eligibility requirements for the programme
                  you wish to apply for.
                </p>
              </div>

              <div className="application-card">
                <div className="application-number">02</div>

                <div className="application-icon">
                  <FiCalendar />
                </div>

                <h3>Check Schedule</h3>

                <p>
                  Check the latest admission dates, deadlines and
                  official schedule.
                </p>
              </div>

              <div className="application-card">
                <div className="application-number">03</div>

                <div className="application-icon">
                  <FiFileText />
                </div>

                <h3>Review Documents</h3>

                <p>
                  Keep the required documents and application
                  information ready before submission.
                </p>
              </div>

              <div className="application-card">
                <div className="application-number">04</div>

                <div className="application-icon">
                  <FiCheckCircle />
                </div>

                <h3>Complete Application</h3>

                <p>
                  Follow the official procedure and complete the
                  admission process as communicated by the college.
                </p>
              </div>

            </div>
          </section>

          {/* IMPORTANT */}
          <section className="admission-important">

            <div className="important-icon">
              <FiFileText />
            </div>

            <div>
              <span>IMPORTANT</span>

              <h2>Always follow the latest official notice</h2>

              <p>
                Admission dates, forms and procedures may be updated.
                Students should verify the latest information through
                the official college communication before taking any
                admission-related action.
              </p>
            </div>

            <Link to="/student/notices">
              View Notices
              <FiArrowRight />
            </Link>

          </section>

          {/* QUICK LINKS */}
          <section className="admission-bottom">

            <div className="admission-contact-card">
              <div className="contact-accent"></div>

              <span>MKJK MAHAVIDYALAYA</span>

              <h2>Need admission information?</h2>

              <p>
                Contact the college for clarification regarding
                admission-related information.
              </p>

              <a href="mailto:mkjkmrt@gmail.com">
                <FiMail />
                Contact College
              </a>
            </div>

            <div className="admission-links">

              <Link to="/academics/courses-offered">
                <FiBookOpen />

                <div>
                  <strong>Explore Programmes</strong>
                  <span>View available programmes</span>
                </div>

                <FiArrowRight />
              </Link>

              <Link to="/student/notices">
                <FiFileText />

                <div>
                  <strong>Student Notices</strong>
                  <span>View latest official updates</span>
                </div>

                <FiArrowRight />
              </Link>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}