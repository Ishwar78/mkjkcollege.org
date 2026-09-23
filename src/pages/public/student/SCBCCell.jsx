import React, { useState } from "react";
import PageHero from "../../../components/PageHero";
import api from "../../../lib/api";
import "./SCBCCell.css";

const INITIAL_FORM = {
  name: "",
  designation: "",
  phone: "",
  email: "",
  aadhaar: "",
  district: "",
  accusedDept: "",
  accusedName: "",
  accusedDesignation: "",
  relationship: "",
  message: "",
};

export default function SCBCCell() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...form,
        type: "scbc",
        subject: "Violence against SC/BC Complaint",
      };

      const res = await api.post("/api/inquiries", payload);

      if (res && res.success) {
        setSubmitted(true);
        setForm(INITIAL_FORM);
      } else {
        setError(res?.message || "Failed to submit complaint. Please check required fields.");
      }
    } catch (err) {
      console.error("SC/BC complaint submission error:", err);
      setError(err.message || "Failed to submit complaint. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setError("");
  };

  return (
    <>
      <PageHero
        title="SC / BC Cell"
        subtitle="Prevention against harassment and violence against SC/BC."
      />

      <main className="inner-page page-scope-scbccell">
        <div className="page-wrap">
          {/* Committee Information */}
          <section className="premium-card">
            <span className="eyebrow-premium">STUDENT WELFARE</span>
            <h2>Prevention against Harassment and Violence against SC/BC</h2>
            <p>
              Committee consisting of the following to look into the complaints of
              Harassment and Violence against SC/BC from Teachers and Non-teaching
              staff of M.K.J.K Mahavidyalaya Rohtak.
            </p>

            <div className="data-table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ms. Neelam (Asstt. Prof. of English)</td>
                    <td>Convener</td>
                    <td>7988457387</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ms. Neeraj (Asstt Prof. of Geography)</td>
                    <td>Member</td>
                    <td>9466457370</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Ms. Suman (Asstt. Prof. of Physics)</td>
                    <td>Member</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Four Students Volunteers</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Complaint Form */}
          <section className="premium-card complaint-card">
            <span className="eyebrow-premium">CONFIDENTIAL REGISTRATION</span>
            <h2>Harassment & Violence against SC/BC Complaint Registration Form</h2>
            <p style={{ margin: "0 0 20px", fontSize: "14px", color: "#775d49" }}>
              All complaints are processed confidentially by the College SC/BC Cell
              Committee in accordance with official institutional policies and government guidelines.
            </p>

            {submitted ? (
              <div
                className="success-box"
                style={{
                  padding: "24px",
                  background: "#edf9f2",
                  border: "1px solid #bfe8cf",
                  borderRadius: "14px",
                  color: "#18693c",
                  marginBottom: "20px",
                }}
              >
                <h3 style={{ margin: "0 0 8px", color: "#145932", fontSize: "18px" }}>
                  ✓ Complaint Registered Successfully
                </h3>
                <p style={{ margin: "0 0 16px", fontSize: "14px", lineHeight: 1.6 }}>
                  Your complaint regarding Violence / Harassment against SC/BC has been
                  safely submitted to the college administration. The SC/BC Cell committee
                  will review and initiate necessary action.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "#e85c17",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Submit Another Complaint
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div
                    style={{
                      background: "#feeceb",
                      border: "1px solid #f5c2be",
                      color: "#b02a24",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      marginBottom: "18px",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    ⚠️ {error}
                  </div>
                )}

                <div className="form-grid">
                  <label>
                    Name of the Complainant *
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter Name of the Complainant"
                    />
                  </label>

                  <label>
                    Designation *
                    <input
                      name="designation"
                      required
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="Enter Designation (Ex. Student/Staff)"
                    />
                  </label>

                  <label>
                    Mobile Number *
                    <input
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter Mobile No."
                    />
                  </label>

                  <label>
                    Email *
                    <input
                      name="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />
                  </label>

                  <label>
                    Aadhaar Number
                    <input
                      name="aadhaar"
                      value={form.aadhaar}
                      onChange={handleChange}
                      placeholder="Enter Aadhaar Number (Optional)"
                    />
                  </label>

                  <label>
                    District *
                    <input
                      name="district"
                      required
                      value={form.district}
                      onChange={handleChange}
                      placeholder="Name of District"
                    />
                  </label>

                  <label>
                    Department of Accused *
                    <input
                      name="accusedDept"
                      required
                      value={form.accusedDept}
                      onChange={handleChange}
                      placeholder="Department of Accused"
                    />
                  </label>

                  <label>
                    Name(s) of Accused/Respondent *
                    <input
                      name="accusedName"
                      required
                      value={form.accusedName}
                      onChange={handleChange}
                      placeholder="Name of Accused"
                    />
                  </label>

                  <label>
                    Designation(s) of Accused/Respondent *
                    <input
                      name="accusedDesignation"
                      required
                      value={form.accusedDesignation}
                      onChange={handleChange}
                      placeholder="Designation of Accused"
                    />
                  </label>

                  <label className="full">
                    Working Relationship(s) with Accused/Respondent *
                    <input
                      name="relationship"
                      required
                      value={form.relationship}
                      onChange={handleChange}
                      placeholder="Working relationship with Accused"
                    />
                  </label>

                  <label className="full">
                    Brief Description of Incident / Complaint *
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please provide details of the complaint / incident..."
                      rows={5}
                    />
                  </label>
                </div>

                <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                    style={{
                      background: "#e85c17",
                      color: "#fff",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "10px",
                      fontWeight: 800,
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? "Submitting..." : "Submit Complaint"}
                  </button>

                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={handleReset}
                    disabled={loading}
                    style={{
                      background: "#f4ede1",
                      border: "1px solid #dfd2be",
                      color: "#5b3820",
                      padding: "12px 24px",
                      borderRadius: "10px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
