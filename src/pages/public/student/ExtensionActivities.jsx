import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./ExtensionActivities.css";

export default function ExtensionActivities() {
  const extensionActivities = [
    {
      session: "2020-21",
      title: "Extension Activities",
      file: "/Extension/Activity All.pdf",
    },
    {
      session: "2021-22",
      title: "Extension Activities",
    file: "/Extension/Activity All.pdf",
    },
    {
      session: "2022-23",
      title: "Extension Activities",
      file: "/Extension/Activity 2021-22.pdf",
    },
    {
      session: "2023-24",
      title: "Extension Activities",
      file: "/Extension/Extension Activities 2023-24.pdf",
    },
  ];

  return (
    <>
      <PageHero
        title="Extension Activities"
        subtitle="Learning beyond the classroom through outreach and participation."
      />

      <main className="inner-page page-scope-extensionactivities">
        <div className="extension-container">

          {/* INTRO */}
          <section className="extension-intro">
            <div className="extension-intro-content">
              <span className="extension-eyebrow">
                <FiBookOpen />
                MKJK • EXTENSION ACTIVITIES
              </span>

              <h1>
                Learning beyond the
                <span> classroom.</span>
              </h1>

              <p>
                Extension activities provide students with opportunities to
                participate in outreach, social awareness, service,
                leadership and community-oriented activities beyond the
                regular classroom environment.
              </p>
            </div>

            <div className="extension-intro-visual">
              <div className="extension-circle">
                <FiBookOpen />
              </div>

              <div className="extension-mini-card extension-mini-one">
                <FiCalendar />
                <div>
                  <strong>Academic Sessions</strong>
                  <span>2020-21 to 2023-24</span>
                </div>
              </div>

              <div className="extension-mini-card extension-mini-two">
                <FiFileText />
                <div>
                  <strong>Official Documents</strong>
                  <span>View PDF Reports</span>
                </div>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section className="extension-documents">
            <div className="extension-section-heading">
              <div>
                <span>OFFICIAL RECORDS</span>
                <h2>Extension Activities</h2>
              </div>

              <p>
                Select a session below to view the corresponding extension
                activities document.
              </p>
            </div>

            <div className="extension-document-grid">
              {extensionActivities.map((item, index) => (
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="extension-document-card"
                  key={item.session}
                >
                  <div className="extension-document-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="extension-document-icon">
                    <FiFileText />
                  </div>

                  <div className="extension-document-content">
                    <span>SESSION {item.session}</span>

                    <h3>{item.title}</h3>

                    <div className="extension-document-action">
                      View PDF
                      <FiArrowRight />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* INFORMATION */}
          <section className="extension-info">
            <div className="extension-info-card">
              <div className="extension-info-icon">
                <FiBookOpen />
              </div>

              <div>
                <span>ABOUT THE RECORDS</span>

                <h2>
                  Explore extension activities by academic session
                </h2>

                <p>
                  The session-wise documents provide access to the available
                  extension activity records of the college. Click on any
                  session above to open its official PDF document.
                </p>
              </div>
            </div>
          </section>

          {/* SUPPORT */}
          <section className="extension-bottom">
            <div>
              <span>MKJK MAHAVIDYALAYA</span>
              <h2>Community engagement &amp; student participation</h2>
              <p>
                Extension activities connect academic learning with social
                awareness, service, leadership and community participation.
              </p>
            </div>

            <a href="mailto:mkjkmrt@gmail.com">
              Contact College
              <FiArrowRight />
            </a>
          </section>

        </div>
      </main>
    </>
  );
}