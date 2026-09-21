import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import "./Header.css";

const twoColMenus = [
  "ABOUT US",
  "ACADEMICS",
  "FACILITIES",
  "STUDENT CORNER",
  "COMMUNITY SERVICES",
];

const getDropdownAlignClass = (label) => {
  if (label === "ABOUT US") return "align-left";
  if (label === "ACADEMICS") return "align-left-center";
  if (label === "COMMUNITY SERVICES") return "align-right";
  return "align-center";
};

const menus = [
  {
    label: "ABOUT US",
    items: [
      ["History", "/about/history"],
      ["Our College", "/about/our-college"],
      ["Our Inspiration", "/about/our-inspiration"],
      ["Objectives", "/about/objectives"],
      ["Vision & Mission", "/about/vision-mission"],
      ["Affiliation", "/about/affiliation"],
      ["Governing Body", "/about/governing-body"],
      ["Code of Conduct Handbook", "/about/code-of-conduct"],
      ["Organizational Structure", "/about/organizational-structure"],
      ["Committee / Cells / Club", "/about/committee-cells-club"],
      ["Best Practices", "/about/best-practices"],
    ],
  },
  {
    label: "ACADEMICS",
    items: [
      {
        label: "Courses Offered",
        children: [
          ["Courses Offered", "/academics/courses-offered"],
          ["Under Graduate Courses", "/academics/undergraduate"],
          ["Post Graduate Courses", "/academics/postgraduate"],
          ["Others Courses", "/academics/other-courses"],
        ],
      },
      ["Program Learning Outcomes", "/academics/program-learning-outcomes"],
      ["Admission Schedule", "/academics/admission-schedule"],
      {
        label: "Eligibility",
        children: [
          ["Under Graduate", "/academics/eligibility/undergraduate"],
          ["Post Graduate", "/academics/eligibility/postgraduate"],
          ["Others", "/academics/eligibility/other"],
        ],
      },
      {
        label: "Fee Structure",
        children: [
          ["Under Graduate", "/academics/fee-structure/undergraduate"],
          ["Post Graduate", "/academics/fee-structure/postgraduate"],
          ["Others", "/academics/fee-structure/other"],
        ],
      },
      ["Fee Concession", "/academics/fee-concession"],
      ["Academic Calendar", "/academics/academic-calendar"],
      ["Scholarship Details", "/academics/scholarship-details"],
      ["Upcoming Courses / Programmes", "/academics/upcoming-courses"],
    ],
  },
  {
    label: "FACULTY",
    items: [
      ["Teaching Staff", "/faculty/teaching-staff"],
      ["Non-Teaching Staff", "/faculty/non-teaching-staff"],
    ],
  },
  {
    label: "FACILITIES",
    items: [
      ["Infrastructure Facilities", "/facilities/infrastructure"],
      ["Labs", "/facilities/labs"],
      ["Library Facilities", "/facilities/library"],
      ["Hostel Facilities", "/facilities/hostel"],
      ["Sports Facilities", "/facilities/sports"],
      ["Cultural Activities", "/facilities/cultural"],
      ["Canteen", "/facilities/canteen"],
      ["Research Activities", "/facilities/research"],
    ],
  },
  {
    label: "STUDENT CORNER",
    items: [
      ["Time Table", "/student/time-table"],
      ["Fee & Other Notices", "/student/notices"],
      ["Rules", "/student/rules"],
      ["Important Instructions", "/student/important-instructions"],
      ["Major Achievements", "/student/major-achievements"],
      ["Student Profile", "/student/student-profile"],
      ["Examination", "/student/examination"],
      ["Lesson Plan", "/student/lesson-plan"],
      ["SC/BC Cell", "/student/scbc-cell"],
      ["Extension Activities", "/student/extension-activities"],
    ],
  },
  {
    label: "IQAC",
    items: [
      ["NAAC", "/iqac/naac"],
      ["IQAC Committee", "/iqac/committee"],
      ["AQAR", "/iqac/aqar"],
      ["IQAC Meetings", "/iqac/meetings"],
      ["Institutional Development Plan", "/iqac/development-plan"],
    ],
  },
  {
    label: "COMMUNITY SERVICES",
    items: [
      ["National Service Scheme (N.S.S)", "/community/nss"],
      ["National Cadet Corps (N.C.C)", "/community/ncc"],
      ["Youth Red Cross (YRS)", "/community/youth-red-cross"],
      ["University Outreach Program", "/community/university-outreach"],
      ["Women Cell", "/community/women-cell"],
      ["Gender Champion", "/community/gender-champion"],
      ["Legal Literacy Cell", "/community/legal-literacy"],
      ["EK Bharat / Shreshth Bharat", "/community/ek-bharat"],
      ["Anti Sexual Harassment Cell", "/community/anti-sexual-harassment"],
    ],
  },
];

