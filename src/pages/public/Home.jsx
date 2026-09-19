import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiAward,
  FiUsers,
  FiGrid,
  FiShield,
  FiHeart,
  FiBell,
  FiCalendar,
  FiActivity,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import "./Home.css";

const slides = [
  {
    eyebrow: "MAHARANI KISHORI JAT KANYA MAHAVIDYALAYA · ROHTAK",
    title: "Education that empowers women.",
    text:
      "A legacy of women’s education, academic opportunity and holistic development in Rohtak since 1988.",
    image: "https://mkjkcollege.org/img/files/folder/college%20building.jpg",
  },
  {
    eyebrow: "LEARNING · LEADERSHIP · EXCELLENCE",
    title: "A campus built around possibility.",
    text:
      "Explore undergraduate, postgraduate and other academic opportunities designed for diverse interests and aspirations.",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2200&q=90",
  },
  {
    eyebrow: "KNOWLEDGE · CONFIDENCE · CHARACTER",
    title: "Arise. Awake. Know Thyself.",
    text:
      "From classrooms and laboratories to sports, community service and student life, MKJK encourages purposeful growth.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2200&q=90",
  },
];

const notices = [
  "Admission for the session 2026-27 has started",
  "Election of 11-Executive Members & Staff representative of Governing Body Election",
  "Download Images of Free Symbols as on 23.05.2025",
  "Nomination Form for Election of the Executive Members of Governing Body of MKJK",
  "Election Schedule 2026",
  "Office of the Returning Officer",
  "List of 105 Collegium Members",
  "Advertisement for Guest Faculties in different subjects",
  "Time Table",
];

