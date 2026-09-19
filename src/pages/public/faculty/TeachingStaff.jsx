import React from "react";
import {
  FiUser,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiStar,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./TeachingStaff.css";

const grantInAid = [
  {
    name: "Dr. Savita Malik",
    designation: "Asso. Professor",
    subject: "Mathematics",
    qualification: "B.Ed., M.A., M.Phill, Ph.D.",
  },
  {
    name: "Dr. Rashmi Lohchab",
    designation: "Asso. Professor",
    subject: "English",
    qualification: "M.A., Ph.D.",
  },
  {
    name: "Ms. Asha Kharb",
    designation: "Asso. Professor",
    subject: "Home Science",
    qualification: "M.Sc.",
  },
  {
    name: "Dr. Seema",
    designation: "Asso. Professor",
    subject: "Economics",
    qualification: "M.A., M.Phill, Ph.D",
  },
  {
    name: "Dr. Anita Choudhary",
    designation: "Asso. Professor",
    subject: "Geography",
    qualification: "M.Ed., Ph.D.",
  },
  {
    name: "Ms. Urmila",
    designation: "Asso. Professor",
    subject: "Librarian",
    qualification: "M.A., M.Lib., M.Phil",
  },
  {
    name: "Dr. Nisha Hooda",
    designation: "Asso. Professor",
    subject: "Sanskrit",
    qualification: "M.A., M.Phill",
  },
  {
    name: "Ms. Neelam",
    designation: "Assist. Professor",
    subject: "English",
    qualification: "M.A., M.Phill",
  },
  {
    name: "Ms. Sofiya",
    designation: "Assist. Professor",
    subject: "English",
    qualification: "M.A. English, NET",
  },
];

const sfsTeaching = [
  {
    name: "Ms. Mukesh Goyat",
    designation: "Assist. Professor",
    subject: "Phy. Education",
    qualification: "M.A. Ph.D",
  },
  {
    name: "Ms. Kusum Lata",
    designation: "Assist. Professor",
    subject: "Phy. Education",
    qualification: "M.A. NET",
  },
  {
    name: "Dr. Anshu",
    designation: "Assist. Professor",
    subject: "Physics",
    qualification: "M.Sc. Ph.D",
  },
  {
    name: "Dr. Anita Gulia",
    designation: "Assist. Professor",
    subject: "Maths",
    qualification: "M.A. Ph.D",
  },
  {
    name: "Ms. Neeraj",
    designation: "Assist. Professor",
    subject: "Geography",
    qualification: "M.A. NET, M.Phil",
  },
  {
    name: "Ms. Deepika",
    designation: "Assist. Professor",
    subject: "Physics",
    qualification: "M.Sc. NET",
  },
  {
    name: "Ms. Suman",
    designation: "Assist. Professor",
    subject: "Physics",
    qualification: "M.Sc. NET",
  },
  {
    name: "Ms. Neelam Hooda",
    designation: "Assist. Professor",
    subject: "Fashion Designing",
    qualification: "M.Sc. In Fashion Technology",
  },
];

const guestFaculty = [
  {
    serial: 1,
    name: "Ms. Archana Rathee",
    designation: "Assist Professor",
    subject: "Political Science",
    qualification: "NET",
  },
  {
    serial: 5,
    name: "Ms. Neha",
    designation: "Assist. Professor",
    subject: "Maths",
    qualification: "M.Sc, NET",
  },
  {
    serial: 6,
    name: "Ms. Sushma",
    designation: "Assist. Professor",
    subject: "Physe",
    qualification: "M.Sc. B.Ed",
  },
  {
    serial: 7,
    name: "Ms. Aakanksha",
    designation: "Asstt. Professor",
    subject: "Botany",
    qualification: "M.Sc.NET",
  },
  {
    serial: 8,
    name: "Ms. Priyanka Saini",
    designation: "Associ. Professor",
    subject: "Zoology",
    qualification: "M.Sc.NET",
  },
  {
    serial: 13,
    name: "Ms. Sushma",
    designation: "Assist Professor",
    subject: "Chemistry",
    qualification: "M.Sc. NET",
  },
  {
    serial: 14,
    name: "Ms. Geeta",
    designation: "Assist Professor",
    subject: "Chemistry",
    qualification: "M.Sc. NET",
  },
  {
    serial: 17,
    name: "Dr. Krishma",
    designation: "Assist. Professor",
    subject: "English",
    qualification: "NET",
  },
  {
    serial: 19,
    name: "Ms. Rekha Narwal",
    designation: "Assist. Professor",
    subject: "Physical Edu.",
    qualification: "M.Ped. NET",
  },
  {
    serial: 20,
    name: "Ms. Manisha Hooda",
    designation: "Assist. Professor",
    subject: "Physical Edu.",
    qualification: "M. Phil Net.",
  },
  {
    serial: 21,
    name: "Ms. Manisha Saini",
    designation: "Assist. Professor",
    subject: "Physical Edu.",
    qualification: "M.P.Ed. Net",
  },
  {
    serial: 22,
    name: "Ms. Jyoti",
    designation: "Assist. Professor",
    subject: "Yoga Science",
    qualification: "M.A. Yoga Science, NET",
  },
  {
    serial: 23,
    name: "Ms. Sangeeta",
    designation: "Assist. Professor",
    subject: "Yoga Science",
    qualification: "M.A. Yoga Science, NET",
  },
  {
    serial: 24,
    name: "Ms. Rekha",
    designation: "Assist. Professor",
    subject: "Commerce",
    qualification: "M.Com. Net",
  },
  {
    serial: 25,
    name: "Ms. Jyoti",
    designation: "Assist. Professor",
    subject: "Commerce",
    qualification: "M.Com. Net",
  },
  {
    serial: 26,
    name: "Ms. Mona",
    designation: "Assist. Professor",
    subject: "Commerce",
    qualification: "M.Com. Net",
  },
  {
    serial: 28,
    name: "Ms. Chanderprabha",
    designation: "Assist Professor",
    subject: "Commerce",
    qualification: "M.Com NET",
  },
  {
    serial: 29,
    name: "Ms. Sarita",
    designation: "Assist Professor",
    subject: "Commerce",
    qualification: "M.Com NET",
  },
  {
    serial: 30,
    name: "Ms. Suprabha",
    designation: "Assist Professor",
    subject: "Commerce",
    qualification: "M.Com NET",
  },
];

const FacultyCard = ({ person, index, guest = false }) => {
  return (
    <article
      className="mkjk-faculty-item"
      style={{ "--delay": `${index * 70}ms` }}
    >
      <div className="mkjk-faculty-line"></div>

      <div className="mkjk-faculty-number">
        {guest && person.serial ? (
          String(person.serial).padStart(2, "0")
        ) : (
          String(index + 1).padStart(2, "0")
        )}
      </div>

      <div className="mkjk-faculty-icon">
        <FiUser />
      </div>

      <div className="mkjk-faculty-content">
        <div className="mkjk-faculty-top">
          <span className="mkjk-faculty-subject">
            <FiBookOpen />
            {person.subject}
          </span>

          <span className="mkjk-faculty-star">
            <FiStar />
          </span>
        </div>

        <h3>{person.name}</h3>

        <p className="mkjk-faculty-designation">
          {person.designation}
        </p>

        <div className="mkjk-faculty-qualification">
          <FiAward />
          <div>
            <small>QUALIFICATION</small>
            <strong>{person.qualification}</strong>
          </div>
        </div>
      </div>
    </article>
  );
};

const FacultySection = ({
  number,
  eyebrow,
  title,
  description,
  data,
  guest = false,
}) => {
  return (
    <section className="mkjk-faculty-section">
      <div className="mkjk-section-heading">
        <div className="mkjk-section-heading-left">
          <div className="mkjk-section-number">
            {number}
          </div>

          <div>
            <span>{eyebrow}</span>
            <h2>{title}</h2>
          </div>
        </div>

        <p>{description}</p>
      </div>

      <div className="mkjk-faculty-list">
        {data.map((person, index) => (
          <FacultyCard
            key={`${person.name}-${person.subject}-${index}`}
            person={person}
            index={index}
            guest={guest}
          />
        ))}
      </div>
    </section>
  );
};

export default function TeachingStaff() {
  const totalFaculty =
    grantInAid.length +
    sfsTeaching.length +
    guestFaculty.length;

  return (
    <>
      <PageHero
        title="Teaching Staff"
        subtitle="Meet our dedicated faculty members and academic professionals."
      />

      <main className="mkjk-teaching page-scope-teachingstaff">
        <div className="mkjk-teaching-container">

          {/* INTRO */}
          <div className="mkjk-teaching-intro">
            <div className="mkjk-intro-copy">
              <span className="mkjk-intro-label">
                <FiUsers />
                ACADEMIC FACULTY
              </span>

              <h1>
                Academic minds.
                <br />
                <em>Student-focused guidance.</em>
              </h1>

              <p>
                Our teaching staff brings together experienced
                educators and academic professionals from diverse
                disciplines, supporting students throughout their
                academic journey.
              </p>
            </div>

            <div className="mkjk-intro-stats">
              <div className="mkjk-stat-orbit"></div>

              <FiUsers />

              <strong>{totalFaculty}</strong>

              <span>Faculty Profiles</span>

              <small>
                Across different academic disciplines
              </small>
            </div>
          </div>

          {/* SECTIONS */}
          <FacultySection
            number="01"
            eyebrow="GRANT-IN-AID"
            title="Grant-in-Aid Teaching Staff"
            description="Experienced faculty members contributing to teaching, academic development and student guidance."
            data={grantInAid}
          />

          <FacultySection
            number="02"
            eyebrow="SFS REGULAR"
            title="Staff under SFS Regular Teaching"
            description="Faculty members serving across science, mathematics, geography, physical education and fashion technology."
            data={sfsTeaching}
          />

          <FacultySection
            number="03"
            eyebrow="GUEST FACULTY"
            title="Guest Faculty"
            description="Academic professionals associated with various departments and specialized subjects."
            data={guestFaculty}
            guest
          />

          {/* FOOTER NOTE */}
          <div className="mkjk-faculty-note">
            <div className="mkjk-note-icon">
              <FiAward />
            </div>

            <div>
              <strong>Academic Excellence</strong>
              <p>
                Faculty details and qualifications are presented
                according to the provided college staff listing.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}