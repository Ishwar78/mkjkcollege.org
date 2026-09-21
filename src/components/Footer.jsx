import React from "react";
import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const miscellaneousLinks = [
    ["Our Pride", "/footer/our-pride"],
    ["Objectives", "/about/objectives"],
    ["Location Map", "/footer/location-map"],
    ["Image Gallery", "/footer/image-gallery"],
    ["Alumni Registration", "/footer/alumni-registration"],
    [
      "Student’s Grievances Redressal Cell",
      "/footer/student-grievances-redressal-cell",
    ],
    ["NCTE", "/footer/ncte"],
    ["AICTE", "/footer/aicte"],
  ];

  const academicLinks = [
    ["Courses List", "/academics/courses-offered"],
    ["Under Graduate Courses", "/academics/undergraduate"],
    ["Post Graduate Courses", "/academics/postgraduate"],
    ["Others Courses", "/academics/other-courses"],
    ["Contact Us", "/contact"],
  ];

  return (
    <footer className="mkjk-footer">

      {/* ================= FOOTER TOP ================= */}
      <div className="mkjk-footer-top">

        <div className="mkjk-footer-container mkjk-footer-grid">

          {/* BRAND */}
          <div className="mkjk-footer-brand">

            <img
              src="/assets/mkjk-logo.jpeg"
              alt="MKJK logo"
            />

            <h3>
              Maharani Kishori Jat Kanya Mahavidyalaya
            </h3>

            <p>
              <FiMapPin />
              <span>
                Delhi Road, Rohtak, Haryana – 124001
              </span>
            </p>

            <p>
              <FiPhone />
              <span>
                01262-274660 · 9812152759
              </span>
            </p>

            <p>
              <FiMail />
              <span>
                mkjkmrt@gmail.com
              </span>
            </p>

            <div className="mkjk-socials">

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>

            </div>

          </div>


          {/* MISCELLANEOUS */}
          <div className="mkjk-footer-column">

            <h4>Miscellaneous</h4>

            <div className="mkjk-footer-links">

              {miscellaneousLinks.map(([title, path]) => (
                <Link
                  to={path}
                  key={title}
                >
                  <FiChevronRight />
                  <span>{title}</span>
                </Link>
              ))}

            </div>

          </div>


          {/* IMPORTANT LINKS */}
          <div className="mkjk-footer-column">

            <h4>Important Links</h4>

            <div className="mkjk-footer-links">

              <Link to="/footer/education">
                <FiChevronRight />
                <span>Education</span>
              </Link>

              <Link to="/footer/ncte">
                <FiChevronRight />
                <span>NCTE</span>
              </Link>

              <Link to="/footer/guest-faculty">
                <FiChevronRight />
                <span>
                  Advertisement for Guest Faculties
                </span>
              </Link>

              <Link to="/footer/results">
                <FiChevronRight />
                <span>See Result</span>
              </Link>

              <Link to="/footer/delnet">
                <FiChevronRight />
                <span>
                  E-Resources (DELNET)
                </span>
              </Link>

              <Link to="/footer/inflibnet">
                <FiChevronRight />
                <span>
                  E-Resources (Inflibnet)
                </span>
              </Link>

            </div>

          </div>


          {/* ACADEMIC */}
          <div className="mkjk-footer-column">

            <h4>Academic Programmes</h4>

            <div className="mkjk-footer-links">

              {academicLinks.map(([title, path]) => (
                <Link
                  to={path}
                  key={title}
                >
                  <FiChevronRight />
                  <span>{title}</span>
                </Link>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="mkjk-footer-bottom">

        <div className="mkjk-footer-container">

          <span>
            © 2026 MKJK Mahavidyalaya, Rohtak.
            All Rights Reserved.
          </span>

          <span>
            Education · Empowerment · Excellence
          </span>

        </div>

      </div>

    </footer>
  );
}