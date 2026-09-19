import React from "react";
import PageHero from "../../../components/PageHero";
import "./IQACCommittee.css";

const committeeMembers = [
  {
    sr: "01",
    name: "Dr. Rashmi Lohchab",
    designation: "Principal",
    role: "Chairperson",
    highlight: true,
  },
  {
    sr: "02",
    name: "Mrs. Urmila Rathee",
    designation: "Librarian",
    role: "Coordinator - IQAC",
  },
  {
    sr: "03",
    name: "Sh. Rajesh Jain",
    designation: "Industrialist",
    role: "Member",
  },
  {
    sr: "04",
    name: "Dr. Santosh Mudgil",
    designation: "Principal (Retd), VAKM",
    role: "Stakeholder",
  },
  {
    sr: "05",
    name: "Dr. Sanket Vij",
    designation: "Dean, Faculty of Comm. & Mgmt",
    role: "Nominee from Local Society",
  },
  {
    sr: "06",
    name: "Sh. Sunit Mukherjee",
    designation: "Asstt. Prof. Dept. of Journalism",
    role: "Nominee from Local Society",
  },
  {
    sr: "07",
    name: "Ms. Parvesh",
    designation: "Social Worker",
    role: "Alumni",
  },
  {
    sr: "08",
    name: "Ms. Poonam",
    designation: "Social Worker",
    role: "Alumni",
  },
  {
    sr: "09",
    name: "Dr. Savita Malik",
    designation: "Associate Prof. & NSS Incharge",
    role: "Member Teacher",
  },
  {
    sr: "10",
    name: "Ms. Asha Kharb",
    designation: "Associate Prof.",
    role: "Member Teacher",
  },
  {
    sr: "11",
    name: "Dr. Seema",
    designation:
      "Associate Prof., Bursar, Nodal Officer RUSA, MIS Portal In charge",
    role: "Member Teacher",
  },
  {
    sr: "12",
    name: "Dr. Nisha Hooda",
    designation: "Associate Prof.",
    role: "Member Teacher",
  },
  {
    sr: "13",
    name: "Dr. Anita Chaudhary",
    designation: "Associate Professor",
    role: "Member Teacher",
  },
  {
    sr: "14",
    name: "Ms. Sofiya",
    designation: "Asstt. Prof., NSS Unit-I P.O.",
    role: "Member Teacher",
  },
  {
    sr: "15",
    name: "Dr. Deepika",
    designation: "Asstt. Prof., YRC Incharge",
    role: "Member Teacher",
  },
  {
    sr: "16",
    name: "Dr. Seema Dahiya",
    designation: "Asstt. Prof.",
    role: "Member Teacher",
  },
  {
    sr: "17",
    name: "Dr. Kusum Lata",
    designation: "Asstt. Prof.",
    role: "Member Teacher",
  },
  {
    sr: "18",
    name: "Ms. Jyoti",
    designation: "Administrative Officer",
    role: "Member Non-Teaching",
  },
  {
    sr: "19",
    name: "Sh. Bijender Singh",
    designation: "Administrative Officer",
    role: "Member Non-Teaching",
  },
  {
    sr: "20",
    name: "Ms. Tanisha",
    designation: "Student of B.A. 3rd year",
    role: "Member Student",
  },
  {
    sr: "21",
    name: "Ms. Naincy",
    designation: "B.Sc. (NM) 2nd year",
    role: "Member Student",
  },
];

