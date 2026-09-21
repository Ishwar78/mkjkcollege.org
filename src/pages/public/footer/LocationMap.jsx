import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./LocationMap.css";

const departments = [
  {
    title: "Teaching Staff",
    className: "teaching",
    roles: [
      "Associate Professor",
      "Assistant Professor",
      "Lab Attendants",
    ],
  },
  {
    title: "Administrative Staff",
    className: "administrative",
    roles: [
      "Head Clerk",
      "Accountant",
      "Clerk / Typist",
      "Gardner / Groundman",
      "Chowkidar",
      "Peon",
      "Sweeper",
    ],
  },
  {
    title: "Library Staff",
    className: "library",
    roles: [
      "Librarian",
      "Lib Restorer",
      "Lib Attendant",
    ],
  },
  {
    title: "Hostel Staff",
    className: "hostel",
    roles: [
      "Hostel Warden",
      "Clerk",
      "Attendants",
      "Chowkidar",
      "Sweeper",
    ],
  },
];

export default function LocationMap() {
  return (
    <>
      <PageHero
        title="Location Map"
        subtitle="Find the college on Delhi Road, Rohtak, Haryana – 124001."
      />

      <main className="inner-page page-scope-locationmap">

        <div className="location-container">

          {/* =========================
              INTRO
          ========================= */}
          <section className="org-intro">

            <span className="org-eyebrow">
              INSTITUTIONAL ORGANIZATION
            </span>

            <h1>
              Organogram of the Institution
            </h1>

            <p>
              Internal Organizational Structure
            </p>

          </section>


          {/* =========================
              ORGANOGRAM
          ========================= */}
          <section className="organogram-wrapper">

            <div className="organogram">

              {/* MANAGEMENT */}
              <div className="org-level org-top">

                <div className="org-node primary-node">
                  <span className="node-label">
                    MANAGEMENT
                  </span>

                  <strong>
                    Management
                  </strong>
                </div>

              </div>


              {/* CONNECTOR */}
              <div className="vertical-line main-line"></div>


              {/* PRINCIPAL */}
              <div className="org-level">

                <div className="org-node principal-node">
                  <span className="node-label">
                    HEAD OF INSTITUTION
                  </span>

                  <strong>
                    Principal
                  </strong>
                </div>

              </div>


              {/* MAIN CONNECTOR */}
              <div className="vertical-line principal-line"></div>

              <div className="horizontal-line"></div>


              {/* DEPARTMENT COLUMNS */}
              <div className="department-grid">

                {departments.map((department, index) => (

                  <div
                    className={`department-column ${department.className}`}
                    key={department.title}
                  >

                    {/* vertical connector */}
                    <div className="department-connector"></div>


                    {/* DEPARTMENT */}
                    <div className="org-node department-node">

                      <span className="department-number">
                        0{index + 1}
                      </span>

                      <strong>
                        {department.title}
                      </strong>

                    </div>


                    {/* CHILD ROLES */}
                    <div className="role-list">

                      {department.roles.map((role, roleIndex) => (

                        <React.Fragment key={role}>

                          <div className="role-connector"></div>

                          <div
                            className={`org-node role-node ${
                              roleIndex === department.roles.length - 1
                                ? "last-role"
                                : ""
                            }`}
                          >

                            <span className="role-dot"></span>

                            <span>
                              {role}
                            </span>

                          </div>

                        </React.Fragment>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* =========================
              ADDRESS / CONTACT
          ========================= */}
          <section className="location-info">

            <div className="location-info-card">

              <div className="info-icon">
                <FiMapPin />
              </div>

              <div>
                <span>
                  COLLEGE ADDRESS
                </span>

                <h3>
                  Maharani Kishori Jat Kanya Mahavidyalaya
                </h3>

                <p>
                  Delhi Road, Rohtak, Haryana – 124001.
                </p>
              </div>

            </div>


            <div className="location-info-card">

              <div className="info-icon">
                <FiPhone />
              </div>

              <div>
                <span>
                  CONTACT
                </span>

                <h3>
                  College Office
                </h3>

                <p>
                  01262-274660 · 9812152759
                </p>

              </div>

            </div>


            <div className="location-info-card">

              <div className="info-icon">
                <FiMail />
              </div>

              <div>
                <span>
                  EMAIL
                </span>

                <h3>
                  Official Email
                </h3>

                <a href="mailto:mkjkmrt@gmail.com">
                  mkjkmrt@gmail.com
                </a>

              </div>

            </div>

          </section>


          {/* =========================
              FOOTER NOTE
          ========================= */}
          <div className="org-note">

            <FiChevronDown />

            <span>
              Internal Organizational Structure of the Institution
            </span>

          </div>

        </div>

      </main>
    </>
  );
}