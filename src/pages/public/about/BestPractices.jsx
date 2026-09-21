import React from "react";
import {
  FiFileText,
  FiExternalLink,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./BestPractices.css";

const documents = [
  {
    year: "2020-21",
    title: "Best Practices Report",
    file: "/best-practices-2020-21.pdf",
  },
  {
    year: "2021-22",
    title: "Best Practices Report",
    file: "/best-practices-2021-22.pdf",
  },
  {
    year: "2022-23",
    title: "Best Practices Report",
    file: "/best-practices-2022-23.pdf",
  },
  {
    year: "2023-24",
    title: "Best Practices Report",
    file: "/best-practices-2023-24.pdf",
  },
];

export default function BestPractices() {
  return (
    <>
      <PageHero
        title="Best Practices"
        subtitle="Institutional best-practice records and quality initiatives."
      />

      <main className="inner-page page-scope-bestpractices">
        <div className="page-wrap">

          {/* ================================
              MAIN CARD
          ================================= */}
          <section className="premium-card bp-main-card">

            <div className="bp-heading">

              <div className="bp-heading-icon">
                <FiFileText />
              </div>

              <div>
                <span className="eyebrow-premium">
                  QUALITY & IMPROVEMENT
                </span>

                <h2>
                  Best Practices
                </h2>

                <p>
                  Explore the institutional best-practice reports
                  for each academic session. Select a session below
                  to view the corresponding PDF document.
                </p>
              </div>

            </div>


            {/* =================================
                DOCUMENT GRID
            ================================= */}
            <div className="bp-document-grid">

              {documents.map((doc, index) => (
                <a
                  key={doc.year}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp-document-card"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >

                  <div className="bp-card-top">

                    <div className="bp-pdf-icon">
                      <FiFileText />
                    </div>

                    <span className="bp-pdf-label">
                      PDF DOCUMENT
                    </span>

                  </div>


                  <div className="bp-card-content">

                    <span className="bp-session-label">
                      ACADEMIC SESSION
                    </span>

                    <h3>
                      {doc.year}
                    </h3>

                    <p>
                      {doc.title}
                    </p>

                  </div>


                  <div className="bp-card-footer">

                    <span>
                      View PDF
                    </span>

                    <span className="bp-arrow">
                      <FiArrowRight />
                    </span>

                  </div>

                </a>
              ))}

            </div>


            {/* =================================
                BOTTOM INFORMATION
            ================================= */}
            <div className="bp-info-strip">

              <div className="bp-info-icon">
                <FiExternalLink />
              </div>

              <div>
                <strong>
                  Open official document
                </strong>

                <span>
                  Click any academic session to open its
                  Best Practices PDF in a new browser tab.
                </span>
              </div>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}