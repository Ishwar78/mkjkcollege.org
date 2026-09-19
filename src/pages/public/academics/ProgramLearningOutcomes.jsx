import React from "react";
import {
  FiBookOpen,
  FiExternalLink,
  FiFileText,
  FiArrowRight,
  FiAward,
  FiLayers,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./ProgramLearningOutcomes.css";

/*
  PDFs ko is folder mein rakhein:

  public/assets/program-learning-outcomes/

  Agar aapke PDF ke filenames different hain,
  sirf `pdf` value change karni hai.
*/

const outcomeDocuments = [
  {
    title: "B.A. Pass Course",
    shortTitle: "B.A.",
    category: "Undergraduate Programme",
    pdf: "/assets/program-learning-outcomes/ba-pass-course.pdf",
  },
  {
    title: "B.Com & B.Com Hons",
    shortTitle: "B.Com",
    category: "Commerce Programme",
    pdf: "/assets/program-learning-outcomes/bcom-bcom-hons.pdf",
  },
  {
    title: "B.Sc. Sports Science",
    shortTitle: "B.Sc.",
    category: "Sports Science Programme",
    pdf: "/assets/program-learning-outcomes/bsc-sports-science.pdf",
  },
  {
    title: "B.Sc. (Medical & Non Medical)",
    shortTitle: "B.Sc.",
    category: "Science Programme",
    pdf: "/assets/program-learning-outcomes/bsc-medical-non-medical.pdf",
  },
  {
    title: "B.P.Ed",
    shortTitle: "B.P.Ed",
    category: "Physical Education Programme",
    pdf: "/assets/program-learning-outcomes/bped.pdf",
  },
  {
    title: "All PG Courses",
    shortTitle: "PG",
    category: "Post Graduate Programmes",
    pdf: "/assets/program-learning-outcomes/all-pg-courses.pdf",
  },
];

export default function ProgramLearningOutcomes() {
  return (
    <>
      <PageHero
        title="Program Learning Outcomes"
        subtitle="Program Outcomes, Program Specific Outcomes and Course Outcomes"
      />

      <main className="page-scope-programlearningoutcomes">
        <div className="plo-container">

          {/* =====================================================
              INTRO HERO
          ====================================================== */}
          <section className="plo-intro">

            <div className="plo-intro-content">

              <div className="plo-eyebrow">
                <span></span>
                ACADEMIC OUTCOMES
              </div>

              <h1>
                Program Learning
                <strong> Outcomes</strong>
              </h1>

              <p>
                Explore the programme-specific learning outcomes and
                course outcomes for undergraduate and postgraduate
                programmes offered by the college.
              </p>

              <div className="plo-points">

                <span>
                  <FiCheck />
                  Programme Outcomes
                </span>

                <span>
                  <FiCheck />
                  Course Outcomes
                </span>

                <span>
                  <FiCheck />
                  Academic Documents
                </span>

              </div>

            </div>


            {/* Visual */}
            <div className="plo-visual">

              <div className="plo-paper plo-paper-back"></div>

              <div className="plo-paper">

                <div className="plo-paper-top">
                  <span>MKJK</span>

                  <FiAward />
                </div>

                <div className="plo-paper-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <FiBookOpen className="plo-book-icon" />

                <strong>
                  PROGRAM
                  <br />
                  OUTCOMES
                </strong>

                <small>
                  ACADEMIC DOCUMENT
                </small>

              </div>

            </div>

          </section>


          {/* =====================================================
              DOCUMENT SECTION
          ====================================================== */}
          <section className="plo-documents">

            <div className="plo-section-heading">

              <div>
                <div className="plo-small-title">
                  <span></span>
                  PROGRAMME DOCUMENTS
                </div>

                <h2>
                  Select a programme to
                  <strong> view outcomes.</strong>
                </h2>

                <p>
                  Click any programme below to open its official
                  learning outcomes document.
                </p>
              </div>

              <div className="plo-document-count">
                <FiFileText />

                <strong>
                  {outcomeDocuments.length}
                </strong>

                <span>
                  DOCUMENTS
                </span>
              </div>

            </div>


            {/* =====================================================
                PDF BUTTON GRID
            ====================================================== */}
            <div className="plo-grid">

              {outcomeDocuments.map((item, index) => (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plo-card"
                  key={item.title}
                >

                  <div className="plo-card-top">

                    <span className="plo-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="plo-card-icon">
                      <FiFileText />
                    </div>

                    <FiExternalLink className="plo-external" />

                  </div>


                  <div className="plo-card-content">

                    <span className="plo-card-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>


                  <div className="plo-card-footer">

                    <span>
                      Open PDF
                    </span>

                    <FiArrowRight />

                  </div>

                </a>
              ))}

            </div>

          </section>


          {/* =====================================================
              BOTTOM CTA
          ====================================================== */}
          <section className="plo-cta">

            <div className="plo-cta-icon">
              <FiLayers />
            </div>

            <div className="plo-cta-content">

              <span>
                ACADEMIC QUALITY
              </span>

              <h2>
                Learning outcomes aligned with
                <strong> academic development.</strong>
              </h2>

              <p>
                The programme documents provide detailed information
                about expected learning outcomes for different courses.
              </p>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}


/* Small check icon without another package */
function FiCheck() {
  return (
    <span className="plo-check-icon">
      ✓
    </span>
  );
}