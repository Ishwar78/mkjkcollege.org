import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiAward, FiLayers } from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./CoursesOffered.css";

export default function CoursesOffered() {
  return (
    <>
      <PageHero
        title="Courses Offered"
        subtitle="Explore undergraduate, postgraduate and other courses offered by MKJK."
      />

      <main className="courses-offered-page page-scope-coursesoffered">
        <div className="courses-offered-container">
          <div className="courses-offered-intro">
            <span className="courses-offered-kicker">ACADEMIC PROGRAMMES</span>
            <h1>Choose the programme that matches your goals</h1>
            <p>
              Explore the dedicated course pages for undergraduate, postgraduate
              and other programmes. Each page contains the programme-wise details
              and intake information.
            </p>
          </div>

          <div className="courses-offered-grid">
            <Link className="courses-offered-card courses-offered-card--ug" to="/academics/undergraduate">
              <div className="courses-offered-icon">
                <FiBookOpen />
              </div>
              <span>01</span>
              <h2>Under Graduate Courses</h2>
              <p>B.A., B.Com, B.Sc. streams and B.C.A. with programme-wise intake.</p>
              <strong>View UG Courses <FiArrowRight /></strong>
            </Link>

            <Link className="courses-offered-card courses-offered-card--pg" to="/academics/postgraduate">
              <div className="courses-offered-icon">
                <FiAward />
              </div>
              <span>02</span>
              <h2>Post Graduate Courses</h2>
              <p>M.A., M.Com, M.Sc., M.P.Ed., B.P.Ed. and yoga-related programmes.</p>
              <strong>View PG Courses <FiArrowRight /></strong>
            </Link>

            <Link className="courses-offered-card courses-offered-card--other" to="/academics/other-courses">
              <div className="courses-offered-icon">
                <FiLayers />
              </div>
              <span>03</span>
              <h2>Other Courses</h2>
              <p>Add-on and specialised certificate or diploma opportunities.</p>
              <strong>View Other Courses <FiArrowRight /></strong>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
