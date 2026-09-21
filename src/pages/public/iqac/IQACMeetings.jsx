import React from "react";
import {
  FiFileText,
  FiExternalLink,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./IQACMeetings.css";

const meetings = [
  {
    session: "2019-20",
    pdf: "/IQAC-Meetings/Action takenReport IQAC.pdf",
  },
  {
    session: "2020-21",
    pdf: "/IQAC-Meetings/IQAC All Meetings 2020-21.docs.-1.pdf",
  },
  {
    session: "2021-22",
    pdf: "/IQAC-Meetings/Minutes and Action taken Report of the IQAC meeting.pdf",
  },
  {
    session: "2022-23",
    pdf: "/IQAC-Meetings/Minutes of IQAC Meeting 2022-23.pdf",
  },
  {
    session: "2023-24",
    pdf: "/IQAC-Meetings/IQAC Meeting 2023-24.pdf",
  },
  {
    session: "2024-25",
    pdf: "/IQAC-Meetings/Minutes and Action Taken Report of.pdf",
  },
  {
    session: "2025-26",
    pdf: "/IQAC-Meetings/Minutes and action taken report of of IQAC meeting2025-26.pdf",
  },
  {
    session: "2026-27",
    pdf: "/IQAC-Meetings/Minutes and action taken report of IQAC Meeting 2026-27.pdf",
  },
];

export default function IQACMeetings() {
  const openPdf = (pdf) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        title="IQAC Meetings"
        subtitle="Meeting records, agendas and action points."
      />

      <main className="iqac-page page-scope-iqacmeetings">

        {/* INTRO */}
        <section className="iqac-intro">
          <div className="iqac-container">

            <div className="iqac-intro-content">

              <span className="iqac-eyebrow">
                <FiCheckCircle />
                INTERNAL QUALITY ASSURANCE CELL
              </span>

              <h1>
                IQAC Meetings &
                <span> Action Taken Reports</span>
              </h1>

              <p>
                Access the institutional IQAC meeting records and
                action taken reports organized according to their
                respective academic sessions.
              </p>

            </div>

            <div className="iqac-summary">

              <div className="iqac-summary-icon">
                <FiFileText />
              </div>

              <div>
                <strong>{meetings.length}</strong>
                <span>Sessions Available</span>
              </div>

            </div>

          </div>
        </section>


        {/* REPORTS */}
        <section className="iqac-reports-section">

          <div className="iqac-container">

            <div className="iqac-heading">

              <div>
                <span>DOCUMENT ARCHIVE</span>

                <h2>
                  IQAC Meeting Records
                </h2>
              </div>

              <p>
                Select any session below to view its
                meeting and action taken report.
              </p>

            </div>


            <div className="iqac-grid">

              {meetings.map((meeting, index) => (
                <article
                  className="iqac-card"
                  key={meeting.session}
                  style={{
                    animationDelay: `${index * 0.06}s`,
                  }}
                >

                  <div className="iqac-card-top">

                    <span className="iqac-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="iqac-calendar">
                      <FiCalendar />
                    </div>

                  </div>


                  <div className="iqac-card-content">

                    <span className="iqac-card-label">
                      IQAC MEETING
                    </span>

                    <h3>
                      Session
                    </h3>

                    <div className="iqac-session">
                      {meeting.session}
                    </div>

                    <p>
                      Meeting and Action Taken Report
                      for the session {meeting.session}.
                    </p>

                  </div>


                  <button
                    type="button"
                    className="iqac-open-button"
                    onClick={() => openPdf(meeting.pdf)}
                  >
                    <span>
                      Open PDF
                    </span>

                    <FiExternalLink />
                  </button>

                </article>
              ))}

            </div>


            {/* INFO NOTE */}
            <div className="iqac-note">

              <div className="iqac-note-icon">
                <FiFileText />
              </div>

              <div>
                <strong>
                  IQAC Documentation
                </strong>

                <p>
                  Click on any session to open the corresponding
                  PDF document in a new browser tab.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* BOTTOM */}
        <section className="iqac-bottom">

          <div className="iqac-container">

            <div className="iqac-bottom-inner">

              <div>
                <span>
                  QUALITY ASSURANCE
                </span>

                <h2>
                  Quality meetings & follow-up
                </h2>

                <p>
                  IQAC meetings provide a structured forum
                  for reviewing quality initiatives, academic
                  processes and institutional improvements.
                </p>
              </div>

              <a
                href="mailto:mkjkmrt@gmail.com"
                className="iqac-contact-button"
              >
                Contact College
                <FiExternalLink />
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}