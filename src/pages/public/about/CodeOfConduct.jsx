import React from "react";
import {
  FiBookOpen,
  FiExternalLink,
  FiShield,
  FiUsers,
  FiCheckCircle,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./CodeOfConduct.css";

const handbookPdf = "/Code of conduct handbook.pdf";

export default function CodeOfConduct() {
  return (
    <>
      <PageHero
        title="Code of Conduct Handbook"
        subtitle="Guidelines for responsible academic and campus conduct."
      />

      <main className="page-scope-codeofconduct">
        <div className="code-container">

          {/* =====================================================
              INTRO / HANDBOOK HERO
          ====================================================== */}
          <section className="handbook-hero">

            <div className="handbook-hero-content">

              <div className="code-eyebrow">
                <span></span>
                MKJK · INSTITUTIONAL GUIDELINES
              </div>

              <h1>
                Code of Conduct
                <strong> Handbook</strong>
              </h1>

              <p>
                Guidelines for responsible academic behaviour, discipline,
                integrity and respectful participation within the college
                community.
              </p>

              <div className="handbook-actions">

                <a
                  href={handbookPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="handbook-button"
                >
                  <FiBookOpen />

                  <span>
                    <small>READ THE OFFICIAL</small>
                    Open Code of Conduct Handbook
                  </span>

                  <FiExternalLink className="button-arrow" />
                </a>

              </div>

            </div>


            <div className="handbook-visual">

              <div className="document-back document-one"></div>
              <div className="document-back document-two"></div>

              <div className="document-card">

                <div className="document-top">
                  <div className="document-logo">
                    <FiShield />
                  </div>

                  <span>MKJK</span>
                </div>

                <div className="document-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <FiFileText className="document-main-icon" />

                <strong>
                  CODE OF
                  <br />
                  CONDUCT
                </strong>

                <small>
                  HANDBOOK
                </small>

              </div>

            </div>

          </section>


          {/* =====================================================
              QUICK PRINCIPLES
          ====================================================== */}
          <section className="conduct-principles">

            <div className="principles-heading">
              <div className="code-eyebrow">
                <span></span>
                KEY PRINCIPLES
              </div>

              <h2>
                Responsible conduct,
                <strong> shared values.</strong>
              </h2>
            </div>


            <div className="principles-grid">

              <article className="principle-card">

                <div className="principle-icon">
                  <FiShield />
                </div>

                <span>01</span>

                <h3>
                  Student Conduct
                </h3>

                <p>
                  Students are expected to maintain discipline, respect
                  fellow members of the college community and follow
                  institutional rules.
                </p>

              </article>


              <article className="principle-card">

                <div className="principle-icon">
                  <FiCheckCircle />
                </div>

                <span>02</span>

                <h3>
                  Academic Integrity
                </h3>

                <p>
                  Learners should uphold honesty in academic work,
                  examinations, submissions and institutional activities.
                </p>

              </article>


              <article className="principle-card">

                <div className="principle-icon">
                  <FiUsers />
                </div>

                <span>03</span>

                <h3>
                  Respectful Community
                </h3>

                <p>
                  A positive campus environment depends on mutual respect,
                  responsible participation and consideration for others.
                </p>

              </article>

            </div>

          </section>


          {/* =====================================================
              HANDBOOK CTA
          ====================================================== */}
          <section className="handbook-cta">

            <div className="cta-icon">
              <FiBookOpen />
            </div>

            <div className="cta-content">

              <span>
                OFFICIAL DOCUMENT
              </span>

              <h2>
                Read the complete
                <strong> Code of Conduct Handbook</strong>
              </h2>

              <p>
                Access the official handbook for detailed institutional
                guidelines and code of conduct provisions.
              </p>

            </div>

            <a
              href={handbookPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              View Handbook
              <FiArrowRight />
            </a>

          </section>


          {/* =====================================================
              INFORMATION CARDS
          ====================================================== */}
          <section className="conduct-information">

            <article>

              <div className="info-number">
                01
              </div>

              <FiShield />

              <h3>
                Discipline
              </h3>

              <p>
                Students are expected to maintain appropriate discipline
                and follow the rules of the institution.
              </p>

            </article>


            <article>

              <div className="info-number">
                02
              </div>

              <FiCheckCircle />

              <h3>
                Integrity
              </h3>

              <p>
                Academic work, examinations and submissions should reflect
                honesty and responsible conduct.
              </p>

            </article>


            <article>

              <div className="info-number">
                03
              </div>

              <FiUsers />

              <h3>
                Community
              </h3>

              <p>
                Respect for fellow students, teachers and members of the
                college community is an essential part of campus life.
              </p>

            </article>

          </section>

        </div>
      </main>
    </>
  );
}