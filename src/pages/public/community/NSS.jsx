import React from "react";
import {
  FiHeart,
  FiUsers,
  FiCalendar,
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./NSS.css";

const activities = [
  {
    number: "01",
    title: "One Day & Seven Days Camps",
    text: "NSS units organize one-day and seven-day camps to encourage students to participate in community service and social awareness activities.",
    icon: <FiCalendar />,
  },
  {
    number: "02",
    title: "Rallies on Social Issues",
    text: "Students participate in rallies and awareness programmes addressing important social issues and encouraging responsible citizenship.",
    icon: <FiUsers />,
  },
  {
    number: "03",
    title: "First-Aid & Health Camps",
    text: "First-aid and health check-up camps are organized to promote health awareness and community well-being.",
    icon: <FiHeart />,
  },
  {
    number: "04",
    title: "Tree Plantation",
    text: "Tree plantation activities are conducted to develop environmental responsibility and awareness among students.",
    icon: <FiActivity />,
  },
  {
    number: "05",
    title: "Rural Area Surveys",
    text: "Students conduct surveys in rural areas on Women Empowerment, Health & Hygiene and Election Awareness.",
    icon: <FiCheckCircle />,
  },
];

const gallery = [
  {
    image: "/assets/nss-activity-1.jpg",
    title: "NSS Community Activities",
    label: "NSS ACTIVITY",
  },
  {
    image: "/assets/nss-activity-2.jpg",
    title: "Social Awareness Programme",
    label: "SOCIAL SERVICE",
  },
  {
    image: "/assets/nss-activity-3.jpg",
    title: "NSS Camp & Outreach",
    label: "NSS CAMP",
  },
  {
    image: "/assets/nss-activity-4.jpg",
    title: "Environmental & Community Work",
    label: "COMMUNITY",
  },
];

export default function NSS() {
  return (
    <>
      <PageHero
        title="National Service Scheme (N.S.S)"
        subtitle="Service, citizenship and community participation."
      />

      <main className="nss-page">
        <div className="nss-container">

          {/* =====================================================
              HERO INTRO
          ===================================================== */}
          <section className="nss-intro">

            <div className="nss-intro-content">
              <span className="nss-eyebrow">
                NATIONAL SERVICE SCHEME
              </span>

              <h1>
                Not Me,
                <span> But You.</span>
              </h1>

              <p>
                The Motto of N.S.S "NOT ME BUT YOU" reflects the essence
                of democratic living and upholds the need for self-less
                service.
              </p>

              <div className="nss-intro-points">
                <div>
                  <FiCheckCircle />
                  <span>Community Service</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Social Awareness</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Student Participation</span>
                </div>
              </div>
            </div>

            <div className="nss-unit-card">

              <div className="unit-icon">
                <FiUsers />
              </div>

              <span>NSS AT MKJK</span>

              <strong>02</strong>

              <p>
                NSS Units
              </p>

              <div className="unit-divider"></div>

              <small>
                100 students in each unit
              </small>

            </div>

          </section>


          {/* =====================================================
              NSS OVERVIEW
          ===================================================== */}
          <section className="nss-overview">

            <div className="overview-content">

              <span className="section-kicker">
                ABOUT NSS
              </span>

              <h2>
                Service that
                <span> shapes responsible citizens.</span>
              </h2>

              <p>
                N.S.S helps the students develop appreciation to other
                person's point of view and also show consideration to
                other living beings.
              </p>

              <p>
                There are two units of the NSS in the college. Every year,
                several one day and one 10 days NSS camp is organized.
                Number of students is 50 per unit.
              </p>

            </div>

            <div className="overview-stats">

              <div className="overview-stat">
                <strong>02</strong>
                <span>NSS Units</span>
              </div>

              <div className="overview-stat">
                <strong>100+</strong>
                <span>Students</span>
              </div>

              <div className="overview-stat">
                <strong>50</strong>
                <span>Students / Unit</span>
              </div>

            </div>

          </section>


          {/* =====================================================
              PURPOSE
          ===================================================== */}
          <section className="nss-purpose">

            <div className="purpose-heading">
              <span>WHY NSS MATTERS</span>

              <h2>
                Learning through
                <span> service.</span>
              </h2>

              <p>
                NSS activities provide students opportunities to connect
                classroom learning with real community needs.
              </p>
            </div>

            <div className="purpose-card">

              <div className="purpose-number">
                01
              </div>

              <div>
                <h3>Building social responsibility</h3>

                <p>
                  NSS encourages students to understand community
                  challenges, participate actively and contribute through
                  selfless service.
                </p>
              </div>

            </div>

            <div className="purpose-card">

              <div className="purpose-number">
                02
              </div>

              <div>
                <h3>Creating social awareness</h3>

                <p>
                  Camps and outreach programmes create awareness about
                  social evils such as dowry system, female feticide,
                  AIDS, declining sex ratio and environmental issues.
                </p>
              </div>

            </div>

          </section>


          {/* =====================================================
              ACTIVITIES
          ===================================================== */}
          <section className="nss-activities">

            <div className="activities-heading">

              <div>
                <span>EXTENSION ACTIVITIES</span>

                <h2>
                  NSS activities at
                  <span> MKJK</span>
                </h2>
              </div>

              <p>
                NSS units organize various extension activities every
                year to encourage participation and community service.
              </p>

            </div>

            <div className="activity-grid">

              {activities.map((activity) => (
                <article
                  className="activity-card"
                  key={activity.number}
                >

                  <div className="activity-card-top">

                    <span className="activity-number">
                      {activity.number}
                    </span>

                    <div className="activity-icon">
                      {activity.icon}
                    </div>

                  </div>

                  <h3>{activity.title}</h3>

                  <p>{activity.text}</p>

                  <div className="activity-bottom">
                    <span>MKJK NSS</span>
                    <FiArrowRight />
                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* =====================================================
              IMAGE GALLERY
          ===================================================== */}
          <section className="nss-gallery-section">

            <div className="gallery-heading">

              <div>
                <span>NSS IN ACTION</span>

                <h2>
                  Service beyond
                  <span> the campus.</span>
                </h2>
              </div>

              <p>
                NSS activities help students engage with society,
                communities and important social causes.
              </p>

            </div>

            <div className="nss-gallery">

              {gallery.map((item, index) => (
                <article
                  className={`gallery-card gallery-card-${index + 1}`}
                  key={item.image}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-overlay"></div>

                  <div className="gallery-caption">
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* =====================================================
              CAMP OBJECTIVE
          ===================================================== */}
          <section className="camp-section">

            <div className="camp-visual">

              <div className="camp-circle">
                <FiHeart />
              </div>

              <span>NSS CAMP</span>

              <strong>
                Awareness
                <br />
                Through Service
              </strong>

            </div>

            <div className="camp-content">

              <span>ANNUAL NSS CAMPS</span>

              <h2>
                Sensitizing communities,
                <span> empowering students.</span>
              </h2>

              <p>
                The objective of the camp is to bring awareness and to
                sensitize the people about social evils such as Dowry
                system, female feticide, AIDS, declining sex ratio and
                environmental issues.
              </p>

              <div className="camp-list">

                <div>
                  <FiCheckCircle />
                  <span>Community awareness</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Social responsibility</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Environmental awareness</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Women empowerment</span>
                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              OFFICIAL IMAGE
          ===================================================== */}
          <section className="official-reference">

            <div className="official-image">

              <img
                src="https://www.mkjkcollege.org/img/files/folder/MKJK%20Final%20PPT%20-Dr.%20Susheela%20290916.jpg"
                alt="MKJK NSS activity"
                loading="lazy"
              />

            </div>

            <div className="official-content">

              <span>MKJK NSS</span>

              <h2>
                Service,
                <span> participation and citizenship.</span>
              </h2>

              <p>
                NSS at MKJK provides students with opportunities to
                participate in camps, rallies, health programmes,
                environmental activities and rural outreach.
              </p>

              <a
                href="/contact"
                className="nss-contact-btn"
              >
                Contact College
                <FiArrowRight />
              </a>

            </div>

          </section>


          {/* =====================================================
              FINAL CTA
          ===================================================== */}
          <section className="nss-cta">

            <div className="cta-symbol">
              NSS
            </div>

            <div>
              <span>NATIONAL SERVICE SCHEME</span>

              <h2>
                Not Me But You.
              </h2>

              <p>
                Service to society is an important part of student life
                and responsible citizenship.
              </p>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}