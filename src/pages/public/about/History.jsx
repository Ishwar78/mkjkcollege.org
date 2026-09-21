import React from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiArrowRight,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./History.css";

const milestones = [
  {
    year: "1914",
    title: "Jat Anglo Sanskrit High School",
    text: "The society was formed with the prime object to serve the cause of education.",
  },
  {
    year: "1927",
    title: "Jat Heroes Memorial",
    text: "The institution changed its name to Jat Heroes Memorial Anglo Sanskrit High School, Rohtak.",
  },
  {
    year: "1977",
    title: "Jat Education Society",
    text: "The society adopted its present name, Jat Education Society, Rohtak.",
  },
];

const institutions = [
  "All India Jat Heroes Memorial College",
  "Maharani Kishori Jat Kanya Mahavidyalaya",
  "Chhotu Ram Polytechnic",
  "Chhotu Ram College of Education",
  "Matu Ram Institute of Engineering & Management",
  "Matu Ram Institute of Management",
  "Chhotu Ram College of Law",
  "Chhotu Ram Memorial Public School",
  "Jat Senior Secondary School",
  "Jat High School",
];

export default function History() {
  return (
    <>
      <PageHero
        title="History"
        subtitle="Jat Education Society (Regd.) Rohtak — a legacy of educational service."
      />

      <main className="mkjk-history page-scope-history">
        <div className="mkjk-history-container">

          {/* ==================================================
              INTRODUCTION
          ================================================== */}

          <section className="history-intro-card">

            <div className="history-intro-content">

              <div className="history-eyebrow">
                <span className="history-eyebrow-line"></span>
                OUR HISTORY
              </div>

              <h1>
                A Legacy of
                <span> Educational Service</span>
              </h1>

              <p className="history-lead">
                Jat Education Society, Rohtak is an educational society
                registered under Societies Regulation Act XXI of 1860.
                The society was formed in 1914 under the name of
                Jat Anglo Sanskrit High School, Rohtak with the prime
                object to serve the cause of education.
              </p>

              <p>
                In the year 1927, it changed its name as Jat Heroes
                Memorial Anglo Sanskrit High School, Rohtak. The name
                of the society was changed to Jat Education Society,
                Rohtak in 1977.
              </p>

              <p>
                The society is presently running ten prestigious
                institutions dedicated to education and institutional
                development.
              </p>

            </div>


            {/* Heritage Badge */}

            <div className="history-heritage">

              <div className="heritage-circle">
                <FiBookOpen />
              </div>

              <span>EDUCATIONAL LEGACY</span>

              <strong>Since</strong>

              <b>1914</b>

              <small>
                Serving the cause
                <br />
                of education
              </small>

            </div>

          </section>


          {/* ==================================================
              MILESTONES
          ================================================== */}

          <section className="history-milestones">

            <div className="history-section-heading">

              <span>
                <FiAward />
                IMPORTANT MILESTONES
              </span>

              <h2>
                A journey through the years
              </h2>

              <p>
                Key milestones that shaped the journey of the
                Jat Education Society.
              </p>

            </div>


            <div className="history-timeline">

              <div className="timeline-track"></div>

              {milestones.map((item, index) => (
                <article
                  className="timeline-item"
                  key={item.year}
                >

                  <div className="timeline-dot">
                    <span></span>
                  </div>

                  <div className="timeline-card">

                    <div className="timeline-year">
                      <FiCalendar />
                      {item.year}
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                    <div className="timeline-number">
                      0{index + 1}
                    </div>

                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* ==================================================
              INSTITUTIONS
          ================================================== */}

          <section className="history-institutions">

            <div className="institution-heading">

              <div>

                <div className="history-eyebrow light">
                  <span className="history-eyebrow-line"></span>
                  EDUCATIONAL NETWORK
                </div>

                <h2>
                  Institutions run by the society
                </h2>

              </div>

              <div className="institution-count">
                <strong>10</strong>
                <span>Institutions</span>
              </div>

            </div>


            <div className="institution-grid">

              {institutions.map((institution, index) => (
                <div
                  className="institution-card"
                  key={institution}
                >

                  <div className="institution-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="institution-icon">
                    <FiCheckCircle />
                  </div>

                  <span>
                    {institution}
                  </span>

                  <FiArrowRight className="institution-arrow" />

                </div>
              ))}

            </div>

          </section>


          {/* ==================================================
              FOOTER CTA
          ================================================== */}

          <div className="history-cta">

            <div>

              <span>
                CONTINUE EXPLORING
              </span>

              <h3>
                Discover more about our college
              </h3>

            </div>

            <Link
              to="/about/our-college"
              className="history-cta-button"
            >
              Our College
              <FiArrowRight />
            </Link>

          </div>

        </div>
      </main>
    </>
  );
}