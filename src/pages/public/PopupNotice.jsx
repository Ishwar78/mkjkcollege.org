import React from "react";
import { Link } from "react-router-dom";
import {
  FiDownload,
  FiPrinter,
  FiArrowLeft,
  FiCalendar,
  FiFileText,
  FiChevronRight,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import PageHero from "../../components/PageHero";
import "./PopupNotice.css";

export default function PopupNotice() {
  const imageSrc = "/assets/popup.png";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-scope-popupnotice">
      <PageHero
        title="Notice & Announcements"
        subtitle="Important institutional updates, timetables, and notifications from MKJK College."
      />

      <main className="pn-container">
        <div className="pn-grid">
          {/* Main Notice Article */}
          <article className="pn-main-card">
            <div className="pn-notice-header">
              <div className="pn-notice-title">
                <span className="pn-notice-badge">Official Notice</span>
                <h2>Institutional Announcement</h2>
              </div>

              <div className="pn-action-buttons">
                <button
                  type="button"
                  className="pn-btn pn-btn-outline"
                  onClick={handlePrint}
                >
                  <FiPrinter /> Print
                </button>
                <a
                  href={imageSrc}
                  download="MKJK-Notice.png"
                  className="pn-btn pn-btn-primary"
                >
                  <FiDownload /> Download Notice
                </a>
              </div>
            </div>

            {/* Notice Image Display */}
            <div className="pn-image-wrapper">
              <img
                src={imageSrc}
                alt="MKJK Official Announcement Notice"
                className="pn-notice-img"
                onError={(e) => {
                  if (e.target.src.indexOf("popup-notice.png") === -1) {
                    e.target.src = "/assets/popup-notice.png";
                  } else {
                    e.target.src = "/assets/MAHARANI-KISHORI.png";
                  }
                }}
              />
            </div>

            <div className="pn-notice-footer">
              <div>
                <FiCalendar style={{ marginRight: "6px" }} />
                Session 2024–25 / 2026–27 · Issued by Office of the Principal
              </div>
              <Link to="/" style={{ color: "#e85c17", fontWeight: 700, textDecoration: "none" }}>
                <FiArrowLeft style={{ marginRight: "4px" }} /> Back to Home
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="pn-sidebar">
            <div className="pn-side-box">
              <div className="pn-side-accent" />
              <h3>Notice Desk</h3>
              <p>
                All official circulars, time tables, examination schedules, and
                admission notifications are published on our student portal.
              </p>
              <div className="pn-side-links">
                <Link to="/student/notices" className="pn-side-link-item">
                  <span>Student Notices</span>
                  <FiChevronRight />
                </Link>
                <Link to="/student/time-table" className="pn-side-link-item">
                  <span>Time Table</span>
                  <FiChevronRight />
                </Link>
                <Link to="/academics/admission-schedule" className="pn-side-link-item">
                  <span>Admission Schedule</span>
                  <FiChevronRight />
                </Link>
                <Link to="/student/examination" className="pn-side-link-item">
                  <span>Examinations</span>
                  <FiChevronRight />
                </Link>
              </div>
            </div>

            <div className="pn-side-box">
              <div className="pn-side-accent" />
              <h3>Contact College</h3>
              <p>
                For any query related to this notification, contact college administration.
              </p>
              <div className="pn-side-links">
                <a href="tel:01262274660" className="pn-side-link-item">
                  <span><FiPhone style={{ marginRight: "6px" }} /> 01262-274660</span>
                  <FiChevronRight />
                </a>
                <a href="mailto:mkjkmrtk@gmail.com" className="pn-side-link-item">
                  <span><FiMail style={{ marginRight: "6px" }} /> mkjkmrtk@gmail.com</span>
                  <FiChevronRight />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
