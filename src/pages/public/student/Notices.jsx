import React from "react";
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./Notices.css";

export default function Notices() {
  const notices = [
    {
      title: "Download Images of Free Symbols as on 23.05.2025",
      date: "23 May 2025",
      type: "Official Notice",
      link: "#",
    },
    {
      title: "Nomination Form for Election of the Executive Members of Governing Body of MKJK",
      date: "Official Update",
      type: "Important Notice",
      link: "#",
    },
    {
      title: "Election Schedule 2026",
      date: "2026",
      type: "Official Notice",
      link: "#",
    },
    {
      title: "Office of the Returning Officer",
      date: "Official Update",
      type: "Notice",
      link: "#",
    },
  ];

  return (
    <>
      <PageHero
        title="Fee & Other Notices"
        subtitle="A central place for fee, academic and campus notices."
      />

      <main className="inner-page page-scope-notices">
        <div className="notices-container">

          {/* HERO / INTRO */}
          <section className="notices-intro">
            <div className="notices-intro-content">
              <span className="notices-eyebrow">
                <FiBell />
                MKJK • OFFICIAL COMMUNICATION
              </span>

              <h1>
                Latest News
                <span> &amp; Notices</span>
              </h1>

              <p>
                Stay updated with the latest fee, academic, examination,
                admission and campus-related announcements issued by
                Maharani Kishori Jat Kanya Mahavidyalaya, Rohtak.
              </p>
            </div>

            <div className="notices-intro-visual">
              <div className="notices-main-icon">
                <FiBell />
              </div>

              <div className="notices-floating-card notices-floating-one">
                <FiCalendar />
                <div>
                  <strong>Latest Updates</strong>
                  <span>Official information</span>
                </div>
              </div>

              <div className="notices-floating-card notices-floating-two">
                <FiFileText />
                <div>
                  <strong>Official Notices</strong>
                  <span>View documents</span>
                </div>
              </div>
            </div>
          </section>

          {/* NOTICE LIST */}
          <section className="notices-list-section">
            <div className="notices-section-heading">
              <div>
                <span>OFFICIAL COLLEGE UPDATES</span>
                <h2>Latest Notices</h2>
              </div>

              <p>
                Click on any notice to open the complete notification.
              </p>
            </div>

            <div className="notices-list">
              {notices.map((notice, index) => (
                <a
                  href={notice.link}
                  target={notice.link !== "#" ? "_blank" : undefined}
                  rel={
                    notice.link !== "#"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="notice-card"
                  key={`${notice.title}-${index}`}
                >
                  <div className="notice-card-left">
                    <div className="notice-icon">
                      <FiBell />
                    </div>

                    <div className="notice-meta">
                      <span>{notice.type}</span>
                      <small>
                        <FiCalendar />
                        {notice.date}
                      </small>
                    </div>
                  </div>

                  <div className="notice-card-content">
                    <h3>{notice.title}</h3>

                    <div className="notice-view">
                      View Notice
                      <FiArrowRight />
                    </div>
                  </div>

                  <div className="notice-arrow">
                    <FiArrowRight />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* IMPORTANT INFORMATION */}
          <section className="notices-information">
            <div className="notices-info-card">
              <div className="notices-info-icon">
                <FiFileText />
              </div>

              <div>
                <span>IMPORTANT INFORMATION</span>

                <h2>Check the latest official communication</h2>

                <p>
                  Students should regularly check this page and official
                  college communications for fee deadlines, examination
                  notices, admission updates and other important
                  announcements.
                </p>
              </div>
            </div>
          </section>

          {/* QUICK INFORMATION */}
          <section className="notices-quick-section">
            <div className="notices-quick-card">
              <div className="notices-quick-accent"></div>

              <span>MKJK MAHAVIDYALAYA</span>

              <h2>Need more information?</h2>

              <p>
                For clarification regarding any official notice,
                students may contact the college office.
              </p>

              <a href="mailto:mkjkmrt@gmail.com">
                Contact College
                <FiArrowRight />
              </a>
            </div>

            <div className="notices-quick-links">
              <a href="/academics/courses-offered">
                <FiFileText />
                <div>
                  <strong>Explore Programmes</strong>
                  <span>View academic programmes</span>
                </div>
                <FiArrowRight />
              </a>

              <a href="/student/notices">
                <FiBell />
                <div>
                  <strong>Student Notices</strong>
                  <span>Student-related updates</span>
                </div>
                <FiArrowRight />
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}