export default function IQACCommittee() {
  return (
    <>
      <PageHero
        title="IQAC Committee"
        subtitle="The Internal Quality Assurance Cell and its institutional team."
      />

      <main className="inner-page page-scope-iqaccommittee">
        <div className="container">

          {/* =====================================================
              INTRODUCTION
          ====================================================== */}
          <section className="iqac-intro">

            <div className="iqac-intro-content">
              <span className="iqac-eyebrow">
                MKJK • INTERNAL QUALITY ASSURANCE CELL
              </span>

              <h1>
                IQAC
                <span> Committee</span>
              </h1>

              <p>
                The Internal Quality Assurance Cell works as an important
                institutional quality mechanism. The committee brings
                together academic leadership, teachers, non-teaching staff,
                students, alumni, local society and other stakeholders.
              </p>

              <div className="iqac-intro-points">

                <div className="iqac-point">
                  <span className="iqac-point-number">01</span>
                  <div>
                    <strong>Quality Assurance</strong>
                    <p>
                      Supporting institutional quality initiatives and
                      continuous improvement.
                    </p>
                  </div>
                </div>

                <div className="iqac-point">
                  <span className="iqac-point-number">02</span>
                  <div>
                    <strong>Academic Excellence</strong>
                    <p>
                      Promoting academic review, documentation and
                      improvement activities.
                    </p>
                  </div>
                </div>

                <div className="iqac-point">
                  <span className="iqac-point-number">03</span>
                  <div>
                    <strong>Stakeholder Participation</strong>
                    <p>
                      Representation from teachers, students, alumni and
                      the local community.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="iqac-emblem">

              <div className="iqac-emblem-ring">
                <span>IQAC</span>
              </div>

              <strong>Internal Quality</strong>
              <small>Assurance Cell</small>

              <div className="iqac-emblem-line"></div>

              <span className="iqac-emblem-college">
                M.K.J.K. MAHAVIDYALAYA
              </span>

            </div>

          </section>


          {/* =====================================================
              COMMITTEE HEADING
          ====================================================== */}
          <section className="iqac-section">

            <div className="iqac-section-heading">

              <div>
                <span className="iqac-eyebrow">
                  INSTITUTIONAL COMMITTEE
                </span>

                <h2>
                  IQAC Committee
                  <span> Members</span>
                </h2>

                <p>
                  The following members constitute the IQAC Committee as
                  provided by the institution.
                </p>
              </div>

              <div className="member-count">
                <strong>21</strong>
                <span>Members</span>
              </div>

            </div>


            {/* =================================================
                DESKTOP TABLE
            ================================================== */}
            <div className="iqac-table-wrap">

              <table className="iqac-table">

                <thead>
                  <tr>
                    <th className="col-number">Sr. No.</th>
                    <th className="col-name">Name</th>
                    <th className="col-designation">
                      Designation
                    </th>
                    <th className="col-role">
                      Role
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {committeeMembers.map((member) => (
                    <tr
                      key={member.sr}
                      className={
                        member.highlight
                          ? "chairperson-row"
                          : ""
                      }
                    >

                      <td>
                        <span className="iqac-sr">
                          {member.sr}
                        </span>
                      </td>

                      <td>
                        <div className="iqac-member-name">

                          {member.highlight && (
                            <span className="chair-icon">
                              ★
                            </span>
                          )}

                          <strong>
                            {member.name}
                          </strong>

                        </div>
                      </td>

                      <td>
                        <span className="iqac-designation">
                          {member.designation}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`iqac-role ${
                            member.highlight
                              ? "role-chairperson"
                              : ""
                          }`}
                        >
                          {member.role}
                        </span>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>


            {/* =================================================
                MOBILE CARDS
            ================================================== */}
            <div className="iqac-mobile-list">

              {committeeMembers.map((member) => (
                <article
                  className={`iqac-mobile-card ${
                    member.highlight
                      ? "mobile-chairperson"
                      : ""
                  }`}
                  key={member.sr}
                >

                  <div className="iqac-mobile-top">

                    <span className="iqac-sr">
                      {member.sr}
                    </span>

                    <span
                      className={`iqac-role ${
                        member.highlight
                          ? "role-chairperson"
                          : ""
                      }`}
                    >
                      {member.role}
                    </span>

                  </div>

                  <div className="iqac-mobile-name">

                    {member.highlight && (
                      <span className="mobile-star">
                        ★
                      </span>
                    )}

                    <h3>
                      {member.name}
                    </h3>

                  </div>

                  <p>
                    {member.designation}
                  </p>

                </article>
              ))}

            </div>

          </section>


          {/* =====================================================
              REPRESENTATION SUMMARY
          ====================================================== */}
          <section className="iqac-summary">

            <div className="iqac-summary-heading">
              <span className="iqac-eyebrow">
                COMMITTEE REPRESENTATION
              </span>

              <h2>
                A Diverse Institutional
                <span> Team</span>
              </h2>

              <p>
                The committee includes representation from different
                sections of the institution and its stakeholder community.
              </p>
            </div>


            <div className="iqac-summary-grid">

              <div className="summary-card">
                <div className="summary-icon">
                  T
                </div>

                <div>
                  <strong>Teachers</strong>
                  <span>
                    Academic representation
                  </span>
                </div>
              </div>


              <div className="summary-card">
                <div className="summary-icon">
                  S
                </div>

                <div>
                  <strong>Students</strong>
                  <span>
                    Student representation
                  </span>
                </div>
              </div>


              <div className="summary-card">
                <div className="summary-icon">
                  A
                </div>

                <div>
                  <strong>Alumni</strong>
                  <span>
                    Alumni representation
                  </span>
                </div>
              </div>


              <div className="summary-card">
                <div className="summary-icon">
                  N
                </div>

                <div>
                  <strong>Non-Teaching</strong>
                  <span>
                    Administrative representation
                  </span>
                </div>
              </div>


              <div className="summary-card">
                <div className="summary-icon">
                  L
                </div>

                <div>
                  <strong>Local Society</strong>
                  <span>
                    Community representation
                  </span>
                </div>
              </div>


              <div className="summary-card">
                <div className="summary-icon">
                  P
                </div>

                <div>
                  <strong>Leadership</strong>
                  <span>
                    Institutional leadership
                  </span>
                </div>
              </div>

            </div>

          </section>


          {/* =====================================================
              PRINCIPAL FOOTER
          ====================================================== */}
          <section className="iqac-principal">

            <div className="principal-seal">
              <span>MKJK</span>
            </div>

            <div className="principal-content">
              <span>Institutional Authority</span>

              <h3>
                Principal
              </h3>

              <p>
                M.K.J.K. Mahavidyalaya, Rohtak
              </p>
            </div>

            <div className="principal-line"></div>

            <div className="principal-note">
              <span>IQAC</span>
              <small>
                Internal Quality Assurance Cell
              </small>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}