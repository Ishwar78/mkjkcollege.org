import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiAward, FiLayers } from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./Eligibility.css";

export default function Eligibility() {
  return (
    <>
      <PageHero
        title="Eligibility"
        subtitle="Select the programme level to view detailed eligibility requirements."
      />

      <main className="eligibility-page page-scope-eligibility">
        <div className="eligibility-container">
          <div className="eligibility-heading">
            <span>ADMISSION ELIGIBILITY</span>
            <h1>Programme-wise eligibility</h1>
            <p>
              Undergraduate, postgraduate and other-course eligibility are kept
              on separate pages so that students can find the exact information
              without opening one long mixed page.
            </p>
          </div>

          <div className="eligibility-grid">
            <Link className="eligibility-card eligibility-card--ug" to="/academics/eligibility/undergraduate">
              <div className="eligibility-card-icon">
                <FiBookOpen />
              </div>
              <span>01</span>
              <h2>Under Graduate</h2>
              <p>
                Eligibility for B.A., B.Com. and B.Sc. Sports Science, including
                qualifying marks, sports weightage and additional notes.
              </p>
              <strong>View UG Eligibility <FiArrowRight /></strong>
            </Link>

            <Link className="eligibility-card eligibility-card--pg" to="/academics/eligibility/postgraduate">
              <div className="eligibility-card-icon">
                <FiAward />
              </div>
              <span>02</span>
              <h2>Post Graduate</h2>
              <p>
                Detailed M.A. Previous eligibility, qualifying qualifications and
                important conditions for admission.
              </p>
              <strong>View PG Eligibility <FiArrowRight /></strong>
            </Link>

            <Link className="eligibility-card eligibility-card--other" to="/academics/eligibility/other">
              <div className="eligibility-card-icon">
                <FiLayers />
              </div>
              <span>03</span>
              <h2>Others</h2>
              <p>
                Eligibility notice and the currently listed Other Courses
                information.
              </p>
              <strong>View Other Eligibility <FiArrowRight /></strong>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
