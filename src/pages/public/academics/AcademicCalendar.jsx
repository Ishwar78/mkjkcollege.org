import React from "react";
import {
  FiCalendar,
  FiFileText,
  FiExternalLink,
  FiDownload,
  FiClock,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./AcademicCalendar.css";

export default function AcademicCalendar() {
  const calendars = [
    {
      year: "2019-20",
      file: "/academic-calendar-2019-20.pdf",
    },
    {
      year: "2020-21",
      file: "/academic-calendar-2020-21.pdf",
    },
    {
      year: "2021-22",
      file: "/academic-calendar-2021-22.pdf",
    },
    {
      year: "2022-23",
      file: "/academic-calendar-2022-23.pdf",
    },
    {
      year: "2023-24",
      file: "/academic-calendar-2023-24.pdf",
    },
  ];

  return (
    <>
      <PageHero
        title="Academic Calendar"
        subtitle="Academic schedules, important dates and institutional milestones."
      />

      <main className="mkjk-academic-calendar page-scope-academiccalendar">
        <div className="academic-calendar-container">

          {/* INTRO */}
          <section className="academic-calendar-intro">

            <div className="academic-calendar-intro-content">

              <div className="academic-eyebrow">
                <span></span>
                ACADEMIC PLANNING
              </div>

              <h1>
                Academic
                <strong> Calendar</strong>
              </h1>

              <p>
                The academic calendar provides important academic schedules,
                teaching periods, examinations, holidays and other key
                institutional activities for each academic session.
              </p>

            </div>

            <div className="academic-calendar-icon-box">
              <div className="calendar-big-icon">
                <FiCalendar />
              </div>

              <div>
                <span>ACADEMIC YEARS</span>
                <strong>2019 — 2024</strong>
                <small>Official calendar documents</small>
              </div>
            </div>

          </section>


          {/* CALENDAR LIST */}
          <section className="academic-years-section">

            <div className="academic-years-heading">

              <div>
                <span>CALENDAR ARCHIVE</span>

                <h2>
                  Select Academic
                  <strong> Session</strong>
                </h2>

                <p>
                  Click on any academic session below to view its
                  corresponding Academic Calendar PDF.
                </p>
              </div>

              <div className="calendar-count">
                <FiFileText />

                <div>
                  <strong>{calendars.length}</strong>
                  <span>DOCUMENTS</span>
                </div>
              </div>

            </div>


            {/* YEAR CARDS */}
            <div className="academic-years-grid">

              {calendars.map((calendar, index) => (
                <a
                  href={calendar.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-year-card"
                  key={calendar.year}
                >

                  <div className="academic-card-top">

                    <span className="academic-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="academic-card-icon">
                      <FiCalendar />
                    </div>

                    <span className="academic-pdf-badge">
                      PDF
                    </span>

                  </div>


                  <div className="academic-card-content">

                    <span>ACADEMIC SESSION</span>

                    <h3>
                      {calendar.year}
                    </h3>

                    <p>
                      View Academic Calendar
                    </p>

                  </div>


                  <div className="academic-card-footer">

                    <span>
                      <FiFileText />
                      Official Document
                    </span>

                    <span className="academic-open-icon">
                      <FiExternalLink />
                    </span>

                  </div>

                </a>
              ))}

            </div>

          </section>


          {/* INFORMATION */}
          <section className="academic-calendar-info">

            <div className="academic-info-icon">
              <FiClock />
            </div>

            <div>
              <strong>
                Academic Calendar Information
              </strong>

              <p>
                Academic calendars contain important dates and schedules
                for the respective academic session. Students and staff
                should refer to the applicable calendar for the relevant
                session.
              </p>
            </div>

          </section>


          {/* BOTTOM BANNER */}
          <section className="academic-calendar-banner">

            <div className="academic-banner-icon">
              <FiCalendar />
            </div>

            <div className="academic-banner-content">

              <span>
                MKJK · ACADEMIC SECTION
              </span>

              <h3>
                Plan your academic year with
                <strong> important institutional dates.</strong>
              </h3>

            </div>

            <div className="academic-banner-badge">
              <FiFileText />
              <span>PDF</span>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}