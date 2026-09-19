import React from "react";
import {
  FiBookOpen,
  FiUsers,
  FiArrowRight,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./UnderGraduate.css";

const courses = [
  ["B.A.", "400", "Under Graduate"],
  ["B.Com", "80", "Under Graduate"],
  ["B.Sc. Life Sciences", "180", "Life Sciences"],
  ["B.Sc. Physical Sciences", "180", "Physical Sciences"],
  ["B.Sc. (Sports Science)", "40", "Sports Science"],
  ["B.C.A.", "60", "Computer Applications"],
];

export default function UnderGraduate() {
  return (
    <>
      <PageHero
        title="Under Graduate Courses"
        subtitle="UG Courses & Intake"
      />

      <main className="page-scope-undergraduate">

        <div className="ug-container">

          {/* =====================================================
              INTRO
          ====================================================== */}
          <section className="ug-intro">

            <div className="ug-intro-content">

              <div className="ug-eyebrow">
                <span></span>
                ACADEMIC PROGRAMMES
              </div>

              <h1>
                Undergraduate
                <strong> Courses</strong>
              </h1>

              <p>
                Explore the undergraduate programmes offered by
                Maharani Kishori Jat Kanya Mahavidyalaya with
                programme-wise intake information.
              </p>

              <div className="ug-mini-points">

                <span>
                  <FiCheckCircle />
                  Undergraduate Programmes
                </span>

                <span>
                  <FiUsers />
                  Intake Information
                </span>

                <span>
                  <FiAward />
                  Academic Opportunities
                </span>

              </div>

            </div>


            {/* RIGHT STAT */}
            <div className="ug-stat-card">

              <div className="ug-stat-icon">
                <FiBookOpen />
              </div>

              <strong>06</strong>

              <span>
                Undergraduate
                <br />
                Programmes
              </span>

              <div className="ug-stat-line"></div>

              <small>
                MKJK · ROHTAK
              </small>

            </div>

          </section>


          {/* =====================================================
              SECTION HEADING
          ====================================================== */}
          <section className="ug-section-heading">

            <div>

              <div className="ug-small-title">
                <span></span>
                PROGRAMME DIRECTORY
              </div>

              <h2>
                Choose your
                <strong> academic path.</strong>
              </h2>

            </div>

            <Link
              to="/academics/eligibility/undergraduate"
              className="ug-eligibility-button"
            >
              <FiUsers />

              <span>
                Check Eligibility
              </span>

              <FiArrowRight />
            </Link>

          </section>


          {/* =====================================================
              COURSE DIRECTORY
          ====================================================== */}
          <section className="ug-course-list">

            {/* HEADER */}
            <div className="ug-course-header">

              <span className="header-course">
                Programme
              </span>

              <span className="header-category">
                Category
              </span>

              <span className="header-intake">
                Intake
              </span>

            </div>


            {courses.map(([name, intake, category], index) => (
              <article
                className="ug-course-row"
                key={name}
              >

                {/* NUMBER */}
                <div className="ug-course-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* COURSE */}
                <div className="ug-course-info">

                  <div className="ug-course-icon">
                    <FiBookOpen />
                  </div>

                  <div>

                    <h3>
                      {name}
                    </h3>

                    <span>
                      Undergraduate Programme
                    </span>

                  </div>

                </div>


                {/* CATEGORY */}
                <div className="ug-course-category">
                  <span>
                    {category}
                  </span>
                </div>


                {/* INTAKE */}
                <div className="ug-course-intake">

                  <strong>
                    {intake}
                  </strong>

                  <span>
                    Seats
                  </span>

                </div>


                <div className="ug-course-arrow">
                  <FiArrowRight />
                </div>

              </article>
            ))}

          </section>


          {/* =====================================================
              BOTTOM INFORMATION
          ====================================================== */}
          <section className="ug-bottom">

            <div className="ug-bottom-icon">
              <FiBookOpen />
            </div>

            <div>

              <span>
                ACADEMIC INFORMATION
              </span>

              <h2>
                Find the programme that
                <strong> fits your goals.</strong>
              </h2>

              <p>
                Students can explore eligibility requirements and
                other academic information before applying for
                undergraduate programmes.
              </p>

            </div>

            <Link
              to="/academics/eligibility/undergraduate"
              className="ug-bottom-button"
            >
              Eligibility
              <FiArrowRight />
            </Link>

          </section>

        </div>

      </main>
    </>
  );
}