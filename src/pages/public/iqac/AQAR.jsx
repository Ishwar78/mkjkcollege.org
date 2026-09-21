import React from "react";
import {
  FiFileText,
  FiExternalLink,
  FiCalendar,
  FiAward,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./AQAR.css";

const aqarReports = [
  {
    year: "2015-16",
    pdf: "/AQAR/AQAR 2015-16.pdf",
  },
  {
    year: "2017-18",
    pdf: "/AQAR/AQAR 2017-18.pdf",
  },
  {
    year: "2018-19",
    pdf: "/AQAR/AQAR Report 2018-19.pdf",
  },
  {
    year: "2019-20",
    pdf: "/AQAR/aqar 2020-21.pdf",
  },
  {
    year: "2020-21",
    pdf: "/AQAR/AQAR 2021-22.pdf",
  },
  {
    year: "2021-22",
    pdf: "/AQAR/aqar 2022-23.pdf",
  },
  {
    year: "2022-23",
    pdf: "/AQAR/aqar 2023-24.pdf",
  },
  {
    year: "2023-24",
    pdf: "/AQAR/AQAR 2023-24.pdf",
  },
];

export default function AQAR() {
  const openPdf = (pdf) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        title="AQAR"
        subtitle="Annual Quality Assurance Reports and institutional quality documentation."
      />

      <main className="aqar-page page-scope-aqar">

        {/* =====================================
            INTRO
        ====================================== */}

        <section className="aqar-intro">
          <div className="aqar-container">

            <div className="aqar-intro-content">

              <span className="aqar-eyebrow">
                <FiAward />
                QUALITY ASSURANCE
              </span>

              <h1>
                Annual Quality
                <span> Assurance Reports</span>
              </h1>

              <p>
                Access the Annual Quality Assurance Reports
                maintained by the institution for different
                academic and reporting sessions.
              </p>

            </div>

            <div className="aqar-summary">

              <div className="aqar-summary-icon">
                <FiFileText />
              </div>

              <div>
                <strong>{aqarReports.length}</strong>
                <span>Reports Available</span>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================
            REPORTS
        ====================================== */}

        <section className="aqar-reports-section">

          <div className="aqar-container">

            <div className="aqar-heading">

              <div>
                <span>DOCUMENT ARCHIVE</span>

                <h2>
                  AQAR Reports
                </h2>
              </div>

              <p>
                Select a reporting year to open the
                corresponding AQAR document.
              </p>

            </div>


            <div className="aqar-grid">

              {aqarReports.map((report, index) => (
                <article
                  className="aqar-card"
                  key={report.year}
                  style={{
                    animationDelay: `${index * 0.06}s`,
                  }}
                >

                  <div className="aqar-card-top">

                    <div className="aqar-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="aqar-calendar">
                      <FiCalendar />
                    </div>

                  </div>


                  <div className="aqar-card-content">

                    <span>
                      ANNUAL REPORT
                    </span>

                    <h3>
                      AQAR
                    </h3>

                    <div className="aqar-year">
                      {report.year}
                    </div>

                    <p>
                      Annual Quality Assurance Report
                      for the session {report.year}.
                    </p>

                  </div>


                  <button
                    type="button"
                    className="aqar-open-button"
                    onClick={() => openPdf(report.pdf)}
                  >
                    <span>
                      Open PDF
                    </span>

                    <FiExternalLink />
                  </button>

                </article>
              ))}

            </div>


            {/* =================================
                INFORMATION NOTE
            ================================== */}

            <div className="aqar-note">

              <div className="aqar-note-icon">
                <FiFileText />
              </div>

              <div>
                <strong>
                  AQAR Documentation
                </strong>

                <p>
                  Click on any reporting year to open
                  the corresponding PDF document in a
                  new browser tab.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            BOTTOM SECTION
        ====================================== */}

        <section className="aqar-bottom">

          <div className="aqar-container">

            <div className="aqar-bottom-inner">

              <div>
                <span>
                  INSTITUTIONAL QUALITY
                </span>

                <h2>
                  Annual quality reporting
                </h2>

                <p>
                  AQAR documentation records institutional
                  quality initiatives, outcomes and
                  improvement processes for the relevant
                  reporting period.
                </p>
              </div>

              <a
                href="mailto:mkjkmrt@gmail.com"
                className="aqar-contact-button"
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