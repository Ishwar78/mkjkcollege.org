import React from "react";
import {
  FiCreditCard,
  FiInfo,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./PGFees.css";

export default function PGFees() {
  const courses = [
    {
      name: "B.P.Ed.",
      fee: 34740,
      type: "Professional Programme",
    },
    {
      name: "PG Diploma in Yoga & Therapy",
      fee: 34650,
      type: "Post Graduate Diploma",
    },
    {
      name: "M.P.Ed.",
      fee: 43540,
      type: "Professional Programme",
    },
    {
      name: "M.A. Geography",
      fee: 22150,
      type: "Post Graduate Programme",
    },
    {
      name: "M.A. English",
      fee: 20150,
      type: "Post Graduate Programme",
    },
    {
      name: "M.Com.",
      fee: 23030,
      type: "Post Graduate Programme",
    },
    {
      name: "M.A. Applied Yoga & Health",
      fee: 22500,
      type: "Post Graduate Programme",
    },
    {
      name: "M.Sc. Physics",
      fee: 40000,
      type: "Post Graduate Programme",
    },
    {
      name: "M.Sc. Mathematics",
      fee: 35000,
      type: "Post Graduate Programme",
    },
    {
      name: "M.A. History",
      fee: 21550,
      type: "Post Graduate Programme",
    },
    {
      name: "M.A. Political Science",
      fee: 21550,
      type: "Post Graduate Programme",
    },
    {
      name: "M.A. Sociology",
      fee: 20000,
      type: "Post Graduate Programme",
    },
    {
      name: "M.A. Psychology",
      fee: 30000,
      type: "Post Graduate Programme",
    },
  ];

  const formatFee = (amount) =>
    new Intl.NumberFormat("en-IN").format(amount);

  return (
    <>
      <PageHero
        title="Post Graduate Fee Structure"
        subtitle="Programme-wise annual fee information for postgraduate courses."
      />

      <main className="mkjk-pgfees page-scope-pgfees">
        <div className="mkjk-pgfees-container">

          {/* INTRO */}
          <section className="pgfees-intro">
            <div className="pgfees-intro-content">

              <div className="pgfees-eyebrow">
                <span></span>
                FEE STRUCTURE
              </div>

              <h1>
                Post Graduate
                <strong> Fee Structure</strong>
              </h1>

              <p>
                The following table presents the annual fee structure
                for postgraduate and professional programmes offered
                by Maharani Kishori Jat Kanya Mahavidyalaya, Rohtak.
              </p>

            </div>

            <div className="pgfees-info-card">

              <div className="pgfees-info-icon">
                <FiCreditCard />
              </div>

              <div>
                <span>FEE INFORMATION</span>
                <strong>Annual Fees</strong>
                <small>All fees are in INR</small>
              </div>

            </div>
          </section>


          {/* COURSES */}
          <section className="pgfees-section">

            <div className="pgfees-section-heading">

              <div>
                <span>PG COURSES</span>

                <h2>
                  Course-wise
                  <strong> Fee Details</strong>
                </h2>
              </div>

              <div className="pgfees-count">
                <FiBookOpen />

                <div>
                  <strong>{courses.length}</strong>
                  <span>PROGRAMMES</span>
                </div>
              </div>

            </div>


            {/* FEE TABLE */}
            <div className="pgfees-table">

              <div className="pgfees-table-head">

                <div>
                  <span>01</span>
                  <strong>POST GRADUATE COURSES</strong>
                </div>

                <span>ANNUAL FEE</span>

              </div>


              <div className="pgfees-table-body">

                {courses.map((course, index) => (
                  <div
                    className="pgfees-row"
                    key={course.name}
                  >

                    <div className="pgfees-course">

                      <div className="pgfees-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="pgfees-course-icon">
                        <FiBookOpen />
                      </div>

                      <div className="pgfees-course-info">

                        <strong>
                          {course.name}
                        </strong>

                        <span>
                          {course.type}
                        </span>

                      </div>

                    </div>


                    <div className="pgfees-amount">

                      <small>ANNUAL FEE</small>

                      <strong>
                        ₹{formatFee(course.fee)}
                      </strong>

                      <FiCheckCircle />

                    </div>

                  </div>
                ))}

              </div>
            </div>

          </section>


          {/* NOTE */}
          <section className="pgfees-note">

            <div className="pgfees-note-icon">
              <FiInfo />
            </div>

            <div>
              <strong>
                Fee Information
              </strong>

              <p>
                All fees are in INR and are annual. Students are advised
                to refer to the applicable college fee notification for
                any additional or updated charges.
              </p>
            </div>

          </section>


          {/* BOTTOM BANNER */}
          <section className="pgfees-highlight">

            <div className="pgfees-highlight-icon">
              <FiCreditCard />
            </div>

            <div className="pgfees-highlight-content">

              <span>
                MKJK · ACADEMIC FEES
              </span>

              <h3>
                Transparent and clearly presented
                <strong> postgraduate fee information.</strong>
              </h3>

            </div>

            <div className="pgfees-highlight-badge">
              INR
              <small>ANNUAL</small>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}