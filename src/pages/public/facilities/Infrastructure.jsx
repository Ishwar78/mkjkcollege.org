import React from "react";
import {
  FiBookOpen,
  FiHome,
  FiUsers,
  FiActivity,
  FiBarChart2,
  FiLayers,
  FiMonitor,
  FiGrid,
  FiAward,
  FiWifi,
  FiBriefcase,
  FiInfo,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./Infrastructure.css";

const rows = [
  [1, "Campus Area (in acres)", "11.28957"],
  [2, "Built Up Area (in sq m)", "7010.35"],
  [3, "Centralized Library", "01"],
  [4, "Multipurpose Hall", "01"],
  [5, "Seminar Room", "01"],
  [6, "Principal Office", "01"],
  [7, "Common Staff room", "01"],
  [8, "Departmental Staff room", "06"],
  [9, "Classrooms", "34"],
  [10, "Smart classrooms", "10"],
  [11, "Laboratories", "17"],
  [12, "Sports Grounds", "12"],
  [13, "Museum", "01"],
  [14, "Dark Room", "01"],
  [15, "Stores", "05"],
  [16, "Internet Facility", "Wi-Fi Campus"],
];

const teachingBlocks = [
  {
    title: "Administrative & Teaching Block",
    icon: <FiUsers />,
  },
  {
    title: "Science Block",
    icon: <FiActivity />,
  },
  {
    title: "Arts (UG & PG) Block",
    icon: <FiBookOpen />,
  },
  {
    title: "Commerce Block",
    icon: <FiBarChart2 />,
  },
  {
    title: "Physical Education Block",
    icon: <FiAward />,
  },
  {
    title: "Yoga Science Block",
    icon: <FiActivity />,
  },
];

const highlights = [
  {
    value: "11.28957",
    label: "Campus Area",
    sub: "in acres",
    icon: <FiGrid />,
    type: "orange",
  },
  {
    value: "34",
    label: "Classrooms",
    sub: "academic rooms",
    icon: <FiBookOpen />,
    type: "blue",
  },
  {
    value: "17",
    label: "Laboratories",
    sub: "learning facilities",
    icon: <FiActivity />,
    type: "red",
  },
  {
    value: "10",
    label: "Smart Classrooms",
    sub: "digital learning",
    icon: <FiMonitor />,
    type: "purple",
  },
];

function CampusDiagram() {
  return (
    <div className="mkjk-campus-diagram">

      <div className="mkjk-diagram-top">

        {/* TEACHING BLOCKS */}
        <div className="mkjk-diagram-group teaching-group">
          <div className="mkjk-diagram-main-title">
            <FiBookOpen />
            <span>Teaching Blocks</span>
          </div>

          <div className="mkjk-diagram-branch">
            {teachingBlocks.map((block, index) => (
              <div
                className="mkjk-diagram-node"
                key={block.title}
                style={{
                  "--diagram-delay": `${index * 100}ms`,
                }}
              >
                <span className="mkjk-node-icon">
                  {block.icon}
                </span>

                <span>{block.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HOSTEL */}
        <div className="mkjk-diagram-group hostel-group">
          <div className="mkjk-diagram-main-title hostel-title">
            <FiHome />
            <span>Hostels</span>
          </div>

          <div className="mkjk-hostel-branch">
            <div className="mkjk-hostel-node">
              <span className="mkjk-node-icon">
                <FiHome />
              </span>

              <span>
                Bhagwani Devi
                <small>(3 wings)</small>
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="mkjk-diagram-decoration dot-one"></div>
      <div className="mkjk-diagram-decoration dot-two"></div>
      <div className="mkjk-diagram-decoration circle-one"></div>

    </div>
  );
}

function HighlightCard({
  value,
  label,
  sub,
  icon,
  type,
}) {
  return (
    <div className={`mkjk-highlight-card ${type}`}>
      <div className="mkjk-highlight-icon">
        {icon}
      </div>

      <strong>{value}</strong>

      <span>{label}</span>

      <small>{sub}</small>
    </div>
  );
}

function InfrastructureTable({ data }) {
  return (
    <div className="mkjk-infrastructure-table-wrap">
      <table className="mkjk-infrastructure-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name of Items</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {data.map(([number, item, quantity]) => (
            <tr key={number}>
              <td>
                <span className="mkjk-table-number">
                  {number}
                </span>
              </td>

              <td>{item}</td>

              <td>
                <strong>{quantity}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Infrastructure() {
  return (
    <>
      <PageHero
        title="Infrastructure Facilities"
        subtitle="Campus infrastructure and learning resources."
      />

      <main className="mkjk-infrastructure page-scope-infrastructure">

        <div className="mkjk-infrastructure-container">

          {/* ==================================================
              MAIN HERO
          ================================================== */}

          <section className="mkjk-infra-hero">

            {/* LEFT */}
            <div className="mkjk-infra-campus">

              <div className="mkjk-section-label">
                <span></span>
                CAMPUS LAYOUT
              </div>

              <h1>
                Teaching Blocks
                <br />
                <em>&amp; Hostels</em>
              </h1>

              <p className="mkjk-infra-description">
                Our campus comprises well-structured teaching
                blocks across disciplines and separate hostel
                facilities for students, providing a safe and
                conducive learning environment.
              </p>

              <CampusDiagram />

              <div className="mkjk-reference-note">
                <FiInfo />

                <span>
                  Institutional infrastructure reference
                  supplied by user.
                </span>
              </div>

            </div>


            {/* RIGHT */}
            <div className="mkjk-infra-highlights">

              <div className="mkjk-section-label">
                <span></span>
                INFRASTRUCTURE HIGHLIGHTS
              </div>

              <h2>
                A Well-Structured Campus
                <br />
                <em>for Holistic Growth</em>
              </h2>

              <p>
                Our infrastructure supports academic excellence,
                research, extracurricular activities and overall
                personality development.
              </p>

              <div className="mkjk-highlights-grid">
                {highlights.map((item) => (
                  <HighlightCard
                    key={item.label}
                    {...item}
                  />
                ))}
              </div>

              <div className="mkjk-infra-quote">
                <span className="quote-mark">“</span>

                <div>
                  <strong>
                    Modern facilities for brighter futures.
                  </strong>

                  <small>
                    <b></b>
                    OUR COMMITMENT
                  </small>
                </div>
              </div>

            </div>

          </section>


          {/* ==================================================
              INFRASTRUCTURE DETAILS
          ================================================== */}

          <section className="mkjk-infra-details">

            <div className="mkjk-details-heading">

              <div className="mkjk-details-heading-icon">
                <FiLayers />
              </div>

              <div>
                <h2>Infrastructure Details</h2>

                <p>
                  Key facilities available on the campus.
                </p>
              </div>

            </div>

            <InfrastructureTable data={rows} />

          </section>


          {/* ==================================================
              BOTTOM SUMMARY
          ================================================== */}

          <section className="mkjk-infra-summary">

            <div className="mkjk-summary-item">
              <FiBriefcase />

              <div>
                <strong>34</strong>
                <span>Classrooms</span>
              </div>
            </div>

            <div className="mkjk-summary-item">
              <FiActivity />

              <div>
                <strong>17</strong>
                <span>Laboratories</span>
              </div>
            </div>

            <div className="mkjk-summary-item">
              <FiMonitor />

              <div>
                <strong>10</strong>
                <span>Smart Classrooms</span>
              </div>
            </div>

            <div className="mkjk-summary-item">
              <FiWifi />

              <div>
                <strong>Wi-Fi</strong>
                <span>Campus Connectivity</span>
              </div>
            </div>

          </section>

        </div>

      </main>
    </>
  );
}