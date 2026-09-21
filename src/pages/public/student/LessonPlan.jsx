import React from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiLayers,
  FiArrowRight,
  FiUsers,
  FiClock,
  FiFileText,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./LessonPlan.css";

export default function LessonPlan() {
  const planningAreas = [
    {
      icon: <FiBookOpen />,
      title: "Course Coverage",
      text: "Lesson plans provide a structured approach for covering topics and course content during the teaching period.",
    },
    {
      icon: <FiCalendar />,
      title: "Academic Schedule",
      text: "Teaching activities can be organised according to the academic calendar and planned teaching period.",
    },
    {
      icon: <FiLayers />,
      title: "Learning Activities",
      text: "Planned classroom activities help organise teaching, learning and student participation.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Assessment & Outcomes",
      text: "Lesson planning connects teaching activities with assessment and expected learning outcomes.",
    },
  ];

  const lessonFeatures = [
    {
      icon: <FiFileText />,
      title: "Structured Planning",
      text: "Topics and academic coverage are arranged in a systematic manner.",
    },
    {
      icon: <FiClock />,
      title: "Teaching Period",
      text: "The planned content can be aligned with the available teaching time.",
    },
    {
      icon: <FiUsers />,
      title: "Student Learning",
      text: "Learning activities are planned with student participation and academic progress in mind.",
    },
  ];

  return (
    <>
      <PageHero
        title="Lesson Plan"
        subtitle="A structured view of teaching plans and academic coverage."
      />

      <main className="inner-page page-scope-lessonplan">
        <div className="lesson-container">

          {/* HERO */}
          <section className="lesson-hero">
            <div className="lesson-hero-content">
              <span className="lesson-eyebrow">
                <FiBookOpen />
                ACADEMIC PLANNING
              </span>

              <h1>
                Plan the learning.
                <span> Shape the progress.</span>
              </h1>

              <p>
                Lesson plans organise topics, learning activities, assessment
                and expected outcomes across the teaching period, helping
                create a structured academic learning process.
              </p>

              <div className="lesson-hero-actions">
                <Link
                  to="/academics/academic-calendar"
                  className="lesson-primary-btn"
                >
                  Academic Calendar
                  <FiArrowRight />
                </Link>

                <Link
                  to="/student/notices"
                  className="lesson-secondary-btn"
                >
                  Student Notices
                </Link>
              </div>
            </div>

            <div className="lesson-hero-visual">
              <div className="lesson-glow"></div>

              <div className="lesson-main-circle">
                <FiBookOpen />
              </div>

              <div className="lesson-ring lesson-ring-one"></div>
              <div className="lesson-ring lesson-ring-two"></div>

              <div className="lesson-floating-card lesson-floating-one">
                <FiCalendar />
                <div>
                  <strong>Schedule</strong>
                  <span>Plan & Organise</span>
                </div>
              </div>

              <div className="lesson-floating-card lesson-floating-two">
                <FiCheckCircle />
                <div>
                  <strong>Outcomes</strong>
                  <span>Learn & Assess</span>
                </div>
              </div>

              <div className="lesson-floating-card lesson-floating-three">
                <FiUsers />
                <div>
                  <strong>Students</strong>
                  <span>Learn & Participate</span>
                </div>
              </div>
            </div>
          </section>


{/* LESSON PLAN DOCUMENTS */}
<section className="lesson-plan-documents">
  <div className="lesson-plan-documents-heading">
    <span>LESSON PLAN DOCUMENTS</span>
    <h2>View Previous Lesson Plans</h2>
    <p>
      Access the available lesson plans for the respective academic periods.
    </p>
  </div>

  <div className="lesson-plan-document-grid">

    {/* PDF */}
    <a
      href="/Lesson Plan 2023-24.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="lesson-plan-document-card"
    >
      <div className="lesson-plan-document-icon">
        <FiFileText />
      </div>

      <div className="lesson-plan-document-content">
        <span className="lesson-plan-document-label">
          LESSON PLAN
        </span>

        <h3>
          Lesson Plan For January
          <br />
          To April 2018
        </h3>

        <div className="lesson-plan-document-action">
          Open PDF <FiArrowRight />
        </div>
      </div>
    </a>

    {/* GOOGLE DRIVE */}
    <a
   href="http://drive.google.com/drive/folders/1tjPiicjqJNDAqPN5wxcTXi3PkOCudfU0?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="lesson-plan-document-card"
    >
      <div className="lesson-plan-document-icon">
        <FiBookOpen />
      </div>

      <div className="lesson-plan-document-content">
        <span className="lesson-plan-document-label">
          LESSON PLAN
        </span>

        <h3>
          Lesson Plan For July 2017
          <br />
          To Dec. 2017
        </h3>

        <div className="lesson-plan-document-action">
          Open Lesson Plan <FiArrowRight />
        </div>
      </div>
    </a>

  </div>
</section>


          {/* INTRO */}
          <section className="lesson-intro">
            <div className="lesson-section-heading">
              <span>01 — LESSON PLANNING</span>
              <h2>Academic planning with purpose</h2>
            </div>

            <div className="lesson-intro-text">
              <p>
                Lesson plans organise topics, learning activities, assessment
                and expected outcomes across the teaching period. They provide
                a structured view of the academic coverage planned for
                students.
              </p>

              <p>
                Students can refer to their department's latest lesson plan
                for course-specific academic details.
              </p>
            </div>
          </section>

          {/* PLANNING AREAS */}
          <section className="lesson-planning">
            <div className="lesson-section-heading center">
              <span>02 — ACADEMIC COVERAGE</span>
              <h2>What a lesson plan organises</h2>
              <p>
                A structured lesson plan brings together important elements
                of the teaching and learning process.
              </p>
            </div>

            <div className="lesson-planning-grid">
              {planningAreas.map((item, index) => (
                <article className="lesson-planning-card" key={item.title}>
                  <div className="lesson-card-number">
                    0{index + 1}
                  </div>

                  <div className="lesson-card-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* DEPARTMENT SECTION */}
          <section className="lesson-department">
            <div className="lesson-department-content">
              <span className="lesson-eyebrow dark">
                <FiLayers />
                DEPARTMENT-WISE INFORMATION
              </span>

              <h2>
                Find your department's
                <span> latest lesson plan.</span>
              </h2>

              <p>
                Students can refer to the latest lesson plan provided by
                their respective department for course-specific teaching
                details and academic coverage.
              </p>

              <Link
                to="/student/notices"
                className="lesson-dark-btn"
              >
                Check Student Notices
                <FiArrowRight />
              </Link>
            </div>

            <div className="lesson-department-visual">
              <div className="lesson-document">
                <div className="lesson-document-top">
                  <FiFileText />
                  <span>LESSON PLAN</span>
                </div>

                <div className="lesson-document-line large"></div>
                <div className="lesson-document-line"></div>
                <div className="lesson-document-line"></div>
                <div className="lesson-document-line short"></div>

                <div className="lesson-document-check">
                  <FiCheckCircle />
                  <span>Academic Coverage</span>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="lesson-features">
            <div className="lesson-section-heading">
              <span>03 — TEACHING SUPPORT</span>
              <h2>Structured for effective learning</h2>
            </div>

            <div className="lesson-feature-grid">
              {lessonFeatures.map((item) => (
                <div className="lesson-feature" key={item.title}>
                  <div className="lesson-feature-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PRINCIPLES */}
          <section className="lesson-principles">
            <div className="lesson-principles-inner">
              <div>
                <span className="lesson-eyebrow">
                  <FiCheckCircle />
                  ACADEMIC APPROACH
                </span>

                <h2>
                  From planning
                  <span> to learning.</span>
                </h2>
              </div>

              <p>
                A well-organised lesson plan provides a clear academic
                direction by connecting topics, learning activities,
                assessment and expected outcomes across the teaching period.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="lesson-cta">
            <div>
              <span>STAY UPDATED</span>
              <h2>Check the latest academic information.</h2>
              <p>
                Students can check official notices and academic information
                for the latest updates.
              </p>
            </div>

            <div className="lesson-cta-actions">
              <Link
                to="/student/notices"
                className="lesson-primary-btn"
              >
                Student Notices
                <FiArrowRight />
              </Link>

              <a
                href="mailto:mkjkmrt@gmail.com"
                className="lesson-cta-mail"
              >
                Contact College
              </a>
            </div>
          </section>

          <div className="lesson-footer-note">
            <FiBookOpen />
            <span>
              Lesson planning supports organised teaching and academic
              coverage at MKJK Mahavidyalaya.
            </span>
          </div>

        </div>
      </main>
    </>
  );
}