import React, { useState } from "react";
import PageHero from "../../../components/PageHero";
import api from "../../../lib/api";
import {
  FiAlertCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
  FiSend,
} from "react-icons/fi";
import "./StudentGrievances.css";

const committeeMembers = [
  {
    sr: "1",
    name: "Mrs. Asha Kharb",
    department: "Dept. of Home Science",
    designation: "Convener",
  },
  {
    sr: "2",
    name: "Dr. Savita Malik",
    department: "Dept. of Mathematics",
    designation: "Member",
  },
  {
    sr: "3",
    name: "Dr. Anshu",
    department: "Dept. of Physics",
    designation: "Member",
  },
  {
    sr: "4",
    name: "Ms. Neelam",
    department: "Dept. of English",
    designation: "Member",
  },
  {
    sr: "5",
    name: "Ms. Bindu",
    department: "Student of B.A. III",
    designation: "Student Representative",
  },
];

export default function StudentGrievances() {
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    email: "",
    mobile: "",
    phone: "",
    address: "",
    subject: "",
    complaint: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
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
        type: "grievance",
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        altPhone: formData.phone,
        address: formData.address,
        department: formData.department,
        subject: formData.subject || "Student’s Grievance",
        message: formData.complaint,
      };

      const res = await api.post("/api/inquiries", payload);
      if (res && res.success) {
        setSubmitted(true);
        setFormData({
          department: "",
          name: "",
          email: "",
          mobile: "",
          phone: "",
          address: "",
          subject: "",
          complaint: "",
        });
      } else {
        setError(res?.message || "Could not submit grievance. Please check required fields.");
      }
    } catch (err) {
      console.error("Grievance submission error:", err);
      setError(err.message || "Failed to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="Student’s Grievances Redressal Cell"
        subtitle="A structured platform for students to submit and address their grievances."
      />

      <main className="inner-page page-scope-student-grievances">
        <div className="sg-container">

          {/* INTRO */}
          <section className="sg-intro-card">

            <div className="sg-intro-icon">
              <FiAlertCircle />
            </div>

            <div>
              <span className="sg-eyebrow">
                STUDENT SUPPORT
              </span>

              <h1>
                Student’s Grievances Redressal Cell
              </h1>

              <p>
                A committee consisting of the following members has been
                constituted to look into the complaints of students of
                M.K.J.K. Mahavidyalaya, Rohtak.
              </p>
            </div>

          </section>


          {/* COMMITTEE */}
          <section className="sg-card">

            <div className="sg-section-heading">
              <span>GRIEVANCE REDRESSAL COMMITTEE</span>

              <h2>
                Committee Members
              </h2>

              <p>
                The following members are responsible for receiving and
                addressing student grievances.
              </p>
            </div>


            <div className="sg-table-wrap">

              <table className="sg-table">

                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Department / Details</th>
                    <th>Designation</th>
                  </tr>
                </thead>

                <tbody>

                  {committeeMembers.map((member) => (
                    <tr key={member.sr}>

                      <td>
                        <span className="sg-number">
                          {member.sr}
                        </span>
                      </td>

                      <td>
                        <strong>
                          {member.name}
                        </strong>
                      </td>

                      <td>
                        {member.department}
                      </td>

                      <td>
                        <span className="sg-designation">
                          {member.designation}
                        </span>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>


          {/* INFORMATION */}
          <section className="sg-notice">

            <div className="sg-notice-icon">
              <FiFileText />
            </div>

            <div>
              <h3>
                Submit Your Grievance
              </h3>

              <p>
                Student’s grievances by Teachers & Non-Teaching Staff may
                be lodged by clicking the appropriate grievance facility
                or may be registered using the complaint register.
              </p>

              <p className="sg-notice-strong">
                Student’s Grievance Complaint Registration Form
              </p>
            </div>

          </section>


          {/* FORM */}
          <section className="sg-form-card">

            <div className="sg-form-header">

              <div className="sg-form-header-icon">
                <FiAlertCircle />
              </div>

              <div>
                <span>
                  COMPLAINT REGISTRATION
                </span>

                <h2>
                  Student Grievance Form
                </h2>

                <p>
                  Please provide the required information and describe
                  your grievance clearly.
                </p>
              </div>

            </div>


            {submitted ? (
              <div
                style={{
                  background: "#edf9f2",
                  border: "1.5px solid #bce6ce",
                  borderRadius: "16px",
                  padding: "36px 24px",
                  textAlign: "center",
                  color: "#18693c",
                  margin: "20px 0",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>✓</div>
                <h3 style={{ margin: "0 0 10px", fontSize: "22px", color: "#145932" }}>
                  Grievance Submitted Successfully
                </h3>
                <p style={{ maxWidth: "600px", margin: "0 auto 24px", fontSize: "14.5px", lineHeight: 1.6 }}>
                  Your grievance has been submitted directly to the Student’s Grievances Redressal Cell.
                  The committee members will look into the matter with confidentiality.
                </p>
                <button
                  type="button"
                  className="sg-submit-btn"
                  onClick={() => setSubmitted(false)}
                  style={{ display: "inline-flex", margin: "0 auto" }}
                >
                  Submit Another Grievance
                </button>
              </div>
            ) : (
              <form
                className="sg-form"
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

              <div className="sg-form-grid">

                {/* Department */}
                <div className="sg-field sg-field-full">

                  <label htmlFor="department">
                    Department
                  </label>

                  <div className="sg-input-wrap">
                    <FiFileText />

                    <input
                      id="department"
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="Enter department name"
                    />
                  </div>

                </div>


                {/* Name */}
                <div className="sg-field">

                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>

                  <div className="sg-input-wrap">
                    <FiUser />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                </div>


                {/* Email */}
                <div className="sg-field">

                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>

                  <div className="sg-input-wrap">
                    <FiMail />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                </div>


                {/* Mobile */}
                <div className="sg-field">

                  <label htmlFor="mobile">
                    Mobile No. <span>*</span>
                  </label>

                  <div className="sg-input-wrap">
                    <FiPhone />

                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                </div>


                {/* Phone */}
                <div className="sg-field">

                  <label htmlFor="phone">
                    Phone No.
                  </label>

                  <div className="sg-input-wrap">
                    <FiPhone />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                  </div>

                </div>


                {/* Address */}
                <div className="sg-field sg-field-full">

                  <label htmlFor="address">
                    Address
                  </label>

                  <div className="sg-input-wrap sg-textarea-wrap">
                    <FiMapPin />

                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      rows="4"
                    />
                  </div>

                </div>


                {/* Subject */}
                <div className="sg-field sg-field-full">

                  <label htmlFor="subject">
                    Subject <span>*</span>
                  </label>

                  <div className="sg-input-wrap">
                    <FiFileText />

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter grievance subject"
                      required
                    />
                  </div>

                </div>


                {/* Complaint */}
                <div className="sg-field sg-field-full">

                  <label htmlFor="complaint">
                    Complaint / Message <span>*</span>
                  </label>

                  <div className="sg-input-wrap sg-textarea-wrap">

                    <FiFileText />

                    <textarea
                      id="complaint"
                      name="complaint"
                      value={formData.complaint}
                      onChange={handleChange}
                      placeholder="Describe your grievance or complaint in detail..."
                      rows="7"
                      required
                    />

                  </div>

                </div>

              </div>


              {/* FORM FOOTER */}
              <div className="sg-form-footer">

                <p>
                  <strong>*</strong> Required fields
                </p>

                <button
                  type="submit"
                  className="sg-submit-btn"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                >
                  <FiSend />
                  {loading ? "Submitting..." : "Submit Grievance"}
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