import React from "react";
import {
  FiCreditCard,
  FiInfo,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";
import PageHero from "../../../components/PageHero";
import "./UGFees.css";

export default function UGFees() {
  const courses = [
    {
      name: "B.A.",
      fee: 8940,
      type: "Under Graduate Programme",
    },
    {
      name: "B.Com",
      fee: 9800,
      type: "Commerce Programme",
    },
    {
      name: "B.Sc. Life Sciences",
      fee: 13350,
      type: "Life Sciences Programme",
    },
    {
      name: "B.Sc. Physical Sciences",
      fee: 12350,
      type: "Physical Sciences Programme",
    },
    {
      name: "B.Sc. (Sports Science)",
      fee: 12850,
      type: "Sports Science Programme",
    },
    {
      name: "B.C.A. (Bachelor of Computer Application)",
      fee: 27000,
      type: "Computer Applications Programme",
    },
  ];

  const formatFee = (amount) =>
    new Intl.NumberFormat("en-IN").format(amount);

  return (
    <>
      <PageHero
        title="Under Graduate Fee Structure"
        subtitle="Programme-wise annual fee information for undergraduate courses."
      />

      <main className="mkjk-ugfees page-scope-ugfees">
        <div className="mkjk-ugfees-container">

          {/* INTRO */}
          <section className="ugfees-intro">

            <div className="ugfees-intro-content">
              <div className="ugfees-eyebrow">
                <span></span>
                FEE STRUCTURE
              </div>

              <h1>
                Undergraduate
                <strong> Fee Structure</strong>
              </h1>

              <p>
                The following table presents the annual fee structure
                for undergraduate programmes offered by
                Maharani Kishori Jat Kanya Mahavidyalaya, Rohtak.
              </p>
            </div>

            <div className="ugfees-year-card">
              <div className="ugfees-year-icon">
                <FiCreditCard />
              </div>

              <div>
                <span>FEE INFORMATION</span>
                <strong>Annual Fees</strong>
                <small>All fees are in INR</small>
              </div>
            </div>

          </section>


          {/* FEE TABLE */}
          <section className="ugfees-section">

            <div className="ugfees-section-heading">
              <div>
                <span>UG COURSES</span>

                <h2>
                  Course-wise
                  <strong> Fee Details</strong>
                </h2>
              </div>

              <div className="ugfees-total">
                <FiBookOpen />
                <div>
                  <strong>{courses.length}</strong>
                  <span>PROGRAMMES</span>
                </div>
              </div>
            </div>


            <div className="ugfees-table">

              {/* TABLE HEADER */}
              <div className="ugfees-table-head">

                <div>
                  <span>01</span>
                  <strong>UNDER GRADUATE COURSES</strong>
                </div>

                <span>ANNUAL FEE</span>

              </div>


              {/* ROWS */}
              <div className="ugfees-table-body">

                {courses.map((course, index) => (
                  <div
                    className="ugfees-row"
                    key={course.name}
                  >

                    <div className="ugfees-course">

                      <div className="ugfees-course-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="ugfees-course-icon">
                        <FiBookOpen />
                      </div>

                      <div className="ugfees-course-info">

                        <strong>
                          {course.name}
                        </strong>

                        <span>
                          {course.type}
                        </span>

                      </div>

                    </div>


                    <div className="ugfees-amount">

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


          {/* INFORMATION CARD */}
          <section className="ugfees-info">

            <div className="ugfees-info-icon">
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


          {/* BOTTOM HIGHLIGHT */}
          <section className="ugfees-highlight">

            <div className="ugfees-highlight-icon">
              <FiCreditCard />
            </div>

            <div>
              <span>MKJK · ACADEMIC FEES</span>

              <h3>
                Transparent and clearly presented
                <strong> fee information.</strong>
              </h3>
            </div>

            <div className="ugfees-highlight-badge">
              INR
              <small>ANNUAL</small>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}