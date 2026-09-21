import React from "react";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiChevronRight,
  FiCompass,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiWifi,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../../../components/PageHero";
import "./InstitutionalDevelopmentPlan.css";

export default function InstitutionalDevelopmentPlan() {
  const collegeImage = "/college.jpg";

  const officers = [
    {
      officer: "Dr. Rashmi Lochab",
      designation: "Principal (Officiating)",
      mobile: "8950815595",
      email: "mkjkmrt@gmail.com",
    },
    {
      officer: "Ms. Urmila Rathee",
      designation: "IQAC Coordinator / Librarian",
      mobile: "9215350095",
      email: "urmilrathee@gmail.com",
    },
    {
      officer: "Ms. Urmila Rathee",
      designation: "IDP Coordinator / Librarian",
      mobile: "9215350095",
      email: "urmilrathee@gmail.com",
    },
    {
      officer: "Ms. Asha Kharb",
      designation: "Bursar / Associate Prof.",
      mobile: "9416259549",
      email: "Ashakharb11@gmail.com",
    },
    {
      officer: "Dr. Deepika",
      designation: "Admission nodal Officer / Assistant Prof.",
      mobile: "9466425622",
      email: "deepikamoun@gmail.com",
    },
    {
      officer: "Dr. Rekha",
      designation: "Career Guidance & Placement Cell coordinator / Assistant Professor",
      mobile: "8684025257",
      email: "Rekhanehrai@gmail.com",
    },
  ];

  const committees = [
    "Academic Council",
    "Advisory Council",
    "IQAC",
    "Sports Committee",
    "NCC",
    "NSS",
    "Youth Red Cross Cell",
    "Women Cell",
    "Legal Literacy Cell",
    "Election Awareness Cell",
    "University Outreach Cell",
    "Creative Vision Society",
    "Science Society",
    "Grievance Redressal Committee",
    "Career Guidance & Placement Cell",
    "Election Awareness Cell",
    "College magazine (Mahila Manisha) Committee",
  ];

  const programmesLeft = [
    ["1", "B.A (Multidisciplinary)"],
    ["2", "B. Sc Physical Sciences"],
    ["3", "B. Sc Life Sciences"],
    ["4", "B.Com."],
    ["5", "B. Sc Sports"],
    ["6", "B.P. Ed"],
    ["7", "M.P. Ed"],
    ["8", "M.A English"],
    ["9", "M.A Geography"],
  ];

  const programmesRight = [
    ["10", "M.Com"],
    ["11", "M.A yoga Sc."],
    ["12", "P.G. D. Yoga Sc."],
    ["13", "M. Sc Maths"],
    ["14", "M. Sc Physics"],
    ["15", "M.A. Political Science"],
    ["16", "M. A. History"],
    ["17", "Diploma in Cutting-Tailoring and Surface Ornamentation"],
  ];

  const strengths = [
    "the strength of our institution is its committed management, well qualified and committed faculty members, dedicated administrative staff, natural and vast eco-friendly campus, good quality infrastructure, well equipped college library with INFLIBNET & DELNET database for e-resources, smart class rooms, well equipped labs, facility for scanning, printing and copying, good academic ambience and enthusiastic students.",
    "Good sports infrastructure. The college has always been in frontline in sports activities winning general trophy of M.D.U for the last twenty years.",
    "Wi-fi campus",
    "Special emphasis on well being of mental health by organizing meditation and stress management sessions.",
    "In a short span of time the college is offering various U.G., P.G. and professional courses. Good teacher-taught ratio and personal interaction between student and teacher is the distinguished feature of the institution.",
    "The college has set up the tradition of organizing many National/ State Level UGC and DHE sponsored Seminars, Workshops and Conferences. Eminent Key Note speakers, researchers and other renowned persons visit the institution and interact with the faculty and students and delegates.",
    "The college also encourages its faculty members to participate in various seminars, workshops and other research activities organized by other institutions and organizations.",
    "The college has sustained legacy of academic excellence, sports and rich cultural activities. Outstanding achievement of the alumnae like Shakshi Malik, Mamta Kharb and many International Players are the testimony of this fact.",
  ];

  const opportunities = [
    "We have already submitted proposals for more academic and career oriented programmes. College is gifted with invaluable gift of Ch. Raghuvendra Singh Science Block by DLF Charitable Educational Trust. We hope to elicit more funding from different funding agencies for the above said proposals.",
    "We also hope that our national and international players will bring more laurels to the institution.",
    "Being a women college, we will try to get more funding from the State Govt. and U.G.C. for programs meant especially for women.",
    "The college will continue to focus on skill enhancement courses for capacity building. The college will create an opportunity to strengthen waste management initiative and programs; this will contribute towards community consciousness.",
    "The Institute is enhancing the use of renewable solar energy.",
    "The college will strengthen its career counseling & Placement cell for increased employability.",
    "NEP-2020 is an opportunity to take more initiative for skill development courses.",
  ];

  const challenges = [
    "We need to assure better financial assistance for successful completion of our ongoing projects. Improving academic milieu, extension and research activities are few of the challenges.",
    "The Govt. of Haryana has opened up many other institutions in our previous catching areas, due to which there is declining intake of students. To increase this intake and to improve teaching learning techniques etc. are challenges for the institution.",
    "Full potential of alumni is yet to be tapped.",
    "Career concerns, peer pressure, parent’s pressure, socio-economic backwardness of some of the areas from which students come are some challenges.",
  ];

  const governancePlans = [
    "More involvement of advisory committee and IQAC for implementation of quality initiatives for the development of the Institution.",
    "To make intensive efforts to involve the alumni ( The Kishorians Alumni Association) in the institutional activities.",
    "More involvement of the students and staff in various programs as a leader to inculcate the leadership skills to tackle the challenges and uncertainties in their life.",
  ];

  const visionFuturePlans = [
    "Enhancement of capacity building by organizing skill development programs to enhance employability.",
    "Awareness program on Indian Knowledge system as per NEP 2020.",
    "User education program for more use of e-resources and digital learning.",
    "Faculty development program for teaching and non teaching staff.",
    "Encouraging students for internship.",
    "Strengthen the alumnae network to provide internship opportunities and career guidance to the students.",
    "More awareness programs to sensitize students on environmental issues.",
    "More programs on ethical and moral values to sensitize students for socio-cultural issues in society, programs for communication skills, yoga camps, mental health and stress management for holistic development of the students.",
  ];

  const financialPlans = [
    "The college will approach to more philanthropists, for more donation for its upcoming projects and various industries, agencies and state and central govt.",
  ];

  const leadershipPlans = [
    "More active participation of the students in organizing activities through various cells and committees. Their contribution will be acknowledged by giving appreciation certificate.",
  ];

  const riskPlans = [
    "The college is planning for a group insurance for staff members.",
    "More training programs will be organized to manage any causality and eventuality.",
    "Safety and security measures will be insured.",
  ];

  const feedbackPoints = [
    "Student’s feedback is taken regularly on early basis, analyzed and actions are taken on observations.",
    "The Institute has a mechanism for performance appraisal system for teaching and non-teaching staff. The Principal verifies it and forwards to the President, Jat Education Society.",
    "Performance of the teachers is also assessed through student satisfactory surveys.",
  ];

  const academicPoints = [
    "The College has many UG and PG programs catering to the diverse needs and choices of the students.",
    "To address the future needs, the college has adopted NEP 2020 and a variety of courses has been introduced such as MDC, SEC, VAC and AEC across all programs.",
    "Annual academic and co-curricular activity calendar is prepared and adheres to it during the session.",
    "Lesson plans are prepared in advance for each academic year.",
    "The college adheres to the curriculum prescribed by MDU Rohtak. However the college focuses to inculcate basic skills important for increasing the employment avenues and readiness by organizing various programs like extension lectures and workshops for capacity building and enhancement of employability skills.",
    "The college has 10 smart class rooms with ICT facility.",
    "To assess and evaluate students for internal assessment, debates, presentations, competitions are organized.",
    "The college has been running Add-on courses in Fine Arts and Apparel & Dress designing and cutting tailoring and surface ornamentation. Many of the students are earning by self employment.",
    "The college library is fully computerized and subscribes many print, e-journals and membership of INFLIBNET and DELNET. New editions of books are added to the library collection every year.",
  ];

  const academicFuturePlans = [
    "More programs to be organized to enhance employability skills as per industries requirements.",
    "Strengthen student support services such as counselling, tutoring, and career guidance and ensure holistic development of the students.",
    "Short term courses as per requirement of the job market.",
    "More conducive learning environment through group discussions and joints assignments/projects.",
    "Encourage students to work together, share ideas and learn from each other’s perspectives.",
    "Provide more opportunities for students to engage in debates, case studies and problem solving activities to develop their analytical abilities.",
    "Faculty members to be encouraged to attend more seminar, conferences, and workshops for regular updating of knowledge.",
    "More Faculty Development Program to learn new pedagogy of learning and teaching in their respective subjects.",
    "Training sessions for teaching and non teaching staff to use technology in teaching learning and administrative work.",
    "Purchase of more books for library and subscription to e-resources.",
    "More smart classrooms with ICT facility.",
  ];

  const researchPoints = [
    "To increase intake of students in research based curriculum in UG and PG program as per NEP 2020.",
    "Encourage faculty members to write more research papers.",
    "Encourage faculty members to present more papers in conferences and seminars.",
    "Organize more seminars and workshops on Intellectual Property Rights, copyrights and Plagiarism.",
    "Encourage faculty members to apply for minor and major research projects to Government department, ministries and other agencies.",
    "To felicitate faculty members with duty leave for presenting papers in conferences and seminar.",
    "To organize more FDP in new research tools, technology and methodology.",
    "To increase experiencing and experimental learning by organizing educational tour and working in and with community for societal issues, environmental issues etc.",
  ];

  const studentFuturePlans = [
    "Enhance the scholarship system to ensure financial aid for deserving students.",
    "Strengthen the alumnae network to provide mentorship, internship opportunities, and career guidance.",
    "Enhance wellness support services by organizing more health camps, counselling sessions and recreational activities.",
    "Organize more workshops/training programs for skill development such as digital learning, communication skills etc.",
    "More programs to be organized on moral values, constitutional values and ethics for students to make them better citizens.",
    "Invite and visit to entrepreneurs to instill the students for startup their own ventures.",
  ];

  const staffPoints = [
    "Staff recruitments are made as per UGC qualifications, norms of State Govt.",
    "Appointments are made in a very transparent manner by duly constituted committee comprising of University Nominee, DGHE Nominee, Governing body Nominee, Subject Expert and the Principal.",
    "There is a mechanism for appraisal through ACR of teaching and non-teaching staff members.",
    "FDPs are organized by the Institute from time to time for professional growth of the faculty.",
    "Training workshops in advance computing are organized by non-teaching staff.",
    "Staff well being programs are organized such as yoga day, meditation sessions, recreational program like traditional festivals “Teej, Holi, Diwali etc. are celebrated.",
    "Handbook of values and ethics has been prepared by the Institution to guide the behavior and decisions of all stakeholders.",
    "Interactive communication system has been built through what’s app groups and holding the meetings from time to time.",
  ];

  const staffFuturePlans = [
    "Encouragement of staff for achieving proficiency in task and role given to them by appreciation letters.",
    "Induction programs to be organized for newly recruited staff regarding institutional mission and vision, institutional values and strategies to achieve the desired goals.",
    "Skill Development Training/ Workshop in Information & Technology both for teaching & non-teaching faculty.",
  ];

  const networkingPlans = [
    "Increase outreach initiative through community services.",
    "Collaboration with NGOs.",
    "MOUs to be signed with industries.",
    "Organize workshops, seminars and awareness campaigns to promote civic engagement, environmental protection.",
    "More Alumni connect.",
    "For quality assurance the college plans to go through NAAC in 3rd cycle of accreditation process with new binary framework of accreditation.",
  ];

  const physicalPoints = [
    "The Institute has good infrastructure providing academic, sports, co-curricular and mental and physical well being facilities to fulfil the needs and aspirations of its students and staff.",
    "Lush green campus with solar plants and rainwater harvesting system.",
    "Wi-Fi campus with 100mbps internet connection.",
    "Spacious and rich library with print and e resources.",
    "Safe and secure campus with surveillance cameras in college and hostel.",
    "10 smart class rooms with ICT facility.",
    "Digital Notice board.",
    "Seminar hall with interactive panel.",
    "20 labs for various subjects having all tools and equipment.",
    "Well equipped computer lab.",
    "Hostel facility.",
    "Naturopathy labs.",
    "Gymnasium hall.",
    "Multipurpose hall.",
    "Huge Sports ground.",
    "Cafeteria.",
  ];

  const physicalFuturePlans = [
    "More smart classrooms",
    "Bio-waste pit for making manure for plants.",
    "Maximum Plantation of trees.",
    "IT Up-gradation and furnishing of clerical office.",
    "Botanical Park",
  ];

  const digitalPoints = [
    "The college has Wi-Fi campus with 100mbps internet connection.",
    "For providing institutional information to the public and other stake holders the college has a website, mkjkcollege.org.",
    "Social media like Facebook and Instagram accounts.",
    "Automated library with INFLIBNET and DELNET facilities for e-resources.",
    "ERP portal for academic and administrative purpose.",
  ];

  const digitalFuturePlans = [
    "To make available college magazine on the website.",
    "Working towards paperless system for office and administrative work.",
  ];

  return (
    <>
      <PageHero
        title="Institutional Development Plan"
        subtitle="Institutional Development Plan 2025–30"
      />

      <main className="inner-page page-scope-institutionaldevelopmentplan">
        <div className="idp-container">

          {/* =====================================================
              TOP COLLEGE INTRO
          ====================================================== */}
          <section className="idp-cover">

            <div className="idp-cover-content">
              <span className="idp-mini-label">
                MAHARANI KISHORI JAT KANYA MAHAVIDYALAYA
              </span>

              <h1>
                Institutional
                <span> Development Plan</span>
              </h1>

              <div className="idp-year">
                2025–30
              </div>

              <p>
                A strategic framework for institutional growth,
                academic development, student support, research,
                infrastructure and community engagement.
              </p>
            </div>

            <div className="idp-cover-image">
              <img
                src={collegeImage}
                alt="Maharani Kishori Jat Kanya Mahavidyalaya, Rohtak"
              />

              <div className="idp-image-caption">
                <strong>
                  Maharani Kishori Jat Kanya Mahavidyalaya
                </strong>
                <span>Rohtak, Haryana</span>
              </div>
            </div>

          </section>

          {/* =====================================================
              QUICK INFO
          ====================================================== */}
          <section className="idp-info-section">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  INSTITUTION PROFILE
                </span>

                <h2>
                  Basic Information
                  <span> of the College</span>
                </h2>
              </div>

              <div className="idp-heading-icon">
                <FiBookOpen />
              </div>
            </div>

            <div className="idp-info-grid">

              <div className="idp-info-card">
                <span>Name of the College</span>
                <strong>
                  Maharani Kishori Jat Kanya Mahavidyalaya Rohtak
                </strong>
              </div>

              <div className="idp-info-card">
                <span>Type of Institution</span>
                <strong>Aided</strong>
              </div>

              <div className="idp-info-card">
                <span>Category</span>
                <strong>Girls’ College</strong>
              </div>

              <div className="idp-info-card">
                <span>Location</span>
                <strong>Urban</strong>
              </div>

              <div className="idp-info-card">
                <span>Address</span>
                <strong>Delhi Road Rohtak-124001</strong>
              </div>

              <div className="idp-info-card">
                <span>Website Address</span>
                <strong>mkjkcollege.org</strong>
              </div>

              <div className="idp-info-card">
                <span>E-mail ID</span>
                <strong>mkjkmrt@gmail.com</strong>
              </div>

              <div className="idp-info-card">
                <span>Year of establishment</span>
                <strong>1988</strong>
              </div>

              <div className="idp-info-card">
                <span>Affiliated University</span>
                <strong>Maharshi Dayanand University Rohtak</strong>
              </div>

              <div className="idp-info-card">
                <span>UGC affiliation</span>
                <strong>12B and 2F</strong>
              </div>

            </div>
          </section>

          {/* =====================================================
              ESTABLISHMENT
          ====================================================== */}
          <section className="idp-establishment">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  ESTABLISHMENT
                </span>

                <h2>
                  Establishment &
                  <span> Affiliation</span>
                </h2>
              </div>
            </div>

            <div className="idp-establishment-grid">

              <div className="idp-establishment-card">
                <FiCalendarIcon />
                <small>Year of establishment</small>
                <strong>1988</strong>
              </div>

              <div className="idp-establishment-card">
                <FiAward />
                <small>Affiliated University</small>
                <strong>
                  Maharshi Dayanand University Rohtak
                </strong>
              </div>

              <div className="idp-establishment-card">
                <FiCheckCircle />
                <small>UGC affiliation</small>
                <strong>12B and 2F</strong>
              </div>

            </div>
          </section>

          {/* =====================================================
              OFFICERS
          ====================================================== */}
          <section className="idp-officers-section">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  INSTITUTIONAL CONTACTS
                </span>

                <h2>
                  Head & Nodal
                  <span> Officers</span>
                </h2>
              </div>
            </div>

            <div className="idp-table-wrapper">
              <table className="idp-table">
                <thead>
                  <tr>
                    <th>Head and nodal officers of the Institution</th>
                    <th>Name and Designation</th>
                    <th>Mobile no.</th>
                    <th>e-mail address</th>
                  </tr>
                </thead>

                <tbody>
                  {officers.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{item.officer}</strong>
                      </td>
                      <td>{item.designation}</td>
                      <td>{item.mobile}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* =====================================================
              ABOUT COLLEGE
          ====================================================== */}
          <section className="idp-text-section">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  ABOUT THE INSTITUTION
                </span>

                <h2>
                  About the
                  <span> College</span>
                </h2>
              </div>
            </div>

            <div className="idp-text-card">

              <p>
                Maharani Kishori Jat Kanya Mahavidyalya, Rohtak was
                established in 1988 managed under Jat Education
                Society by then President Ch. Uday Singh Mann,
                after the name of legendary Maharani Kishori,
                Queen of Maharaja Surajmal, the Jat Emperor of Delhi.
              </p>

              <p>
                Maharani Kishori who has become an icon of valour
                and grit, a symbol of indomitable courage and
                undaunted spirit in hour of crisis. The founders of
                Maharani Kishori Jat Kanya Mahavidyalaya wished to
                inculcate the virtues of courage and confidence in
                all rural girls. Since then Maharani Kishori Jat
                Kanya Mahavidyalaya has been accomplishing the
                missionary task of imparting the light of knowledge
                to this deprived section of society primarily to the
                rural girls of Haryana with a commitment to convert
                this weaker section of society into the strength of
                the nation by enabling them to discover their
                inherent potential and innate qualities and
                instilling in them a passion for lifelong learning.
              </p>

              <p>
                The main objective of the college is to groom young
                talents into skilled knowledgeable and capacitated
                women with commitment, confidence and competence
                will exhibit the highest standards of ethical
                behaviours in every walk of life and turn every
                difficulty into an opportunity to move ahead
                towards perfection. All activities connected with
                the college are consciously correlated to our
                collective aim of producing empowered women fully
                endowed materially and intellectually. The very
                motto of the college Arise, Awake and Achieve
                implies a journey from the dark labyrinths of
                ignorance to the luminous vistas of knowledge.
              </p>

              <p>
                The college was accredited with ‘A’ grade by NAAC
                and was able to fetch RUSA grant of Rs. 2 cores.
                Over the years the college has evolved to a brand
                of Female education. It has achieved laurels in
                the field of sports. Many International
                achievements by our students are the testimony in
                the sphere of sports. The Institute has been
                rewarded with overall trophy of MDU Rohtak since
                last 22 years continuously. It has various
                following cells through which many extension and
                outreach programs are conducted regarding various
                socio-cultural cause.
              </p>

            </div>
          </section>

          {/* =====================================================
              COMMITTEES
          ====================================================== */}
          <section className="idp-committee-section">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  INSTITUTIONAL STRUCTURE
                </span>

                <h2>
                  Committees &
                  <span> Cells</span>
                </h2>
              </div>
            </div>

            <div className="idp-committee-grid">

              {committees.map((item, index) => (
                <div className="idp-committee-item" key={index}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item}</strong>

                  <FiChevronRight />
                </div>
              ))}

            </div>

          </section>

          {/* =====================================================
              PROGRAMMES
          ====================================================== */}
          <section className="idp-programmes-section">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  ACADEMIC OFFERINGS
                </span>

                <h2>
                  Programmes
                  <span> Offered</span>
                </h2>
              </div>

              <div className="idp-heading-icon">
                <FiLayers />
              </div>
            </div>

            <div className="idp-programme-table-wrap">
              <table className="idp-table idp-programme-table">

                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Program Name</th>
                    <th>Sr. No.</th>
                    <th>Program Name</th>
                  </tr>
                </thead>

                <tbody>
                  {Array.from({
                    length: Math.max(
                      programmesLeft.length,
                      programmesRight.length
                    ),
                  }).map((_, index) => (
                    <tr key={index}>
                      <td>
                        {programmesLeft[index]?.[0] || ""}
                      </td>

                      <td>
                        {programmesLeft[index]?.[1] || ""}
                      </td>

                      <td>
                        {programmesRight[index]?.[0] || ""}
                      </td>

                      <td>
                        {programmesRight[index]?.[1] || ""}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            <div className="idp-note-box">
              <strong>Note:</strong>
              {" "}
              The College has got approval for five new programs
              by DGHE and are in pipeline for approval of MDU
              Rohtak to be started in the coming session 2025-26.
            </div>

          </section>

          {/* =====================================================
              VISION & MISSION
          ====================================================== */}
          <section className="idp-vision-section">

            <div className="idp-vision-grid">

              <div className="idp-vision-card">
                <div className="idp-big-icon">
                  <FiCompass />
                </div>

                <span>OUR VISION</span>

                <h3>
                  Arise, Awake and Know Thyself
                </h3>

                <p>
                  i.e. an effort to ignite the mind of students by
                  providing them intellectual and moral leadership
                  and taking them out of the dark labyrinths of
                  ignorance to new luminous zones of knowledge
                  where they break open the worn out shackles of
                  caste, creed and culture, and imbibe a new
                  religion of humanity while spreading their wings
                  in the new horizon of progress, peace and
                  prosperity.
                </p>
              </div>

              <div className="idp-vision-card idp-mission-card">
                <div className="idp-big-icon">
                  <FiTarget />
                </div>

                <span>OUR MISSION</span>

                <h3>
                  Empowering women through quality education
                </h3>

                <p>
                  To make a profound difference in the lives of
                  women by empowering them to attain their full
                  potential through pursuit of knowledge,
                  development of character, self-esteem,
                  recognition of their rights and responsibilities.
                  Our institution provides multi-dimensional
                  quality education to the students, so to make
                  them morally mature, socially sensitive, and
                  professionally competent, research oriented and
                  dynamic human beings capable to evaluate various
                  paradigms of life with a new broad and human
                  perspective.
                </p>
              </div>

            </div>

          </section>

          {/* =====================================================
              SWOT
          ====================================================== */}
          <section className="idp-swot-section">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  STRATEGIC ANALYSIS
                </span>

                <h2>
                  SWOT Analysis
                  <span> of the Institute</span>
                </h2>
              </div>
            </div>

            <div className="idp-swot-grid">

              <div className="idp-swot-card strength">
                <div className="idp-swot-head">
                  <span>S</span>

                  <div>
                    <small>SWOT</small>
                    <h3>Strength</h3>
                  </div>
                </div>

                <ul>
                  {strengths.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="idp-swot-card weakness">
                <div className="idp-swot-head">
                  <span>W</span>

                  <div>
                    <small>SWOT</small>
                    <h3>Weakness</h3>
                  </div>
                </div>

                <ul>
                  <li>
                    The weak points of our institution lies in the
                    fact that the faculty for Commerce, B.Sc.
                    (Physical Science and Life Sciences), B.P. Ed,
                    M.A. English, Geography, History, Political Sc.
                    M.P.Ed. and Yoga Science is are under Self-Finance
                    Scheme. Moreover many of the grant-in-aid posts
                    are vacant.
                  </li>

                  <li>
                    Another weakness of the institution is lack of
                    transportation facility.
                  </li>

                  <li>
                    Although we have a vast infrastructure yet more
                    infrastructures needed i.e. auditorium.
                  </li>
                </ul>
              </div>

              <div className="idp-swot-card opportunity">
                <div className="idp-swot-head">
                  <span>O</span>

                  <div>
                    <small>SWOT</small>
                    <h3>Opportunities</h3>
                  </div>
                </div>

                <ul>
                  {opportunities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="idp-swot-card challenge">
                <div className="idp-swot-head">
                  <span>T</span>

                  <div>
                    <small>SWOT</small>
                    <h3>Challenges</h3>
                  </div>
                </div>

                <ul>
                  {challenges.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          {/* =====================================================
              DEVELOPMENT ENABLERS
          ====================================================== */}
          <section className="idp-enablers">

            <div className="idp-section-heading">
              <div>
                <span className="idp-kicker">
                  DEVELOPMENT FRAMEWORK
                </span>

                <h2>
                  Institutional
                  <span> Enablers</span>
                </h2>
              </div>
            </div>

            {/* A */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                A
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiUsers />
                  <h3>Governance Enablers</h3>
                </div>

                <div className="idp-content-block">

                  <h4>
                    1. Board of Governing Body
                  </h4>

                  <p>
                    Maharani Kishori Jast Kanya Mahavidyalaya
                    Rohtak is governed by Jat Education Society
                    (Regd.) Rohtak, DGHE Haryana and affiliated to
                    DU Rohtak. Governing body of the Institution
                    works in align with the Head of the Institution
                    providing with full autonomy to take decision
                    in the matter of development of the college.
                    The management works in a balance system of
                    belief and control as well. The college forms
                    many committees, cells and councils and
                    functions through decentralized and
                    participative management culture.
                  </p>

                  <h4 className="idp-future-title">
                    Future Plans
                  </h4>

                  <PlanList items={governancePlans} />

                </div>

                <div className="idp-content-block">

                  <h4>
                    2. Quality education through Institutional
                    Vision and Mission
                  </h4>

                  <p>
                    As the Vision of the Institute is Arise,
                    Awake and Know Thyself and the mission of the
                    college is to make a profound difference in
                    the lives of women by empowering them to attain
                    their full potential through pursuit of
                    knowledge, development of character, self-esteem,
                    recognition of their rights and responsibilities.
                    The IQAC of the college works to ensure holistic
                    development of the college and improvement of
                    the quality of education. It works to instill
                    the ethical and moral values in the students by
                    organizing many extension lectures workshops
                    and seminars, by visiting orphans home and
                    old-age home etc. It works on the aspects such
                    as student feedback system, faculty development
                    to maintain quality standard in the institution.
                  </p>

                  <h4 className="idp-future-title">
                    Future Plans
                  </h4>

                  <PlanList items={visionFuturePlans} />

                </div>

                <div className="idp-content-block">

                  <h4>
                    3. Financial autonomy
                  </h4>

                  <p>
                    The Institute receives salary grant for its
                    aided staff only. The resources for revenue are
                    hostel and self financing courses. The college
                    has received donation of Rs. 4 crores from DLF
                    and a state of art science block building has
                    been constructed with this. The college has
                    also received RUSA grant of 2 crores for hostel
                    building and infrastructure development.
                  </p>

                  <h4 className="idp-future-title">
                    Future plans
                  </h4>

                  <PlanList items={financialPlans} />

                </div>

                <div className="idp-content-block">

                  <h4>
                    4. Leadership
                  </h4>

                  <p>
                    The Institution has formed various committees,
                    cells, councils and societies and functions in
                    decentralized and participative manner.
                  </p>

                  <h4 className="idp-future-title">
                    Future Plan
                  </h4>

                  <PlanList items={leadershipPlans} />

                </div>

                <div className="idp-content-block">

                  <h4>
                    5. Risk Management
                  </h4>

                  <p>
                    The Institute has every safety measures,
                    security measures. The building is constructed
                    according to norms of PWD and State Govt.
                    Surveillance system is managed by installing
                    high quality cameras. Many activities to train
                    in disaster management, environmental hazards,
                    and awareness programs about climate change
                    etc. are organized in collaboration with
                    District administration and experts.
                  </p>

                  <h4 className="idp-future-title">
                    Future Plans
                  </h4>

                  <PlanList items={riskPlans} />

                </div>

                <div className="idp-content-block">

                  <h4>
                    6. Feedback
                  </h4>

                  <PlanList items={feedbackPoints} />

                  <p>
                    <strong>Future plans:</strong> To take feedback
                    from all stake holders, parents and alumni.
                  </p>

                </div>

              </div>
            </article>

            {/* B */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                B
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiBriefcase />
                  <h3>
                    Financial enablers and resource mobilization
                  </h3>
                </div>

                <p>
                  The college has a mechanism to allocate need
                  based funds for recurring and non recurring
                  expenditure according to revenue. All the
                  purchases are made through designated committee
                  in a very transparent manner after permission of
                  the Principal and the President and subsequently
                  checked and verified by the college Bursar. All
                  accounts of the college are properly audited. The
                  college runs in dual mode, grant-in aid and self
                  finance. The main source of funds apart from the
                  Govt. is non Govt. organization, management,
                  philanthropists. All records, utilization of
                  grants are properly maintained. All measures are
                  taken for optimal utilization of resources.
                </p>

                <div className="idp-future-strip">
                  <strong>Future Plans:</strong>
                  <span>
                    More liaisons with central Govt., State Govt.,
                    ministries, and other funding agencies for
                    financial assistance.
                  </span>
                </div>

              </div>
            </article>

            {/* C */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                C
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiBookOpen />
                  <h3>Academic Enablers</h3>
                </div>

                <PlanList items={academicPoints} />

                <h4 className="idp-future-title">
                  Future Plans
                </h4>

                <PlanList items={academicFuturePlans} />

              </div>
            </article>

            {/* D */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                D
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiTrendingUp />
                  <h3>
                    Research and Intellectual Property Enablers
                  </h3>
                </div>

                <PlanList items={researchPoints} />

              </div>
            </article>

            {/* E */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                E
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiUsers />
                  <h3>
                    Human Resource Enablers and supportive
                    facilitative Enablers
                  </h3>
                </div>

                <div className="idp-sub-heading">
                  Students and learners enablers
                </div>

                <p>
                  Student Admissions in the college are made
                  centralized by DGHE. The college follows the
                  process, rule and regulations of DGHE, Govt. of
                  Haryana and MDU Rohtak.
                </p>

                <p>
                  Govt. of Haryana offers many scholarships for
                  economically weaker section, meritorious student
                  and sports persons. The Institute also provides
                  financial assistance to the needy students, good
                  sports persons as fee concession and free
                  accommodation in hostel.
                </p>

                <h4 className="idp-future-title">
                  Future plans
                </h4>

                <PlanList items={studentFuturePlans} />

                <div className="idp-sub-heading">
                  Staff Enablers
                </div>

                <PlanList items={staffPoints} />

                <h4 className="idp-future-title">
                  Future Plans
                </h4>

                <PlanList items={staffFuturePlans} />

              </div>
            </article>

            {/* F */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                F
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiGlobe />
                  <h3>
                    Networking and collaborations enablers
                  </h3>
                </div>

                <p>
                  The College has various cells like NSS, NCC,
                  Social Outreach through, Women Cell, Legal
                  Literacy Cells etc. through which many extension
                  activities are carried out in collaboration with
                  rural and urban communities for benefit of the
                  society and to sensitize students regarding social
                  and environmental issues. The college has adopted
                  nearby village Khedi Sadh in which our NSS units
                  conduct sensitization/awareness programs.
                </p>

                <h4 className="idp-future-title">
                  Future Plans
                </h4>

                <PlanList items={networkingPlans} />

              </div>
            </article>

            {/* G */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                G
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiLayers />
                  <h3>Physical enablers</h3>
                </div>

                <PlanList items={physicalPoints} />

                <h4 className="idp-future-title">
                  Future Plans
                </h4>

                <PlanList items={physicalFuturePlans} />

              </div>
            </article>

            {/* H */}
            <article className="idp-enabler-card">

              <div className="idp-enabler-number">
                H
              </div>

              <div className="idp-enabler-content">

                <div className="idp-enabler-title">
                  <FiMonitor />
                  <h3>Digital Enablers</h3>
                </div>

                <PlanList items={digitalPoints} />

                <h4 className="idp-future-title">
                  Future Plans
                </h4>

                <PlanList items={digitalFuturePlans} />

              </div>
            </article>

          </section>

          {/* =====================================================
              FINAL CTA
          ====================================================== */}
          <section className="idp-final-cta">

            <div className="idp-cta-decoration"></div>

            <div className="idp-cta-content">

              <span>
                INSTITUTIONAL DEVELOPMENT PLAN
              </span>

              <h2>
                Arise, Awake and
                <strong> Know Thyself.</strong>
              </h2>

              <p>
                The Institutional Development Plan brings together
                the academic, administrative, research, student,
                physical and digital development priorities of the
                institution.
              </p>

            </div>

            <div className="idp-cta-actions">

              <a
                href="mailto:mkjkmrt@gmail.com"
                className="idp-primary-btn"
              >
                <FiMail />
                Contact College
              </a>

              <Link
                to="/academics/courses-offered"
                className="idp-secondary-btn"
              >
                Explore Programmes
                <FiArrowRight />
              </Link>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}


/* Small reusable icon component */
function FiCalendarIcon() {
  return <FiCompass />;
}


/* Reusable list */
function PlanList({ items }) {
  return (
    <ul className="idp-plan-list">
      {items.map((item, index) => (
        <li key={index}>
          <span className="idp-list-icon">
            <FiCheckCircle />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}