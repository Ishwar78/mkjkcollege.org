import React, { useState } from "react";
import {
  FiUser,
  FiBookOpen,
  FiCalendar,
  FiPhone,
  FiMail,
  FiMapPin,
  FiBriefcase,
  FiSend,
  FiRotateCcw,
} from "react-icons/fi";

import PageHero from "../../../components/PageHero";
import "./AlumniRegistration.css";

export default function AlumniRegistration() {
  const initialForm = {
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    coursePassed: "",
    passingYear: "",
    dob: "",
    mobile: "",
    email: "",
    alternativeEmail: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    professional: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend/API can be connected here later.
    console.log("Alumni Registration:", form);

    alert("Alumni registration submitted successfully.");
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <>
      <PageHero
        title="Alumni Registration Form"
        subtitle="Stay connected with the MKJK alumni community."
      />

      <main className="inner-page page-scope-alumniregistration">

        <div className="alumni-container">

          {/* =========================
              FORM HEADER
          ========================= */}
          <section className="alumni-intro">

            <div className="alumni-intro-icon">
              <FiUser />
            </div>

            <div>
              <span className="alumni-eyebrow">
                MKJK ALUMNI COMMUNITY
              </span>

              <h1>
                Alumni Registration
              </h1>

              <p>
                Register your details to stay connected with
                Maharani Kishori Jat Kanya Mahavidyalaya.
              </p>
            </div>

          </section>


          {/* =========================
              FORM CARD
          ========================= */}
          <section className="alumni-form-card">

            <div className="form-card-heading">

              <div>
                <span className="form-mini-label">
                  PERSONAL & PROFESSIONAL DETAILS
                </span>

                <h2>
                  Alumni Registration Form
                </h2>
              </div>

              <div className="required-note">
                <span>*</span> Mandatory fields
              </div>

            </div>


            <form onSubmit={handleSubmit}>

              {/* ==================================
                  PERSONAL DETAILS
              ================================== */}
              <div className="form-section">

                <div className="section-heading">
                  <div className="section-icon">
                    <FiUser />
                  </div>

                  <div>
                    <h3>
                      Personal Information
                    </h3>

                    <p>
                      Please provide your basic personal details.
                    </p>
                  </div>
                </div>


                <div className="form-grid">

                  {/* TITLE */}
                  <div className="field">

                    <label htmlFor="title">
                      Title <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiUser />

                      <select
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select Title
                        </option>

                        <option value="Mr.">
                          Mr.
                        </option>

                        <option value="Ms.">
                          Ms.
                        </option>

                        <option value="Mrs.">
                          Mrs.
                        </option>

                        <option value="Dr.">
                          Dr.
                        </option>
                      </select>
                    </div>

                  </div>


                  {/* FIRST NAME */}
                  <div className="field">

                    <label htmlFor="firstName">
                      First Name <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiUser />

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        required
                      />
                    </div>

                  </div>


                  {/* MIDDLE NAME */}
                  <div className="field">

                    <label htmlFor="middleName">
                      Middle Name
                    </label>

                    <div className="input-wrap">
                      <FiUser />

                      <input
                        id="middleName"
                        name="middleName"
                        type="text"
                        value={form.middleName}
                        onChange={handleChange}
                        placeholder="Enter Middle Name"
                      />
                    </div>

                  </div>


                  {/* LAST NAME */}
                  <div className="field">

                    <label htmlFor="lastName">
                      Last Name <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiUser />

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        required
                      />
                    </div>

                  </div>


                  {/* COURSE */}
                  <div className="field field-wide">

                    <label htmlFor="coursePassed">
                      Class / Course Passed <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiBookOpen />

                      <input
                        id="coursePassed"
                        name="coursePassed"
                        type="text"
                        value={form.coursePassed}
                        onChange={handleChange}
                        placeholder="Enter Your Class / Course Passed"
                        required
                      />
                    </div>

                  </div>


                  {/* YEAR */}
                  <div className="field field-wide">

                    <label htmlFor="passingYear">
                      Year of Passing
                      <small>
                        (fill approximate year, if exact not known)
                      </small>
                      <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiCalendar />

                      <input
                        id="passingYear"
                        name="passingYear"
                        type="number"
                        min="1900"
                        max="2100"
                        value={form.passingYear}
                        onChange={handleChange}
                        placeholder="Enter your Year of Passing"
                        required
                      />
                    </div>

                  </div>


                  {/* DOB */}
                  <div className="field">

                    <label htmlFor="dob">
                      Date of Birth <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiCalendar />

                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={form.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>

                </div>

              </div>


              {/* ==================================
                  CONTACT DETAILS
              ================================== */}
              <div className="form-section">

                <div className="section-heading">
                  <div className="section-icon">
                    <FiPhone />
                  </div>

                  <div>
                    <h3>
                      Contact Information
                    </h3>

                    <p>
                      Enter your current contact details.
                    </p>
                  </div>
                </div>


                <div className="form-grid">

                  {/* MOBILE */}
                  <div className="field">

                    <label htmlFor="mobile">
                      Mobile No. <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiPhone />

                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="Mobile No."
                        required
                      />
                    </div>

                  </div>


                  {/* EMAIL */}
                  <div className="field">

                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiMail />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your Email Id"
                        required
                      />
                    </div>

                  </div>


                  {/* ALTERNATIVE EMAIL */}
                  <div className="field">

                    <label htmlFor="alternativeEmail">
                      Alternative E-Mail
                      <small>
                        (Optional)
                      </small>
                    </label>

                    <div className="input-wrap">
                      <FiMail />

                      <input
                        id="alternativeEmail"
                        name="alternativeEmail"
                        type="email"
                        value={form.alternativeEmail}
                        onChange={handleChange}
                        placeholder="Alternative E-Mail (Optional)"
                      />
                    </div>

                  </div>

                </div>

              </div>


              {/* ==================================
                  ADDRESS DETAILS
              ================================== */}
              <div className="form-section">

                <div className="section-heading">
                  <div className="section-icon">
                    <FiMapPin />
                  </div>

                  <div>
                    <h3>
                      Address Information
                    </h3>

                    <p>
                      Provide your current residential address.
                    </p>
                  </div>
                </div>


                <div className="form-grid">

                  {/* ADDRESS */}
                  <div className="field field-wide">

                    <label htmlFor="address">
                      Address <span>*</span>
                    </label>

                    <div className="textarea-wrap">
                      <FiMapPin />

                      <textarea
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Enter Your Address"
                        required
                      />
                    </div>

                  </div>


                  {/* COUNTRY */}
                  <div className="field">

                    <label htmlFor="country">
                      Country <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiMapPin />

                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your Country"
                        required
                      />
                    </div>

                  </div>


                  {/* STATE */}
                  <div className="field">

                    <label htmlFor="state">
                      State <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiMapPin />

                      <input
                        id="state"
                        name="state"
                        type="text"
                        value={form.state}
                        onChange={handleChange}
                        placeholder="Your State"
                        required
                      />
                    </div>

                  </div>


                  {/* CITY */}
                  <div className="field">

                    <label htmlFor="city">
                      City <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiMapPin />

                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Your City"
                        required
                      />
                    </div>

                  </div>


                  {/* PINCODE */}
                  <div className="field">

                    <label htmlFor="pincode">
                      Pincode <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiMapPin />

                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        inputMode="numeric"
                        maxLength="6"
                        value={form.pincode}
                        onChange={handleChange}
                        placeholder="Your Pincode"
                        required
                      />
                    </div>

                  </div>

                </div>

              </div>


              {/* ==================================
                  PROFESSIONAL DETAILS
              ================================== */}
              <div className="form-section">

                <div className="section-heading">
                  <div className="section-icon">
                    <FiBriefcase />
                  </div>

                  <div>
                    <h3>
                      Professional Information
                    </h3>

                    <p>
                      Tell us about your current professional status.
                    </p>
                  </div>
                </div>


                <div className="form-grid">

                  <div className="field field-professional">

                    <label htmlFor="professional">
                      Professional <span>*</span>
                    </label>

                    <div className="input-wrap">
                      <FiBriefcase />

                      <select
                        id="professional"
                        name="professional"
                        value={form.professional}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          -- Select --
                        </option>

                        <option value="Student">
                          Student
                        </option>

                        <option value="Government Employee">
                          Government Employee
                        </option>

                        <option value="Private Employee">
                          Private Employee
                        </option>

                        <option value="Business">
                          Business
                        </option>

                        <option value="Self Employed">
                          Self Employed
                        </option>

                        <option value="Teacher">
                          Teacher / Professor
                        </option>

                        <option value="Professional">
                          Professional
                        </option>

                        <option value="Homemaker">
                          Homemaker
                        </option>

                        <option value="Retired">
                          Retired
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>

                </div>

              </div>


              {/* ==================================
                  ACTIONS
              ================================== */}
              <div className="form-actions">

                <button
                  type="submit"
                  className="alumni-btn alumni-btn-primary"
                >
                  <FiSend />
                  Submit Registration
                </button>


                <button
                  type="button"
                  className="alumni-btn alumni-btn-secondary"
                  onClick={handleReset}
                >
                  <FiRotateCcw />
                  Reset
                </button>

              </div>


              <div className="mandatory-message">
                <strong>*</strong>
                Mandatory fields must be completed before submitting.
              </div>

            </form>

          </section>


          {/* =========================
              BOTTOM NOTE
          ========================= */}
          <div className="alumni-bottom-note">

            <div className="note-line"></div>

            <span>
              Your information helps us stay connected with the MKJK Alumni Community.
            </span>

            <div className="note-line"></div>

          </div>

        </div>

      </main>
    </>
  );
}