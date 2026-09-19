import React from "react";
import {
  FiBookOpen,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./UpcomingCourses.css";

export default function UpcomingCourses() {
  const courses = [
    {
      id: "01",
      title: "M.A. Sociology",
      description:
        "A postgraduate programme focused on society, social institutions, communities and contemporary social issues.",
    },
    {
      id: "02",
      title: "M.A. Psychology",
      description:
        "A postgraduate programme focused on human behaviour, psychological processes and the study of individuals and society.",
    },
  ];

  return (
    <>
      <PageHero
        title="Upcoming Courses / Programmes"
        subtitle="Explore upcoming academic programmes at MKJK."
      />

      <main className="mkjk-upcoming page-scope-upcomingcourses">
        <div className="mkjk-upcoming-container">

          {/* HERO / INTRO */}
          <section className="upcoming-intro">

            <div className="upcoming-intro-content">

              <div className="upcoming-eyebrow">
                <span></span>
                ACADEMIC PROGRAMMES
              </div>

              <h1>
                Upcoming
                <strong> Courses & Programmes</strong>
              </h1>

              <p>
                Explore the upcoming postgraduate programmes planned for
                students seeking wider academic opportunities and
                multidisciplinary learning.
              </p>

            </div>

            <div className="upcoming-intro-badge">
              <div className="upcoming-badge-icon">
                <FiLayers />
              </div>

              <div>
                <span>PROGRAMMES</span>
                <strong>{courses.length}</strong>
                <small>Upcoming programmes</small>
              </div>
            </div>

          </section>


          {/* COURSE SECTION */}
          <section className="upcoming-course-section">

            <div className="upcoming-section-heading">

              <div>
                <span>UPCOMING PROGRAMMES</span>

                <h2>
                  Discover Your Next
                  <strong> Academic Path</strong>
                </h2>

                <p>
                  The following programmes are listed under upcoming
                  courses/programmes.
                </p>
              </div>

              <div className="upcoming-status">
                <FiCheckCircle />
                <span>ACADEMIC OPPORTUNITY</span>
              </div>

            </div>


            {/* COURSE CARDS */}
            <div className="upcoming-course-grid">

              {courses.map((course) => (
                <article
                  className="upcoming-course-card"
                  key={course.title}
                >

                  <div className="upcoming-card-number">
                    {course.id}
                  </div>

                  <div className="upcoming-card-icon">
                    <FiBookOpen />
                  </div>

                  <div className="upcoming-card-badge">
                    UPCOMING
                  </div>

                  <div className="upcoming-card-content">

                    <span className="upcoming-card-label">
                      POSTGRADUATE PROGRAMME
                    </span>

                    <h3>{course.title}</h3>

                    <div className="upcoming-card-line"></div>

                    <p>{course.description}</p>

                  </div>

                  <div className="upcoming-card-footer">

                    <span>
                      <FiCheckCircle />
                      Academic Programme
                    </span>

                    <span className="upcoming-arrow">
                      <FiArrowRight />
                    </span>

                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* INFORMATION BANNER */}
          <section className="upcoming-info-banner">

            <div className="upcoming-info-icon">
              <FiBookOpen />
            </div>

            <div className="upcoming-info-content">
              <span>MKJK · ACADEMIC SECTION</span>

              <h3>
                New learning opportunities for
                <strong> future-ready students.</strong>
              </h3>

              <p>
                Students are advised to refer to official college notices
                for detailed admission information, eligibility and
                commencement schedules.
              </p>
            </div>

            <Link
              to="/academics/courses-offered"
              className="upcoming-info-button"
            >
              Explore Courses
              <FiArrowRight />
            </Link>

          </section>

        </div>
      </main>
    </>
  );
}