import React from "react";
import {
  FiBriefcase,
  FiUsers,
  FiAward,
  FiHome,
  FiTool,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./NonTeachingStaff.css";

const grantInAid = [
  ["Ms. Vidyavati", "Steno Typist", "Matric"],
  ["Ms. Menka Malik", "Clerk", "JBT, M.A."],
  ["Ms. Jyoti", "Clerk", "B.Sc."],
  ["Ms. Savita", "Lab. Attendent", "B.A."],
  ["Ms. Sarita", "Lab. Attendent", "B.A., Diploma"],
  ["Ms. Kavita", "Lab. Attendent", "M.A., B.Ed., B.Lib"],
  ["Ms. Kamlesh", "Peon", "Under Matric"],
  ["Sh. Sandeep Kumar", "Chowkidar", "Senior Secondary"],
];

const regularSFS = [
  ["Ms. Kamlesh", "Clerk", "B.A., M.A."],
  ["Ms. Seema", "Receptionist", "B.A."],
  ["Ms. Kavita", "Store Keeper", "B.A."],
  ["Ms. Renu", "Store Keeper", "M.A."],
  ["Sh. Jai Bhagwan", "Chowkidar", "B.A."],
  ["Sh. Bheem Singh", "Chowkidar", "Matric"],
  ["Ms. Seema", "Lib. Attendent", "B.A."],
  ["Ms. Bishni", "Sweeper", "Illitrate"],
  ["Sh. Brijlal Sindhwani", "Accountant", "Retd from MDU"],
  ["Sh. Bijender Singh", "Steno Typist", "B.A., M.A. (English)"],
  ["Ms. Geeta", "Lect. Assistant", "M.A."],
  ["Ms. Sudesh", "Lect. Assistant", "10+2"],
  ["Ms. Sonia", "Lect. Assistant", "M.A."],
  ["Sh. Shakti", "Clerk", "M.A."],
  ["Ms. Punam", "Clerk", "B.A."],
  ["Sh. Satish", "Ground Man", "10th"],
  ["Sh. Rajesh", "Lab Attendent", "B.A."],
  ["Ms. Parveen", "Lab Attendent", "12th"],
];

const contractStaff = [
  ["Ms. Anita", "Hostel Attendent", "—"],
  ["Sh. Jitender", "Mali", "—"],
  ["Ms. Prem Lata", "Sweeper", "—"],
  ["Ms. Meena", "Sweeper", "—"],
  ["Ms. Sonu", "Sweeper", "—"],
];

const StaffSection = ({
  number,
  eyebrow,
  title,
  description,
  data,
  type,
  icon: SectionIcon,
}) => {
  return (
    <section className={`mkjk-non-section ${type}`}>
      <div className="mkjk-non-section-head">
        <div className="mkjk-non-section-title">
          <div className="mkjk-non-section-number">
            {number}
          </div>

          <div>
            <span>{eyebrow}</span>
            <h2>{title}</h2>
          </div>
        </div>

        <p>{description}</p>
      </div>

      <div className="mkjk-non-staff-list">
        {data.map(([name, designation, qualification], index) => (
          <article
            className="mkjk-non-staff-item"
            key={`${name}-${designation}-${index}`}
            style={{
              "--staff-delay": `${index * 55}ms`,
            }}
          >
            <div className="mkjk-non-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="mkjk-non-icon">
              <SectionIcon />
            </div>

            <div className="mkjk-non-content">
              <div className="mkjk-non-top">
                <span className="mkjk-non-type">
                  {type === "grant"
                    ? "GRANT-IN-AID"
                    : type === "sfs"
                    ? "REGULAR SFS"
                    : "CONTRACT"}
                </span>

                <span className="mkjk-non-role">
                  {designation}
                </span>
              </div>

              <h3>{name}</h3>

              <div className="mkjk-non-qualification">
                <FiAward />

                <div>
                  <small>QUALIFICATION</small>
                  <strong>{qualification}</strong>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default function NonTeachingStaff() {
  const totalStaff =
    grantInAid.length +
    regularSFS.length +
    contractStaff.length;

  return (
    <>
      <PageHero
        title="Non-Teaching Staff"
        subtitle="Administrative, technical and support staff directory."
      />

      <main className="mkjk-nonteaching page-scope-nonteachingstaff">
        <div className="mkjk-nonteaching-container">

          {/* INTRO */}
          <div className="mkjk-nonteaching-intro">
            <div className="mkjk-non-intro-copy">
              <span className="mkjk-non-intro-label">
                <FiUsers />
                CAMPUS SUPPORT TEAM
              </span>

              <h1>
                The people who
                <br />
                <em>keep the campus moving.</em>
              </h1>

              <p>
                Our non-teaching staff forms an essential part of
                the college community, supporting administration,
                laboratories, library services, campus operations
                and everyday student needs.
              </p>
            </div>

            <div className="mkjk-non-stat">
              <div className="mkjk-non-orbit"></div>

              <FiUsers />

              <strong>{totalStaff}</strong>

              <span>Staff Profiles</span>

              <small>
                Administrative &amp; support team
              </small>
            </div>
          </div>

          {/* GRANT IN AID */}
          <StaffSection
            number="01"
            eyebrow="GRANT-IN-AID"
            title="Non-Teaching Staff under Grant-in-Aid"
            description="Administrative and supporting staff working across the college's day-to-day academic and campus operations."
            data={grantInAid}
            type="grant"
            icon={FiBriefcase}
          />

          {/* SFS */}
          <StaffSection
            number="02"
            eyebrow="REGULAR SFS"
            title="Non-Teaching Staff Regular under SFS"
            description="Regular support staff serving in administration, library, stores, laboratories and campus services."
            data={regularSFS}
            type="sfs"
            icon={FiTool}
          />

          {/* CONTRACT */}
          <StaffSection
            number="03"
            eyebrow="CONTRACT BASIS"
            title="Non-Teaching Staff on Contract Basis"
            description="Contract staff supporting hostel, gardening and campus cleanliness services."
            data={contractStaff}
            type="contract"
            icon={FiHome}
          />

          {/* NOTE */}
          <div className="mkjk-non-note">
            <div className="mkjk-non-note-icon">
              <FiBriefcase />
            </div>

            <div>
              <strong>Campus Support</strong>
              <p>
                Every member of the non-teaching team contributes
                to a smooth, organized and student-friendly campus
                environment.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}