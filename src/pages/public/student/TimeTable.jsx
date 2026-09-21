import React from "react";
import {
  FiCalendar,
  FiFileText,
  FiArrowUpRight,
  FiClock,
  FiCheckCircle,
  FiBookOpen,
  FiMessageCircle,
  FiDownload,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./TimeTable.css";

export default function TimeTable() {
  /*
    =========================================================
    PDF FILE PATHS

    If your PDFs are directly inside public folder:

    public/
      timetable-2023-24.pdf
      timetable-2024-25.pdf

    then these paths are correct.

    If your filenames are different, only change the href values.
    =========================================================
  */

  const pdfLinks = [
    {
      year: "2023–24",
      title: "Time Table for the Session 2023–24",
      subtitle: "All Courses",
      href: "/Time Table 2023-24.pdf",
    },
    {
      year: "2024–25",
      title: "Time Table for the Session 2024–25",
      subtitle: "All Courses",
      href: "/Time Table 2024-25.pdf",
    },
  ];

  return (
    <>
      <PageHero
        title="Time Table"
        subtitle="Find class schedules and timetable updates."
      />

      <main className="inner-page page-scope-timetable">
        <div className="timetable-container">

          {/* =====================================================
              HERO / INTRO
          ====================================================== */}
          <section className="timetable-hero">

            <div className="timetable-hero-content">

              <span className="timetable-eyebrow">
                <FiCalendar />
                ACADEMIC SCHEDULE
              </span>

              <h1>
                Find your
                <span> academic timetable.</span>
              </h1>

              <p>
                Access the published timetable for different academic
                sessions and courses. Students are advised to refer to
                the latest available schedule for their classes.
              </p>

              <div className="timetable-hero-points">

                <div>
                  <FiCheckCircle />
                  <span>Session-wise schedules</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>All Courses</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Official college timetable</span>
                </div>

              </div>

            </div>

            <div className="timetable-hero-visual">

              <div className="timetable-glow"></div>

              <div className="timetable-calendar">

                <div className="timetable-calendar-top">
                  <span>MKJK</span>
                  <FiCalendar />
                </div>

                <div className="timetable-calendar-body">

                  <strong>TIME</strong>

                  <div className="calendar-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="calendar-clock">
                    <FiClock />
                  </div>

                  <b>TABLE</b>

                </div>

              </div>

              <div className="timetable-floating timetable-floating-one">
                <FiClock />

                <div>
                  <strong>Schedule</strong>
                  <span>Class timings</span>
                </div>
              </div>

              <div className="timetable-floating timetable-floating-two">
                <FiBookOpen />

                <div>
                  <strong>Courses</strong>
                  <span>All programmes</span>
                </div>
              </div>

            </div>

          </section>

          {/* =====================================================
              PDF SECTION
          ====================================================== */}
          <section className="timetable-documents">

            <div className="timetable-section-heading">

              <div>
                <span className="timetable-section-label">
                  OFFICIAL DOCUMENTS
                </span>

                <h2>
                  Published
                  <span> Time Tables</span>
                </h2>
              </div>

              <p>
                Select your academic session below to open the
                corresponding timetable PDF.
              </p>

            </div>

            <div className="timetable-pdf-grid">

              {pdfLinks.map((pdf, index) => (
                <a
                  href={pdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timetable-pdf-card"
                  key={pdf.year}
                >

                  <div className="timetable-pdf-left">

                    <div className="timetable-pdf-icon">
                      <FiFileText />
                    </div>

                    <div className="timetable-pdf-info">

                      <span className="timetable-pdf-session">
                        SESSION {pdf.year}
                      </span>

                      <h3>{pdf.title}</h3>

                      <p>{pdf.subtitle}</p>

                    </div>

                  </div>

                  <div className="timetable-pdf-action">

                    <span>Open PDF</span>

                    <FiArrowUpRight />

                  </div>

                </a>
              ))}

            </div>

          </section>

          {/* =====================================================
              QUICK INFORMATION
          ====================================================== */}
          <section className="timetable-info">

            <div className="timetable-info-icon">
              <FiClock />
            </div>

            <div className="timetable-info-content">

              <span className="timetable-section-label">
                IMPORTANT INFORMATION
              </span>

              <h2>
                Check the latest
                <span> schedule updates.</span>
              </h2>

              <p>
                Timetables are organised according to the published
                academic schedule. Any room, period or class changes
                should be checked through official college notices.
              </p>

            </div>

          </section>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}
          <section className="timetable-links-section">

            <div className="timetable-section-heading">

              <div>
                <span className="timetable-section-label">
                  QUICK LINKS
                </span>

                <h2>
                  Need more
                  <span> information?</span>
                </h2>
              </div>

            </div>

            <div className="timetable-quick-grid">

              <a
                href="mailto:mkjkmrt@gmail.com"
                className="timetable-quick-card"
              >

                <div className="timetable-quick-icon">
                  <FiMessageCircle />
                </div>

                <div>
                  <strong>Contact College</strong>
                  <span>Get timetable related information</span>
                </div>

                <FiArrowUpRight />

              </a>

              <a
                href="/academics/courses-offered"
                className="timetable-quick-card"
              >

                <div className="timetable-quick-icon">
                  <FiBookOpen />
                </div>

                <div>
                  <strong>Explore Programmes</strong>
                  <span>View courses offered by the college</span>
                </div>

                <FiArrowUpRight />

              </a>

              <a
                href="/student/notices"
                className="timetable-quick-card"
              >

                <div className="timetable-quick-icon">
                  <FiCalendar />
                </div>

                <div>
                  <strong>Student Notices</strong>
                  <span>Check latest official updates</span>
                </div>

                <FiArrowUpRight />

              </a>

            </div>

          </section>

          {/* =====================================================
              FOOTER NOTE
          ====================================================== */}
          <section className="timetable-footer-note">

            <div className="timetable-footer-note-icon">
              <FiDownload />
            </div>

            <div>
              <strong>
                Timetable Documents
              </strong>

              <p>
                Click on a session above to open its official timetable
                PDF in a new browser tab.
              </p>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}