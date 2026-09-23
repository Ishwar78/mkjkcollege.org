import React, { useState } from "react";
import PageHero from "../../../components/PageHero";
import api from "../../../lib/api";
import "./AntiSexualHarassment.css";

const committeeMembers = [
  {
    sr: "01",
    name: "Dr. Anita Gulia",
    qualification: "Asstt. Professor in Maths",
    designation: "Convener",
  },
  {
    sr: "02",
    name: "Dr. Dhanpati Siwach",
    qualification: "Associate Professor in Geography",
    designation: "Member",
  },
  {
    sr: "03",
    name: "Ms. Anupriya",
    qualification: "Assistant Professor in Computer",
    designation: "Member",
  },
  {
    sr: "04",
    name: "Ms. Sofiya",
    qualification: "Assistant Professor in English",
    designation: "Member",
  },
  {
    sr: "05",
    name: "Ms. Jyoti",
    qualification: "Clerk",
    designation: "Member",
  },
];

const initialForm = {
  complainantName: "",
  designation: "",
  mobile: "",
  email: "",
  aadhaar: "",
  district: "",
  accusedDepartment: "",
  accusedName: "",
  accusedDesignation: "",
  relationship: "",
  description: "",
};

export default function AntiSexualHarassment() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        type: "sexual_harassment",
        name: form.complainantName,
        designation: form.designation,
        phone: form.mobile,
        email: form.email,
        aadhaar: form.aadhaar,
        district: form.district,
        accusedDept: form.accusedDepartment,
        accusedName: form.accusedName,
        accusedDesignation: form.accusedDesignation,
        relationship: form.relationship,
        message: form.description,
        subject: "SEXUAL HARASSMENT & VIOLENCE Complaint",
      };

      const res = await api.post("/api/inquiries", payload);
      if (res && res.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setError(res?.message || "Could not submit complaint. Please check fields.");
      }
    } catch (err) {
      console.error("Sexual Harassment submission error:", err);
      setError(err.message || "Failed to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setError("");
  };

  return (
    <>
      <PageHero
        title="Anti Sexual Harassment Cell"
        subtitle="Prevention against Sexual Harassment and Violence against Women"
      />

      <main className="inner-page page-scope-antisexualharassment">
        <div className="container">

          {/* INTRODUCTION */}
          <section className="ahs-intro">
            <div className="ahs-intro-content">
              <span className="ahs-eyebrow">
                MKJK • WOMEN SAFETY & SUPPORT
              </span>

              <h1>
                Prevention against Sexual Harassment
                <span> and Violence against Women</span>
              </h1>

              <p>
                Prevention against Sexual Harassment and Violence against
                Women is an important institutional responsibility. The
                committee at M.K.J.K. Mahavidyalaya, Rohtak is constituted
                to look into complaints of Sexual Harassment and Violence
                against women from Teachers and Non-teaching staff of the
                college.
              </p>

              <div className="ahs-intro-points">
                <div className="ahs-point">
                  <span className="ahs-point-icon">01</span>
                  <div>
                    <strong>Safe Campus</strong>
                    <p>
                      Supporting a respectful and safe institutional
                      environment.
                    </p>
                  </div>
                </div>

                <div className="ahs-point">
                  <span className="ahs-point-icon">02</span>
                  <div>
                    <strong>Complaint Support</strong>
                    <p>
                      Complaints can be registered through the official
                      complaint registration form.
                    </p>
                  </div>
                </div>

                <div className="ahs-point">
                  <span className="ahs-point-icon">03</span>
                  <div>
                    <strong>Institutional Committee</strong>
                    <p>
                      A designated committee looks into complaints and
                      related concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ahs-intro-badge">
              <div className="ahs-badge-ring">
                <span>MKJK</span>
              </div>
              <strong>Women Safety</strong>
              <small>Respect • Dignity • Support</small>
            </div>
          </section>

          {/* COMMITTEE SECTION */}
          <section className="ahs-section">
            <div className="ahs-section-heading">
              <div>
                <span className="ahs-eyebrow">COMMITTEE</span>

                <h2>
                  Sexual Harassment & Violence
                  <span> Prevention Committee</span>
                </h2>

                <p>
                  A committee consisting of the following members has been
                  constituted to look into the complaints of Sexual Harassment
                  and Violence against women from Teachers and Non-teaching
                  staff of M.K.J.K. Mahavidyalaya, Rohtak.
                </p>
              </div>
            </div>

            <div className="committee-table-wrap">
              <table className="committee-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Designation / Qualification</th>
                    <th>Role</th>
                  </tr>
                </thead>

                <tbody>
                  {committeeMembers.map((member) => (
                    <tr key={member.sr}>
                      <td>
                        <span className="sr-badge">{member.sr}</span>
                      </td>

                      <td>
                        <div className="committee-name">
                          <strong>{member.name}</strong>
                        </div>
                      </td>

                      <td>
                        <span className="committee-qualification">
                          {member.qualification}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`role-badge ${
                            member.designation === "Convener"
                              ? "role-convener"
                              : ""
                          }`}
                        >
                          {member.designation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE COMMITTEE CARDS */}
            <div className="committee-mobile">
              {committeeMembers.map((member) => (
                <article className="committee-mobile-card" key={member.sr}>
                  <div className="committee-mobile-top">
                    <span className="sr-badge">{member.sr}</span>

                    <span
                      className={`role-badge ${
                        member.designation === "Convener"
                          ? "role-convener"
                          : ""
                      }`}
                    >
                      {member.designation}
                    </span>
                  </div>

                  <h3>{member.name}</h3>

                  <p>{member.qualification}</p>
                </article>
              ))}
            </div>
          </section>

          {/* INFORMATION BANNER */}
          <section className="complaint-notice">
            <div className="complaint-notice-icon">
              !
            </div>

            <div className="complaint-notice-content">
              <span className="ahs-eyebrow">COMPLAINT REGISTRATION</span>

              <h2>
                Need to register a complaint?
              </h2>

              <p>
                Complaint of Sexual Harassment & Violence against women by
                Teachers & Non-Teaching Staff may be lodged by clicking here
                or may be registered by using the complaint register.
              </p>
            </div>

            <a
              href="#complaint-form"
              className="complaint-scroll-btn"
            >
              Register Complaint
              <span>↓</span>
            </a>
          </section>

          {/* FORM SECTION */}
          <section
            className="complaint-form-section"
            id="complaint-form"
          >
            <div className="form-heading">
              <div>
                <span className="ahs-eyebrow">
                  SEXUAL HARASSMENT & VIOLENCE
                </span>

                <h2>
                  Complaint Registration
                  <span> Form</span>
                </h2>

                <p>
                  Please provide the required information carefully. Fields
                  marked with <strong>*</strong> are mandatory.
                </p>
              </div>

              <div className="form-heading-badge">
                <span>CONFIDENTIAL</span>
              </div>
            </div>

            {submitted ? (
              <div
                style={{
                  background: "#edf9f2",
                  border: "1.5px solid #bce6ce",
                  borderRadius: "16px",
                  padding: "32px",
                  textAlign: "center",
                  color: "#18693c",
                  margin: "20px 0",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>✓</div>
                <h3 style={{ margin: "0 0 10px", fontSize: "22px", color: "#145932" }}>
                  Complaint Registered Successfully
                </h3>
                <p style={{ maxWidth: "600px", margin: "0 auto 20px", fontSize: "14.5px", lineHeight: 1.6 }}>
                  Your complaint regarding Sexual Harassment & Violence has been submitted
                  securely and confidentially to the Anti-Sexual Harassment Cell committee of MKJK Mahavidyalaya.
                  Appropriate inquiry will be initiated per college and UGC regulations.
                </p>
                <button
                  type="button"
                  className="form-btn form-btn-submit"
                  onClick={() => setSubmitted(false)}
                  style={{ display: "inline-block", margin: "0 auto" }}
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form
                className="complaint-form"
                onSubmit={handleSubmit}
              >
                {error && (
                  <div
                    style={{
                      background: "#feeceb",
                      border: "1px solid #f5c2be",
                      color: "#b02a24",
                      padding: "14px 18px",
                      borderRadius: "10px",
                      marginBottom: "20px",
                      fontSize: "13.5px",
                      fontWeight: 700,
                    }}
                  >
                    ⚠️ {error}
                  </div>
                )}
              {/* COMPLAINANT INFORMATION */}
              <div className="form-block">
                <div className="form-block-heading">
                  <span className="form-number">01</span>

                  <div>
                    <h3>Complainant Information</h3>
                    <p>Enter your personal and contact details.</p>
                  </div>
                </div>

                <div className="form-grid">

                  <div className="field">
                    <label htmlFor="complainantName">
                      Name of the Complainant <span>*</span>
                    </label>

                    <input
                      id="complainantName"
                      type="text"
                      name="complainantName"
                      value={form.complainantName}
                      onChange={handleChange}
                      placeholder="Enter Name of the Complainant"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="designation">
                      Designation <span>*</span>
                    </label>

                    <input
                      id="designation"
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="Enter Designation (Ex. Student/Staff)"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="mobile">
                      Mobile Number <span>*</span>
                    </label>

                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile No."
                      maxLength="10"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="aadhaar">
                      Aadhaar Number
                    </label>

                    <input
                      id="aadhaar"
                      type="text"
                      name="aadhaar"
                      value={form.aadhaar}
                      onChange={handleChange}
                      placeholder="Enter Aadhaar Number"
                      maxLength="12"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="district">
                      District <span>*</span>
                    </label>

                    <input
                      id="district"
                      type="text"
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      placeholder="Name of District"
                      required
                    />
                  </div>

                </div>
              </div>

              {/* ACCUSED INFORMATION */}
              <div className="form-block">
                <div className="form-block-heading">
                  <span className="form-number">02</span>

                  <div>
                    <h3>Accused / Respondent Information</h3>
                    <p>
                      Provide details of the person or persons concerned
                      with the complaint.
                    </p>
                  </div>
                </div>

                <div className="form-grid">

                  <div className="field">
                    <label htmlFor="accusedDepartment">
                      Department of Accused <span>*</span>
                    </label>

                    <input
                      id="accusedDepartment"
                      type="text"
                      name="accusedDepartment"
                      value={form.accusedDepartment}
                      onChange={handleChange}
                      placeholder="Department of Accused"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="accusedName">
                      Name(s) of Accused/Respondent <span>*</span>
                    </label>

                    <input
                      id="accusedName"
                      type="text"
                      name="accusedName"
                      value={form.accusedName}
                      onChange={handleChange}
                      placeholder="Name of Accused"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="accusedDesignation">
                      Designation(s) of Accused/Respondent <span>*</span>
                    </label>

                    <input
                      id="accusedDesignation"
                      type="text"
                      name="accusedDesignation"
                      value={form.accusedDesignation}
                      onChange={handleChange}
                      placeholder="Designation of Accused"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="relationship">
                      Working Relationship(s) with Accused/Respondent{" "}
                      <span>*</span>
                    </label>

                    <input
                      id="relationship"
                      type="text"
                      name="relationship"
                      value={form.relationship}
                      onChange={handleChange}
                      placeholder="Working relationship with Accused"
                      required
                    />
                  </div>

                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="form-block">
                <div className="form-block-heading">
                  <span className="form-number">03</span>

                  <div>
                    <h3>Complaint Details</h3>
                    <p>
                      Briefly describe the incident or concern.
                    </p>
                  </div>
                </div>

                <div className="field field-full">
                  <label htmlFor="description">
                    Brief Description <span>*</span>
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Brief Description"
                    required
                  />
                </div>
              </div>

              {/* FORM FOOTER */}
              <div className="form-footer">

                <div className="form-footer-note">
                  <span className="privacy-icon">✓</span>

                  <p>
                    Please ensure that the information provided in this
                    complaint form is accurate and complete.
                  </p>
                </div>

                <div className="form-actions">
                  <button
                    type="reset"
                    className="form-btn form-btn-reset"
                    onClick={handleReset}
                  >
                    Reset
                  </button>

                  <button
                    type="submit"
                    className="form-btn form-btn-submit"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                  >
                    {loading ? "Submitting..." : "Submit Complaint"}
                    <span>→</span>
                  </button>
                </div>

              </div>
            </form>
          )}
        </section>

        </div>
      </main>
    </>
  );
}