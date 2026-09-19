import React from "react";
import {
  FiAward,
  FiUsers,
  FiMonitor,
  FiActivity,
  FiBookOpen,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./Objectives.css";

const objectives = [
  {
    number: "01",
    title: "Promoting quality education.",
    description:
      "Promoting quality education through a supportive academic environment focused on learning, growth and excellence.",
    icon: FiAward,
  },
  {
    number: "02",
    title: "Holistic development and empowerment of women.",
    description:
      "Encouraging the holistic development, confidence, capabilities and empowerment of women through education and participation.",
    icon: FiUsers,
  },
  {
    number: "03",
    title: "Enhancing the use of ICT.",
    description:
      "Encouraging the effective use of information and communication technology in teaching, learning and institutional activities.",
    icon: FiMonitor,
  },
  {
    number: "04",
    title: "To provide best women sport talent to the nation.",
    description:
      "Providing opportunities for women students to develop sporting talent and contribute to the nation through sports.",
    icon: FiActivity,
  },
  {
    number: "05",
    title: "To provide multi disciplinary education.",
    description:
      "Providing multidisciplinary learning opportunities that support broader knowledge, skills and intellectual development.",
    icon: FiBookOpen,
  },
];

export default function Objectives() {
  return (
    <>
      <PageHero
        title="Objectives"
        subtitle="The institutional objectives guiding education, empowerment and development."
      />

      <main className="page-scope-objectives">
        <div className="objectives-container">

          {/* INTRO */}
          <section className="objectives-intro">

            <div className="objectives-intro-content">

              <div className="objectives-eyebrow">
                <span></span>
                OUR OBJECTIVES
              </div>

              <h1>
                Purpose with
                <span> measurable direction.</span>
              </h1>

              <p>
                These objectives connect the college's academic mission with
                holistic development, technology, sports and multidisciplinary
                learning.
              </p>

            </div>

            <div className="objectives-intro-badge">
              <div className="objective-badge-circle">
                <strong>05</strong>
                <span>CORE<br />OBJECTIVES</span>
              </div>
            </div>

          </section>


          {/* OBJECTIVES */}
          <section className="objectives-section">

            <div className="objectives-section-heading">

              <div>
                <div className="objectives-small-title">
                  <span></span>
                  INSTITUTIONAL FOCUS
                </div>

                <h2>
                  Our Educational
                  <span> Priorities</span>
                </h2>
              </div>

              <p>
                Each objective reflects an important area of institutional
                development and student growth.
              </p>

            </div>


            <div className="objectives-grid">

              {objectives.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="objective-card"
                    key={item.number}
                  >

                    <div className="objective-card-top">

                      <span className="objective-number">
                        {item.number}
                      </span>

                      <div className="objective-icon">
                        <Icon />
                      </div>

                    </div>

                    <div className="objective-card-content">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </div>

                    <div className="objective-card-bottom">
                      <span>MKJK</span>
                      <span className="objective-arrow">
                        →
                      </span>
                    </div>

                  </article>
                );
              })}

            </div>

          </section>


          {/* BOTTOM STATEMENT */}
          <section className="objectives-statement">

            <div className="statement-mark">
              "
            </div>

            <div className="statement-content">
              <span>INSTITUTIONAL VISION</span>

              <h2>
                Education, empowerment and
                <strong> opportunity for every student.</strong>
              </h2>

              <p>
                The objectives provide a clear direction for creating an
                educational ecosystem that supports academic learning,
                personal development, technology, sports and wider
                multidisciplinary growth.
              </p>
            </div>

            <div className="statement-decoration">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}