const quickLinks = [
  ["Admissions", FiAward, "/academics/admission-schedule"],
  ["Academic Programmes", FiBookOpen, "/academics/courses-offered"],
  ["Student Corner", FiUsers, "/student/notices"],
  ["Facilities", FiGrid, "/facilities/infrastructure"],
  ["IQAC", FiShield, "/iqac/naac"],
  ["Community Services", FiHeart, "/community/nss"],
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(id);
  }, []);

  const slide = slides[active];

  const loopedNotices = useMemo(
    () => [...notices, ...notices],
    []
  );

  return (
    <main className="mkjk-home page-scope-home">
      <section
        className="mkjk-home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(45, 18, 6, .88) 0%, rgba(78, 29, 8, .62) 46%, rgba(35, 17, 5, .16) 100%), url("${slide.image}")`,
        }}
      >
        <div className="mkjk-hero-pattern" />

        <button
          className="mkjk-hero-arrow mkjk-hero-left"
          type="button"
          onClick={() =>
            setActive((active - 1 + slides.length) % slides.length)
          }
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>

        <div className="mkjk-home-container mkjk-hero-content">
          <span className="mkjk-hero-kicker">{slide.eyebrow}</span>

          <h1>{slide.title}</h1>

          <p>{slide.text}</p>

          <div className="mkjk-hero-actions">
            <Link
              to="/academics/admission-schedule"
              className="mkjk-btn mkjk-btn-primary"
            >
              Explore Admissions <FiArrowRight />
            </Link>

            <Link
              to="/about/our-college"
              className="mkjk-btn mkjk-btn-ghost"
            >
              Discover MKJK <FiArrowRight />
            </Link>
          </div>

          <div className="mkjk-hero-bottom">
            <div className="mkjk-dots" aria-label="Hero slides">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={index === active ? "active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <span>01 / 03</span>
          </div>
        </div>

        <button
          className="mkjk-hero-arrow mkjk-hero-right"
          type="button"
          onClick={() => setActive((active + 1) % slides.length)}
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>
      </section>

      <section className="mkjk-quick-strip">
        <div className="mkjk-home-container mkjk-quick-grid">
          {quickLinks.map(([title, Icon, path]) => (
            <Link to={path} className="mkjk-quick-card" key={title}>
              <span className="mkjk-quick-icon">
                <Icon />
              </span>
              <strong>{title}</strong>
              <FiArrowRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="mkjk-home-section mkjk-news-principal">
        <div className="mkjk-home-container mkjk-news-grid">
          <article className="mkjk-news-panel">
            <div className="mkjk-panel-heading">
              <div>
                <span>OFFICIAL COLLEGE UPDATES</span>
                <h2>Latest News &amp; Notices</h2>
              </div>

              <Link to="/student/notices">
                View All <FiArrowRight />
              </Link>
            </div>

            <div className="mkjk-news-window">
              <div className="mkjk-news-track">
                {loopedNotices.map((notice, index) => (
                  <div
                    className="mkjk-news-item"
                    key={`${notice}-${index}`}
                  >
                    <div className="mkjk-news-date">
                      <FiBell />
                      <span>NOTICE</span>
                    </div>

                    <div className="mkjk-news-copy">
                      <h3>{notice}</h3>
                      <p>Official college update</p>
                    </div>

                    <FiArrowRight className="mkjk-news-item-arrow" />
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="mkjk-principal-panel">
            <span className="mkjk-panel-label">FROM THE DESK OF THE PRINCIPAL</span>

            <div className="mkjk-principal-accent" />

            <h2>
              Education should make us fit for life and better human beings.
            </h2>

            <p>
              The college focuses on holistic development, confidence,
              academic opportunity and humanistic values for girls.
            </p>

            <div className="mkjk-principal-person">
              <div className="mkjk-principal-avatar">DR</div>
              <div>
                <strong>Dr. Rashmi Lohchab</strong>
                <span>Principal, MKJK Mahavidyalaya</span>
              </div>
            </div>

            <Link to="/about/our-college">
              Read Principal&apos;s Message <FiArrowRight />
            </Link>
          </aside>
        </div>
      </section>

      <section className="mkjk-home-section mkjk-why">
        <div className="mkjk-home-container">
          <div className="mkjk-section-heading">
            <div>
              <span className="mkjk-section-eyebrow">WHY MKJK?</span>
              <h2 className="mkjk-section-title">
                A supportive ecosystem for learning, confidence and opportunity.
              </h2>
            </div>
            <p className="mkjk-section-intro">
              Academic learning sits alongside sports, culture, community
              engagement and student support.
            </p>
          </div>

          <div className="mkjk-why-grid">
            {[
              [
                "Quality Education",
                FiBookOpen,
                "Diverse programmes and an academic environment focused on meaningful learning.",
              ],
              [
                "Holistic Development",
                FiHeart,
                "Academic, cultural, sports and community experiences that extend beyond the classroom.",
              ],
              [
                "Student Support",
                FiShield,
                "Student-facing resources, notices, examinations, scholarships and support cells.",
              ],
              [
                "Women Empowerment",
                FiUsers,
                "An institutional focus on confidence, character, capability and opportunity for women.",
              ],
            ].map(([title, Icon, text]) => (
              <article className="mkjk-feature-card" key={title}>
                <span>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>
                  Explore <FiArrowRight />
                </b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkjk-stats">
        <div className="mkjk-home-container mkjk-stats-grid">
          {[
            ["1988", "College established"],
            ["12.5", "Acres campus"],
            ["12B & 2F", "UGC recognition"],
            ["NCTE", "B.P.Ed & M.P.Ed"],
          ].map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mkjk-home-section mkjk-programmes">
        <div className="mkjk-home-container">
          <div className="mkjk-section-heading">
            <div>
              <span className="mkjk-section-eyebrow">ACADEMIC PROGRAMMES</span>
              <h2 className="mkjk-section-title">
                Find a programme that fits your aspirations.
              </h2>
            </div>

            <Link
              to="/academics/courses-offered"
              className="mkjk-btn mkjk-btn-dark"
            >
              View Courses <FiArrowRight />
            </Link>
          </div>

          <div className="mkjk-programme-grid">
            {[
              [
                "Under Graduate",
                "B.A., B.Com, B.Sc. and B.C.A.",
                "/academics/undergraduate",
                FiBookOpen,
              ],
              [
                "Post Graduate",
                "M.A., M.Com, M.Sc., B.P.Ed., M.P.Ed. and more.",
                "/academics/postgraduate",
                FiAward,
              ],
              [
                "Other Courses",
                "Certificate and specialised learning opportunities.",
                "/academics/other-courses",
                FiActivity,
              ],
            ].map(([title, text, path, Icon]) => (
              <Link to={path} className="mkjk-programme-card" key={title}>
                <span>
                  <Icon />
                </span>
                <small>ACADEMIC PROGRAMMES</small>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>
                  Explore Programme <FiArrowRight />
                </b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mkjk-home-section mkjk-campus-life">
        <div className="mkjk-home-container">
          <div className="mkjk-section-heading">
            <div>
              <span className="mkjk-section-eyebrow">CAMPUS LIFE</span>
              <h2 className="mkjk-section-title">
                Learning continues beyond the classroom.
              </h2>
            </div>
          </div>

          <div className="mkjk-life-grid">
            {[
              [
                "Library & E-Resources",
                "Library services and digital resources including DELNET and INFLIBNET.",
                FiBookOpen,
                "/facilities/library",
              ],
              [
                "Sports",
                "Sports and physical education opportunities for student development.",
                FiActivity,
                "/facilities/sports",
              ],
              [
                "Student Corner",
                "Timetable, notices, examinations, results, scholarships and student resources.",
                FiCalendar,
                "/student/notices",
              ],
              [
                "Community Services",
                "NSS, NCC, Youth Red Cross, Women Cell and outreach initiatives.",
                FiHeart,
                "/community/nss",
              ],
            ].map(([title, text, Icon, path]) => (
              <Link to={path} className="mkjk-life-card" key={title}>
                <span>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>
                  Explore <FiArrowRight />
                </b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mkjk-home-contact-strip">
        <div className="mkjk-home-container">
          <div>
            <span>VISIT / CONTACT MKJK</span>
            <h2>Delhi Road, Rohtak, Haryana – 124001</h2>
          </div>

          <div className="mkjk-contact-actions">
            <a href="tel:01262274660">
              <FiPhone /> 01262-274660
            </a>
            <Link to="/contact">
              Contact College <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="mkjk-moving-strip" aria-label="College values">
        <div className="mkjk-moving-track">
          {[
            "Education",
            "Empowerment",
            "Excellence",
            "Knowledge",
            "Confidence",
            "Character",
            "Opportunity",
            "Community",
            "Education",
            "Empowerment",
            "Excellence",
          ].map((value, index) => (
            <span key={`${value}-${index}`}>{value}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
