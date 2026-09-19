import React from "react";
import PageHero from "../../../components/PageHero";
import "./OurPride.css";

const achievements = [
  {
    number: "01",
    icon: "🥇",
    title: "National Wrestling Championship",
    text: "In Wrestling Championship at National Level, Sudesh won Ist, Poonam 2nd, Kavita 3rd & Promila 3rd position.",
  },
  {
    number: "02",
    icon: "🏑",
    title: "Mamta Khrab – Golden Girl",
    text: 'Mamta Khrab, a distinguished player of Indian Hockey team, known as a "Golden Girl".',
  },
  {
    number: "03",
    icon: "🧘‍♀️",
    title: "International Yoga Championship",
    text: "Suman got 1st place in International Yoga Championship.",
  },
  {
    number: "04",
    icon: "🏅",
    title: "Asian Games & Doha",
    text: "Promila of B.A I in Kabaddi Team won gold medal in Asian Games and Doha. -2007-08",
  },
  {
    number: "05",
    icon: "🥉",
    title: "World Wrestling Championship",
    text: "Sudesh won bronze medal in World Wrestling Championship.",
  },
  {
    number: "06",
    icon: "🏆",
    title: "National Korball Event",
    text: "In korball, Neetu secured 1st position in National Event.",
  },
];

export default function OurPride() {
  return (
    <>
      <PageHero
        title="Our Pride"
        subtitle="Celebrating the achievements, excellence and accomplishments of our students."
      />

      <main className="our-pride-page">
        <div className="our-pride-container">

          {/* Intro */}
          <section className="our-pride-intro">
            <div className="intro-content">
              <span className="pride-eyebrow">
                MAHARANI KISHORI JAT KANYA MAHAVIDYALAYA
              </span>

              <h1>
                Our <span>Pride</span>
              </h1>

              <p>
                The achievements of our students are a reflection of the
                dedication, talent and excellence nurtured at Maharani Kishori
                Jat Kanya Mahavidyalaya. Our students have brought honour to
                the institution through their remarkable performances in
                sports and other competitive events.
              </p>
            </div>

            <div className="pride-badge">
              <div className="badge-icon">🏆</div>
              <strong>Excellence</strong>
              <span>Beyond Boundaries</span>
            </div>
          </section>

          {/* Section Heading */}
          <section className="pride-heading">
            <span>ACHIEVEMENTS</span>
            <h2>Celebrating Our Achievers</h2>
            <p>
              A glimpse of the accomplishments that have made MKJK proud.
            </p>
          </section>

          {/* Achievement Cards */}
          <section className="achievement-grid">
            {achievements.map((achievement) => (
              <article
                className="achievement-card"
                key={achievement.number}
              >
                <div className="achievement-top">
                  <div className="achievement-number">
                    {achievement.number}
                  </div>

                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                </div>

                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.text}</p>
                </div>

                <div className="achievement-line"></div>
              </article>
            ))}
          </section>

          {/* Bottom Highlight */}
          <section className="pride-highlight">
            <div className="highlight-icon">✦</div>

            <div>
              <span>OUR LEGACY OF EXCELLENCE</span>
              <h2>Achievement inspires achievement.</h2>
              <p>
                Every accomplishment of our students adds another proud
                chapter to the journey of MKJK Mahavidyalaya.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="pride-cta">
            <div>
              <span>MAHARANI KISHORI JAT KANYA MAHAVIDYALAYA</span>
              <h2>Be a part of our journey.</h2>
              <p>
                Discover academics, activities and opportunities available
                at our institution.
              </p>
            </div>

            <div className="cta-actions">
              <a href="/contact" className="pride-btn primary">
                Contact College <span>→</span>
              </a>

              <a
                href="/academics/courses-offered"
                className="pride-btn secondary"
              >
                Explore Programmes <span>→</span>
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}