function SimpleLink({ item, closeMenu }) {
  return (
    <Link to={item[1]} onClick={closeMenu} className="dropdown-link-btn">
      <span className="dropdown-link-dot" />
      <span className="dropdown-link-text">{item[0]}</span>
      <FiChevronRight className="dropdown-link-arrow" />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const closeAll = () => {
    setSearchOpen(false);
    setQuery("");
    setOpen(null);
    setOpenSub(null);
    setMobile(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeAll();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="topbar">
        <div className="container top-inner">
          <div className="top-contact">
            <span><FiPhone /> 01262-274660</span>
            <span><FiMail /> mkjkmrtk@gmail.com</span>
            <span className="top-location"><FiMapPin /> Delhi Road, Rohtak</span>
          </div>
          <div className="top-right">
            <span>Admissions 2026–27</span>
            {/* <Link to="/student/notices">Notices</Link>
            <Link to="/admin/mkjklogin">Admin Login</Link> */}
          </div>
        </div>
      </div>

      <div className="brand">
        <div className="container brand-inner">
          <Link to="/" className="brand-lockup" onClick={closeAll}>
            <img src="/assets/mkjk-logo.jpeg" alt="MKJK College logo" />
            <div className="brand-copy">
              <strong>Maharani Kishori Jat Kanya Mahavidyalaya</strong>
              <small>Rohtak, Haryana</small>
              <b>उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत</b>
            </div>
          </Link>
          <div className="brand-message">
            <span>Education</span>
            <strong>Empowerment</strong>
            <span>Excellence</span>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container nav-inner">
          <button
            className="mobile-menu"
            type="button"
            onClick={() => setMobile((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobile ? <FiX /> : <FiMenu />}
          </button>

          <nav className={mobile ? "nav open" : "nav"}>
            <Link className="home-link" to="/" onClick={closeAll}>HOME</Link>

            {menus.map((menu, menuIndex) => (
              <div className="nav-item" key={menu.label}>
                <button
                  type="button"
                  className={open === menuIndex ? "active" : ""}
                  onClick={() => {
                    setOpen(open === menuIndex ? null : menuIndex);
                    setOpenSub(null);
                  }}
                >
                  {menu.label}
                  <FiChevronDown />
                </button>

                {open === menuIndex && (
                  <div
                    className={`dropdown ${
                      twoColMenus.includes(menu.label) ? "dropdown-two-col" : ""
                    } ${getDropdownAlignClass(menu.label)}`}
                  >
                    <div className="dropdown-title-bar">
                      <span className="dropdown-title-label">{menu.label}</span>
                      <span className="dropdown-title-count">
                        {menu.items.length} {menu.items.length === 1 ? "Option" : "Options"}
                      </span>
                    </div>

                    <div className="dropdown-grid">
                      {menu.items.map((item, itemIndex) => {
                        const hasChildren = !Array.isArray(item) && item.children;

                        if (!hasChildren) {
                          return (
                            <SimpleLink
                              key={item[1]}
                              item={item}
                              closeMenu={closeAll}
                            />
                          );
                        }

                        const subKey = `${menuIndex}-${itemIndex}`;

                        return (
                          <div
                            className={`dropdown-item has-children ${
                              openSub === subKey ? "is-expanded" : ""
                            }`}
                            key={item.label}
                          >
                            <button
                              type="button"
                              className="dropdown-link-btn dropdown-parent-btn"
                              onClick={() =>
                                setOpenSub(openSub === subKey ? null : subKey)
                              }
                            >
                              <span className="dropdown-link-dot" />
                              <span className="dropdown-link-text">{item.label}</span>
                              <FiChevronDown
                                className="dropdown-link-chevron"
                                style={{
                                  transform:
                                    openSub === subKey ? "rotate(180deg)" : "none",
                                  transition: "transform 0.2s ease",
                                }}
                              />
                            </button>

                            {openSub === subKey && (
                              <div className="submenu-inline">
                                {item.children.map(([label, path]) => (
                                  <Link
                                    key={path}
                                    to={path}
                                    onClick={closeAll}
                                    className="submenu-inline-link"
                                  >
                                    <FiChevronRight size={11} />
                                    <span>{label}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/contact" onClick={closeAll}>CONTACT US</Link>
          </nav>

          <button className="search" type="button" aria-label="Search" onClick={() => setSearchOpen((v) => !v)}>
            {searchOpen ? <FiX /> : <FiSearch />}
          </button>
          {searchOpen && (
            <div className="header-search-panel">
              <form onSubmit={(e) => {
                e.preventDefault();
                const q = query.trim().toLowerCase();
                const all = menus.flatMap((m) => m.items.flatMap((it) => Array.isArray(it) ? [it] : (it.children || [])));
                const found = all.find(([label]) => label.toLowerCase().includes(q));
                if (found) { navigate(found[1]); closeAll(); }
                else if (q.includes("contact")) { navigate("/contact"); closeAll(); }
              }}>
                <FiSearch />
                <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pages, courses, notices..." />
                <button type="submit">Search</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
