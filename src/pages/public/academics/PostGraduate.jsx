import React from "react";
import {
  FiAward,
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./PostGraduate.css";

const courses = [
  ["B.P.Ed.", "50"],
  ["PG Diploma in Yoga & Therapy", "80"],
  ["M.P.Ed.", "40"],
  ["M.A. Geography", "40"],
  ["M.A. English", "60"],
  ["M.Com", "60"],
  ["M.A. Applied Yoga & Health", "40"],
  ["M.Sc. Physics", "40"],
  ["M.Sc. Mathematics", "40"],
  ["M.A. History", "60"],
  ["M.A. Political Science", "60"],
  ["M.A. Sociology", "60"],
  ["M.A. Psychology", "60"],
];

export default function PostGraduate() {
  return (
    <>
      <PageHero
        title="Post Graduate Courses"
        subtitle="PG Courses & Intake"
      />

      <main className="page-scope-postgraduate">
        <div className="pg-container">

          {/* =====================================================
              PREMIUM INTRO
          ====================================================== */}
          <section className="pg-intro">

            <div className="pg-intro-content">

              <div className="pg-eyebrow">
                <span></span>
                ACADEMIC PROGRAMMES
              </div>

              <h1>
                Post Graduate
                <strong> Courses</strong>
              </h1>

              <p>
                Explore postgraduate, professional and specialised
                academic programmes offered by Maharani Kishori Jat
                Kanya Mahavidyalaya with programme-wise intake details.
              </p>

              <div className="pg-highlights">

                <span>
                  <FiCheckCircle />
                  13 Programmes
                </span>

                <span>
                  <FiAward />
                  PG & Professional Studies
                </span>

                <span>
                  <FiBookOpen />
                  Programme-wise Intake
                </span>

              </div>

            </div>


            {/* PROGRAMME COUNT */}
            <div className="pg-count-card">

              <div className="pg-count-ring">

                <FiAward />

                <strong>
                  13
                </strong>

                <span>
                  PG
                  <br />
                  PROGRAMMES
                </span>

              </div>

              <small>
                MKJK · ROHTAK
              </small>

            </div>

          </section>


          {/* =====================================================
              DIRECTORY HEADER
          ====================================================== */}
          <section className="pg-section-head">

            <div>

              <div className="pg-small-title">
                <span></span>
                PROGRAMME DIRECTORY
              </div>

              <h2>
                Advance your
                <strong> academic journey.</strong>
              </h2>

            </div>

            <Link
              to="/academics/eligibility/postgraduate"
              className="pg-eligibility"
            >
              <FiUsers />
              <span>Check Eligibility</span>
              <FiArrowRight />
            </Link>

          </section>


          {/* =====================================================
              COURSE GRID
          ====================================================== */}
          <section className="pg-course-grid">

            {courses.map(([name, intake], index) => (
              <article
                className="pg-course-card"
                key={name}
              >

                {/* TOP */}
                <div className="pg-card-top">

                  <span className="pg-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pg-card-icon">
                    <FiAward />
                  </div>

                </div>


                {/* CONTENT */}
                <div className="pg-card-content">

                  <span className="pg-card-label">
                    POST GRADUATE PROGRAMME
                  </span>

                  <h3>
                    {name}
                  </h3>

                </div>


                {/* FOOTER */}
                <div className="pg-card-footer">

                  <div>
                    <small>
                      INTAKE
                    </small>

                    <strong>
                      {intake}
                    </strong>

                    <span>
                      Seats
                    </span>
                  </div>

                  <div className="pg-card-arrow">
                    <FiArrowRight />
                  </div>

                </div>

              </article>
            ))}

          </section>


          {/* =====================================================
              ACADEMIC CTA
          ====================================================== */}
          <section className="pg-bottom-cta">

            <div className="pg-bottom-icon">
              <FiBookOpen />
            </div>

            <div className="pg-bottom-content">

              <span>
                ACADEMIC INFORMATION
              </span>

              <h2>
                Find the right
                <strong> postgraduate programme.</strong>
              </h2>

              <p>
                Review the eligibility requirements before applying
                for the postgraduate programmes offered by the college.
              </p>

            </div>

            <Link
              to="/academics/eligibility/postgraduate"
              className="pg-bottom-button"
            >
              View Eligibility
              <FiArrowRight />
            </Link>

          </section>

        </div>
      </main>
    </>
  );
}