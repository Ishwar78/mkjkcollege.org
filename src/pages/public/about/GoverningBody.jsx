import React from "react";
import {
  FiUsers,
  FiShield,
  FiCalendar,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./GoverningBody.css";

const administratorImage = "/T-L-Satyaprakash-IAS-defence-speak.jpg";

const facts = [
  {
    number: "1913",
    title: "Society came into existence",
    icon: FiCalendar,
  },
  {
    number: "15512",
    title: "Members",
    icon: FiUsers,
  },
  {
    number: "105",
    title: "Collegium members elected for three years",
    icon: FiUsers,
  },
  {
    number: "17",
    title: "Executive Council members",
    icon: FiShield,
  },
];

const officeBearers = [
  "President",
  "Vice-President",
  "General Secretary",
  "Treasurer",
];

export default function GoverningBody() {
  return (
    <>
      <PageHero
        title="Governing Body"
        subtitle="Jat Education Society — governance, representation and administration."
      />

      <main className="page-scope-governingbody">
        <div className="governing-container">

          {/* =====================================================
              HERO
          ====================================================== */}
          <section className="governing-hero">

            <div className="governing-hero-content">

              <div className="governing-eyebrow">
                <span></span>
                JAT EDUCATION SOCIETY
              </div>

              <h1>
                Governance with
                <strong> representation and continuity.</strong>
              </h1>

              <p>
                Jat Education Society (Regd.) came into existence in 1913.
                It is registered under the applicable society registration
                framework and provides the institutional governance structure
                behind its educational institutions.
              </p>

              <div className="governance-highlights">

                <div>
                  <FiShield />
                  <span>
                    Institutional
                    <strong>Governance</strong>
                  </span>
                </div>

                <div>
                  <FiUsers />
                  <span>
                    Community
                    <strong>Representation</strong>
                  </span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>
                    Administrative
                    <strong>Continuity</strong>
                  </span>
                </div>

              </div>

            </div>


            <div className="governing-emblem">

              <div className="emblem-circle">
                <FiShield />
              </div>

              <strong>Governance</strong>

              <small>
                Education · Administration
                <br />
                Representation
              </small>

              <div className="emblem-line"></div>

              <span>JAT EDUCATION SOCIETY</span>

            </div>

          </section>


          {/* =====================================================
              FACTS
          ====================================================== */}
          <section className="governing-facts">

            {facts.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="fact-card"
                  key={item.title}
                >
                  <div className="fact-icon">
                    <Icon />
                  </div>

                  <strong>{item.number}</strong>

                  <span>{item.title}</span>
                </article>
              );
            })}

          </section>


          {/* =====================================================
              EXECUTIVE COUNCIL
          ====================================================== */}
          <section className="executive-section">

            <div className="executive-content">

              <div className="section-eyebrow">
                <span></span>
                GOVERNANCE STRUCTURE
              </div>

              <h2>
                Executive
                <strong> Council</strong>
              </h2>

              <p>
                105 members of collegium are elected directly for three
                years who further elect office bearers and 17 members of
                Executive Council.
              </p>

              <div className="executive-note">
                <FiUsers />

                <span>
                  <strong>105 Collegium Members</strong>
                  <small>
                    Elected directly for a three-year term
                  </small>
                </span>
              </div>

            </div>


            <div className="office-grid">

              {officeBearers.map((office, index) => (
                <article
                  className="office-card"
                  key={office}
                >

                  <span className="office-number">
                    0{index + 1}
                  </span>

                  <div className="office-icon">
                    <FiBriefcase />
                  </div>

                  <h3>{office}</h3>

                  <span>
                    Office Bearer
                  </span>

                </article>
              ))}

            </div>

          </section>


          {/* =====================================================
              ADMINISTRATOR PROFILE
          ====================================================== */}
          <section className="administrator-section">

            <div className="administrator-heading">

              <div className="section-eyebrow">
                <span></span>
                CURRENT ADMINISTRATION
              </div>

              <h2>
                Administrator,
                <strong> Jat Education Society</strong>
              </h2>

            </div>


            <div className="administrator-profile">

              {/* IMAGE */}
              <div className="administrator-image-wrap">

                <div className="administrator-image-frame">

                  <div className="image-corner top-left"></div>
                  <div className="image-corner top-right"></div>
                  <div className="image-corner bottom-left"></div>
                  <div className="image-corner bottom-right"></div>

                  <img
                    src={administratorImage}
                    alt="Administrator, Jat Education Society"
                  />

                </div>

                <div className="administrator-image-label">
                  <span>JAT EDUCATION SOCIETY</span>
                </div>

              </div>


              {/* CONTENT */}
              <div className="administrator-content">

                <span className="profile-label">
                  ADMINISTRATOR
                </span>

                <div className="profile-line"></div>

                <h3>
                  Sh. T.L. Satyaprakash
                </h3>

                <div className="profile-designation">
                  <FiShield />

                  <span>
                    IAS (HY-2002)
                  </span>
                </div>

                <p>
                  Presently, Sh. T.L. Satyaprakash, IAS (HY-2002),
                  Secretary to Haryana Government, has taken over the
                  charge of Administrator, Jat Education Society (Regd.).
                </p>

                <div className="administrator-tags">

                  <span>
                    <FiCheckCircle />
                    Administrator
                  </span>

                  <span>
                    <FiBriefcase />
                    Jat Education Society
                  </span>

                  <span>
                    <FiShield />
                    Institutional Administration
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              BOTTOM MESSAGE
          ====================================================== */}
          <section className="governance-footer">

            <div className="footer-symbol">
              <FiShield />
            </div>

            <div className="footer-content">

              <span>
                INSTITUTIONAL GOVERNANCE
              </span>

              <h2>
                A structured framework for
                <strong> education and administration.</strong>
              </h2>

              <p>
                The governance structure provides representation,
                administrative continuity and institutional direction
                for the educational institutions under the society.
              </p>

            </div>

            <div className="footer-decoration">
              <i></i>
              <i></i>
              <i></i>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}