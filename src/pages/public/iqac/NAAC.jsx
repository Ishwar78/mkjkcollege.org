import React from "react";
import {
  FiDownload,
  FiFileText,
  FiExternalLink,
  FiAward,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./NAAC.css";

const naacDocuments = [
  {
    id: 1,
    title: "SSR For NAAC",
    label: "Self Study Report",
    description:
      "Download the Self Study Report submitted for NAAC accreditation.",
    pdf: "/NAAC/SSR.pdf",
  },
  {
    id: 2,
    title: "AQAR Session 2018-19",
    label: "Annual Quality Assurance Report",
    description:
      "Annual Quality Assurance Report for the academic session 2018-19.",
    pdf: "/NAAC/AQAR-2018-19.pdf",
  },
  {
    id: 3,
    title: "AQAR Session 2019-20",
    label: "Annual Quality Assurance Report",
    description:
      "Annual Quality Assurance Report for the academic session 2019-20.",
    pdf: "/NAAC/AQAR-2019-20.pdf",
  },
  {
    id: 4,
    title: "AQAR Session 2020-21",
    label: "Annual Quality Assurance Report",
    description:
      "Annual Quality Assurance Report for the academic session 2020-21.",
    pdf: "/NAAC/AQAR-2020-21.pdf",
  },
];

export default function NAAC() {
  const openPdf = (pdf) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        title="NAAC"
        subtitle="Quality assurance and accreditation information."
      />

      <main className="naac-page page-scope-naac">

        {/* =========================
            INTRO SECTION
        ========================== */}

        <section className="naac-intro">
          <div className="naac-container">

            <div className="naac-intro-content">

              <span className="naac-eyebrow">
                <FiAward />
                QUALITY ASSURANCE
              </span>

              <h1>
                NAAC &amp;
                <span> Accreditation</span>
              </h1>

              <p>
                Access institutional quality assurance documents,
                Self Study Reports and Annual Quality Assurance
                Reports of the college.
              </p>

            </div>

            <div className="naac-intro-badge">
              <FiAward />

              <div>
                <strong>NAAC</strong>
                <span>Accreditation Documents</span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================
            DOCUMENT SECTION
        ========================== */}

        <section className="naac-documents-section">

          <div className="naac-container">

            <div className="naac-section-heading">

              <div>
                <span>DOCUMENT ARCHIVE</span>

                <h2>
                  NAAC Reports &amp; Documents
                </h2>
              </div>

              <p>
                Select any document below to open the
                official PDF.
              </p>

            </div>


            <div className="naac-document-list">

              {naacDocuments.map((document, index) => (
                <article
                  className={`naac-document ${
                    index === 0
                      ? "naac-document-featured"
                      : ""
                  }`}
                  key={document.id}
                >

                  {/* Number */}

                  <div className="naac-document-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* Icon */}

                  <div className="naac-document-icon">
                    <FiFileText />
                  </div>


                  {/* Content */}

                  <div className="naac-document-content">

                    <span className="naac-document-label">
                      {document.label}
                    </span>

                    <h3>
                      {document.title}
                    </h3>

                    <p>
                      {document.description}
                    </p>

                  </div>


                  {/* Action */}

                  <button
                    type="button"
                    className="naac-pdf-button"
                    onClick={() =>
                      openPdf(document.pdf)
                    }
                    aria-label={`Open ${document.title}`}
                  >
                    <span>
                      Open PDF
                    </span>

                    <FiExternalLink />
                  </button>

                </article>
              ))}

            </div>


            {/* Bottom information */}

            <div className="naac-note">

              <div className="naac-note-icon">
                <FiFileText />
              </div>

              <div>
                <strong>
                  NAAC Documentation
                </strong>

                <p>
                  Click the <b>Open PDF</b> button to
                  view the respective document in a
                  new browser tab.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            QUICK INFO
        ========================== */}

        <section className="naac-bottom">

          <div className="naac-container">

            <div className="naac-bottom-inner">

              <div>
                <span className="naac-bottom-label">
                  INSTITUTIONAL QUALITY
                </span>

                <h2>
                  Quality assurance at MKJK College
                </h2>

                <p>
                  The IQAC supports systematic quality
                  processes, documentation, review and
                  continuous institutional improvement.
                </p>
              </div>

              <a
                href="mailto:mkjkmrt@gmail.com"
                className="naac-contact-button"
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