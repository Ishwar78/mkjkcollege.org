import React from "react";
import {
  FiShield,
  FiUsers,
  FiAward,
  FiFlag,
  FiHeart,
  FiActivity,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./NCC.css";

const nccActivities = [
  {
    number: "01",
    icon: <FiHeart />,
    title: "Blood Donation Camps",
    text: "Cadets participate in blood donation camps as part of their community service and social responsibility activities.",
  },
  {
    number: "02",
    icon: <FiActivity />,
    title: "Tree Plantation",
    text: "NCC cadets participate in tree plantation activities and contribute towards environmental awareness.",
  },
  {
    number: "03",
    icon: <FiUsers />,
    title: "Social Awareness",
    text: "Cadets participate in social awareness programmes and activities organized for the benefit of the community.",
  },
  {
    number: "04",
    icon: <FiFlag />,
    title: "National Festivals",
    text: "Cadets actively participate in national celebrations such as 15th August and 26th January.",
  },
];

const gallery = [
  {
    image: "/assets/ncc-activity-1.jpg",
    title: "NCC Cadet Activities",
    label: "NCC ACTIVITY",
  },
  {
    image: "/assets/ncc-activity-2.jpg",
    title: "Cadet Training & Camp",
    label: "NCC CAMP",
  },
  {
    image: "/assets/ncc-activity-3.jpg",
    title: "Social Service Programme",
    label: "SOCIAL SERVICE",
  },
  {
    image: "/assets/ncc-activity-4.jpg",
    title: "National Celebration",
    label: "NATIONAL EVENT",
  },
];

export default function NCC() {
  return (
    <>
      <PageHero
        title="National Cadet Corps (N.C.C)"
        subtitle="Discipline, leadership, national integration and service."
      />

      <main className="ncc-page">
        <div className="ncc-container">

          {/* =====================================================
              HERO / INTRO
          ===================================================== */}
          <section className="ncc-hero">

            <div className="ncc-hero-content">

              <span className="ncc-kicker">
                NATIONAL CADET CORPS
              </span>

              <h1>
                Discipline.
                <span> Leadership.</span>
                <br />
                Service.
              </h1>

              <p>
                The NCC wing is being run in this college since 1992.
                Through NCC camps and various activities, students are
                made aware of the value of discipline and national
                integration and prepared to face natural calamities.
              </p>

              <div className="ncc-hero-points">

                <div>
                  <FiCheckCircle />
                  <span>Discipline</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>National Integration</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Leadership</span>
                </div>

              </div>

            </div>

            <div className="ncc-emblem">

              <div className="emblem-ring">
                <FiShield />
              </div>

              <span>NCC SINCE</span>

              <strong>1992</strong>

              <small>
                MKJK Mahavidyalaya
              </small>

              <div className="emblem-line"></div>

              <p>
                Discipline • Unity • Service
              </p>

            </div>

          </section>


          {/* =====================================================
              QUICK STATS
          ===================================================== */}
          <section className="ncc-stats">

            <div className="ncc-stat">

              <div className="stat-icon">
                <FiCalendarIcon />
              </div>

              <div>
                <strong>1992</strong>
                <span>NCC Wing Since</span>
              </div>

            </div>

            <div className="ncc-stat">

              <div className="stat-icon">
                <FiUsers />
              </div>

              <div>
                <strong>85</strong>
                <span>NCC Candidates</span>
              </div>

            </div>

            <div className="ncc-stat">

              <div className="stat-icon">
                <FiShield />
              </div>

              <div>
                <strong>02</strong>
                <span>Girls Platoons</span>
              </div>

            </div>

            <div className="ncc-stat">

              <div className="stat-icon">
                <FiAward />
              </div>

              <div>
                <strong>106</strong>
                <span>Cadets in Enrolment</span>
              </div>

            </div>

          </section>


          {/* =====================================================
              ABOUT NCC
          ===================================================== */}
          <section className="ncc-about">

            <div className="about-image">

              <img
                src="https://www.mkjkcollege.org/img/files/folder/MKJK%20Final%20PPT%20-Dr.%20Susheela%202909161.jpg"
                alt="MKJK NCC activity"
                loading="lazy"
              />

              <div className="image-badge">
                <FiShield />
                <span>NCC</span>
              </div>

            </div>

            <div className="about-content">

              <span>ABOUT THE NCC WING</span>

              <h2>
                Preparing students for
                <span> discipline and service.</span>
              </h2>

              <p>
                The NCC wing is being run in this college since 1992.
                In the NCC camps organized in the college they are made
                aware of value of discipline and national integration
                and prepared to face natural calamities.
              </p>

              <p>
                During each session, the students participate in various
                activities of NCC and their work is appreciated.
              </p>

              <div className="about-highlight">

                <FiFlag />

                <div>
                  <strong>National Celebrations</strong>
                  <p>
                    On national celebrations like 15th August and
                    26th January, our cadets participate in district
                    level parade.
                  </p>
                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              ENROLMENT
          ===================================================== */}
          <section className="enrolment-section">

            <div className="section-heading">

              <span>ENROLMENTS</span>

              <h2>
                NCC Cadet
                <span> Strength</span>
              </h2>

              <p>
                The college provides opportunities for girls to
                participate in NCC and develop discipline, confidence,
                teamwork and leadership.
              </p>

            </div>

            <div className="enrolment-card">

              <div className="enrolment-icon">
                <FiUsers />
              </div>

              <div className="enrolment-main">

                <span>GIRLS</span>

                <strong>02</strong>

                <p>Platoons</p>

              </div>

              <div className="enrolment-divider"></div>

              <div className="cadet-count">

                <span>ENROLMENT</span>

                <strong>106</strong>

                <p>Cadets</p>

              </div>

            </div>

          </section>


          {/* =====================================================
              ACHIEVEMENT
          ===================================================== */}
          <section className="achievement-section">

            <div className="achievement-content">

              <span>NCC ACHIEVEMENT</span>

              <h2>
                A proud moment for
                <span> MKJK.</span>
              </h2>

              <div className="achievement-box">

                <div className="achievement-icon">
                  <FiAward />
                </div>

                <div>

                  <strong>
                    Gold Medal
                  </strong>

                  <p>
                    NCC Cadet Monika, student of B.Sc. 2nd year,
                    won Gold Medal in All India Thal Sainik Camp
                    in July-October, 2015.
                  </p>

                </div>

              </div>

              <div className="camp-tags">

                <span>ATC</span>
                <span>Republic Day Camp</span>
                <span>AITSC</span>

              </div>

              <p className="achievement-note">
                Cadets have attended various ATC, Republic Day Camp,
                AITSC and other NCC activities.
              </p>

            </div>

            <div className="achievement-visual">

              <div className="award-circle">

                <FiAward />

                <span>GOLD</span>

                <strong>2015</strong>

              </div>

              <p>
                All India Thal Sainik Camp
              </p>

            </div>

          </section>


          {/* =====================================================
              ACTIVITIES
          ===================================================== */}
          <section className="ncc-activities">

            <div className="activities-header">

              <div>
                <span>NCC ACTIVITIES</span>

                <h2>
                  Cadets in
                  <span> action.</span>
                </h2>
              </div>

              <p>
                NCC cadets participate in activities that combine
                discipline, social service, environmental awareness
                and national spirit.
              </p>

            </div>

            <div className="activity-grid">

              {nccActivities.map((activity) => (
                <article
                  className="activity-card"
                  key={activity.number}
                >

                  <div className="activity-top">

                    <span>
                      {activity.number}
                    </span>

                    <div className="activity-icon">
                      {activity.icon}
                    </div>

                  </div>

                  <h3>
                    {activity.title}
                  </h3>

                  <p>
                    {activity.text}
                  </p>

                  <div className="activity-footer">

                    <span>
                      MKJK NCC
                    </span>

                    <FiArrowRight />

                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* =====================================================
              IMAGE GALLERY
          ===================================================== */}
          <section className="ncc-gallery-section">

            <div className="gallery-header">

              <div>
                <span>NCC LIFE AT MKJK</span>

                <h2>
                  Discipline in
                  <span> action.</span>
                </h2>
              </div>

              <p>
                A glimpse of NCC participation, camps, service
                activities and national events.
              </p>

            </div>

            <div className="ncc-gallery">

              {gallery.map((item, index) => (
                <article
                  className={`ncc-gallery-card gallery-${index + 1}`}
                  key={item.image}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-shade"></div>

                  <div className="gallery-text">

                    <span>
                      {item.label}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* =====================================================
              NATIONAL SERVICE
          ===================================================== */}
          <section className="national-section">

            <div className="national-visual">

              <div className="flag-symbol">
                <FiFlag />
              </div>

              <span>
                NATIONAL SPIRIT
              </span>

              <strong>
                Unity
                <br />
                & Service
              </strong>

            </div>

            <div className="national-content">

              <span>DISCIPLINE & NATIONAL INTEGRATION</span>

              <h2>
                Building confidence,
                <span> courage and responsibility.</span>
              </h2>

              <p>
                NCC camps and activities provide students opportunities
                to understand discipline, national integration and
                community service while preparing them to respond to
                challenging situations and natural calamities.
              </p>

              <div className="national-points">

                <div>
                  <FiCheckCircle />
                  <span>Discipline and teamwork</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>National integration</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Community service</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Leadership development</span>
                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              CTA
          ===================================================== */}
          <section className="ncc-cta">

            <div className="cta-badge">
              NCC
            </div>

            <div>

              <span>
                NATIONAL CADET CORPS
              </span>

              <h2>
                Discipline • Unity • Service
              </h2>

              <p>
                Empowering students through participation,
                responsibility and national service.
              </p>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}


/*
  Small local icon component so no additional package
  import is required.
*/
function FiCalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}