import React, { useEffect, useState } from "react";
import {
  FiInbox,
  FiMail,
  FiPhone,
  FiClock,
  FiTrash2,
  FiCheckCircle,
  FiEye,
  FiRefreshCw,
  FiSearch,
  FiX,
  FiSend,
  FiShield,
  FiUser,
  FiMapPin,
  FiAlertCircle,
  FiAlertTriangle,
  FiAward,
  FiMessageSquare,
  FiFileText,
  FiCalendar,
  FiBriefcase,
} from "react-icons/fi";
import AdminLayout from "./AdminLayout";
import api from "../../lib/api";
import "./AdminInquiries.css";

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  // "all" | "contact" | "scbc" | "sexual_harassment" | "alumni" | "grievance"
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all"); // "all" | "unread" | "read"
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/inquiries");
      if (res && res.inquiries) {
        setInquiries(res.inquiries);
      }
    } catch (err) {
      console.error("Error fetching inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "unread" ? "read" : "unread";
    try {
      const res = await api.patch(`/api/inquiries/${id}/status`, {
        status: newStatus,
      });
      if (res && res.success) {
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: newStatus } : item
          )
        );
        if (selectedInquiry && selectedInquiry._id === id) {
          setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      const res = await api.delete(`/api/inquiries/${id}`);
      if (res && res.success) {
        setInquiries((prev) => prev.filter((item) => item._id !== id));
        if (selectedInquiry && selectedInquiry._id === id) {
          setSelectedInquiry(null);
        }
      }
    } catch (err) {
      console.error("Error deleting inquiry:", err);
    }
  };

  // Derived category lists & counts
  const totalInquiries = inquiries.length;
  const unreadTotal = inquiries.filter((i) => i.status === "unread").length;

  const isType = (itemType, expected) => {
    if (!itemType && expected === "contact") return true;
    const t = (itemType || "").toLowerCase();
    if (expected === "contact") return t === "contact" || !t;
    if (expected === "scbc") return t === "scbc";
    if (expected === "sexual_harassment") return t.includes("sexual");
    if (expected === "alumni") return t.startsWith("alumn");
    if (expected === "grievance") return t.includes("grievance");
    return false;
  };

  const contactInquiries = inquiries.filter((i) => isType(i.type, "contact"));
  const unreadContact = contactInquiries.filter(
    (i) => i.status === "unread"
  ).length;

  const scbcInquiries = inquiries.filter((i) => isType(i.type, "scbc"));
  const unreadScbc = scbcInquiries.filter((i) => i.status === "unread").length;

  const sexualInquiries = inquiries.filter((i) =>
    isType(i.type, "sexual_harassment")
  );
  const unreadSexual = sexualInquiries.filter(
    (i) => i.status === "unread"
  ).length;

  const alumniInquiries = inquiries.filter((i) => isType(i.type, "alumni"));
  const unreadAlumni = alumniInquiries.filter(
    (i) => i.status === "unread"
  ).length;

  const grievanceInquiries = inquiries.filter((i) =>
    isType(i.type, "grievance")
  );
  const unreadGrievance = grievanceInquiries.filter(
    (i) => i.status === "unread"
  ).length;

  // Filter inquiries based on category, status and search query
  const filteredInquiries = inquiries.filter((item) => {
    // 1. Category Filter
    if (categoryFilter !== "all" && !isType(item.type, categoryFilter)) {
      return false;
    }

    // 2. Status Filter
    if (statusFilter === "unread" && item.status !== "unread") return false;
    if (statusFilter === "read" && item.status === "unread") return false;

    // 3. Search Query Filter
    const query = searchTerm.toLowerCase().trim();
    if (!query) return true;

    const matchName = item.name && item.name.toLowerCase().includes(query);
    const matchEmail = item.email && item.email.toLowerCase().includes(query);
    const matchPhone = item.phone && item.phone.toLowerCase().includes(query);
    const matchSubject =
      item.subject && item.subject.toLowerCase().includes(query);
    const matchMessage =
      item.message && item.message.toLowerCase().includes(query);
    const matchAccused =
      item.accusedName && item.accusedName.toLowerCase().includes(query);
    const matchDistrict =
      item.district && item.district.toLowerCase().includes(query);
    const matchCourse =
      item.coursePassed && item.coursePassed.toLowerCase().includes(query);
    const matchDept =
      item.department && item.department.toLowerCase().includes(query);
    const matchCity = item.city && item.city.toLowerCase().includes(query);

    return (
      matchName ||
      matchEmail ||
      matchPhone ||
      matchSubject ||
      matchMessage ||
      matchAccused ||
      matchDistrict ||
      matchCourse ||
      matchDept ||
      matchCity
    );
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <AdminLayout>
      <div className="admin-head">
        <div>
          <h1>Inquiries & Forms Management</h1>
          <p>
            Review and respond to Contact inquiries, Violence against SC/BC,
            Sexual Harassment complaints, Alumni registrations, and Student grievances.
          </p>
        </div>

        <button
          className="btn btn-light"
          onClick={fetchInquiries}
          disabled={loading}
        >
          <FiRefreshCw className={loading ? "spin" : ""} />
          {loading ? "Refreshing..." : "Refresh Inbox"}
        </button>
      </div>

      {/* Top Stats Cards Row */}
      <div
        className="inquiry-stats-row"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}
      >
        <div className="inquiry-stat-card">
          <div>
            <strong>{totalInquiries}</strong>
            <span>Total Records ({unreadTotal} New)</span>
          </div>
          <div className="inquiry-stat-icon">
            <FiInbox />
          </div>
        </div>

        <div className="inquiry-stat-card">
          <div>
            <strong style={{ color: "#d95b16" }}>{contactInquiries.length}</strong>
            <span>
              Contact Us {unreadContact > 0 && `(${unreadContact} New)`}
            </span>
          </div>
          <div
            className="inquiry-stat-icon"
            style={{ background: "#ffebd8", color: "#c94f0e" }}
          >
            <FiMail />
          </div>
        </div>

        <div className="inquiry-stat-card">
          <div>
            <strong style={{ color: "#8f2113" }}>{scbcInquiries.length}</strong>
            <span>
              SC/BC Cell {unreadScbc > 0 && `(${unreadScbc} New)`}
            </span>
          </div>
          <div
            className="inquiry-stat-icon"
            style={{ background: "#feece8", color: "#8f2113" }}
          >
            <FiShield />
          </div>
        </div>

        <div className="inquiry-stat-card">
          <div>
            <strong style={{ color: "#a81c46" }}>{sexualInquiries.length}</strong>
            <span>
              Sexual Harassment {unreadSexual > 0 && `(${unreadSexual} New)`}
            </span>
          </div>
          <div
            className="inquiry-stat-icon"
            style={{ background: "#fdf2f4", color: "#a81c46" }}
          >
            <FiAlertTriangle />
          </div>
        </div>

        <div className="inquiry-stat-card">
          <div>
            <strong style={{ color: "#946c0b" }}>{alumniInquiries.length}</strong>
            <span>
              Alumni Reg. {unreadAlumni > 0 && `(${unreadAlumni} New)`}
            </span>
          </div>
          <div
            className="inquiry-stat-icon"
            style={{ background: "#fdf9e8", color: "#946c0b" }}
          >
            <FiAward />
          </div>
        </div>

        <div className="inquiry-stat-card">
          <div>
            <strong style={{ color: "#175494" }}>{grievanceInquiries.length}</strong>
            <span>
              Grievances {unreadGrievance > 0 && `(${unreadGrievance} New)`}
            </span>
          </div>
          <div
            className="inquiry-stat-icon"
            style={{ background: "#edf3fb", color: "#175494" }}
          >
            <FiMessageSquare />
          </div>
        </div>
      </div>

      {/* Primary Category Selector Buttons */}
      <div className="inquiry-category-bar">
        {/* 1. Contact Inquiries */}
        <button
          type="button"
          className={`inquiry-category-btn contact-active ${
            categoryFilter === "contact" ? "active" : ""
          }`}
          onClick={() => setCategoryFilter("contact")}
        >
          <FiMail />
          <span>Contact Inquiries</span>
          <span className="category-badge-count">{contactInquiries.length}</span>
          {unreadContact > 0 && (
            <span className="category-unread-dot" title="Unread Inquiries" />
          )}
        </button>

        {/* 2. Violence against SC/BC */}
        <button
          type="button"
          className={`inquiry-category-btn ${
            categoryFilter === "scbc" ? "active" : ""
          }`}
          onClick={() => setCategoryFilter("scbc")}
        >
          <FiShield />
          <span>Violence against SC/BC</span>
          <span className="category-badge-count">{scbcInquiries.length}</span>
          {unreadScbc > 0 && (
            <span className="category-unread-dot" title="New SC/BC Complaints" />
          )}
        </button>

        {/* 3. SEXUAL HARASSMENT & VIOLENCE */}
        <button
          type="button"
          className={`inquiry-category-btn ${
            categoryFilter === "sexual_harassment" ? "active" : ""
          }`}
          style={
            categoryFilter === "sexual_harassment"
              ? { background: "linear-gradient(135deg, #a81c46, #d82b61)" }
              : {}
          }
          onClick={() => setCategoryFilter("sexual_harassment")}
        >
          <FiAlertTriangle />
          <span>SEXUAL HARASSMENT & VIOLENCE</span>
          <span className="category-badge-count">{sexualInquiries.length}</span>
          {unreadSexual > 0 && (
            <span
              className="category-unread-dot"
              title="New Sexual Harassment Complaints"
            />
          )}
        </button>

        {/* 4. Alumni Registration form */}
        <button
          type="button"
          className={`inquiry-category-btn ${
            categoryFilter === "alumni" ? "active" : ""
          }`}
          style={
            categoryFilter === "alumni"
              ? { background: "linear-gradient(135deg, #946c0b, #c49416)" }
              : {}
          }
          onClick={() => setCategoryFilter("alumni")}
        >
          <FiAward />
          <span>Alumni Registration</span>
          <span className="category-badge-count">{alumniInquiries.length}</span>
          {unreadAlumni > 0 && (
            <span
              className="category-unread-dot"
              title="New Alumni Registrations"
            />
          )}
        </button>

        {/* 5. Student’s Grievances */}
        <button
          type="button"
          className={`inquiry-category-btn ${
            categoryFilter === "grievance" ? "active" : ""
          }`}
          style={
            categoryFilter === "grievance"
              ? { background: "linear-gradient(135deg, #175494, #2777d0)" }
              : {}
          }
          onClick={() => setCategoryFilter("grievance")}
        >
          <FiMessageSquare />
          <span>Student’s Grievances</span>
          <span className="category-badge-count">
            {grievanceInquiries.length}
          </span>
          {unreadGrievance > 0 && (
            <span
              className="category-unread-dot"
              title="New Student Grievances"
            />
          )}
        </button>

        {/* 6. All Submissions */}
        <button
          type="button"
          className={`inquiry-category-btn ${
            categoryFilter === "all" ? "active" : ""
          }`}
          onClick={() => setCategoryFilter("all")}
        >
          <FiInbox />
          <span>All Submissions</span>
          <span className="category-badge-count">{totalInquiries}</span>
        </button>
      </div>

      {/* Sub-Filters and Search Bar */}
      <div className="inquiry-controls">
        <div className="inquiry-tabs">
          <button
            className={`inquiry-tab-btn ${
              statusFilter === "all" ? "active" : ""
            }`}
            onClick={() => setStatusFilter("all")}
          >
            All Status
          </button>
          <button
            className={`inquiry-tab-btn ${
              statusFilter === "unread" ? "active" : ""
            }`}
            onClick={() => setStatusFilter("unread")}
          >
            New / Unread
          </button>
          <button
            className={`inquiry-tab-btn ${
              statusFilter === "read" ? "active" : ""
            }`}
            onClick={() => setStatusFilter("read")}
          >
            Reviewed
          </button>
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="text"
            className="inquiry-search-input"
            placeholder="Search name, course, accused, district..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#977b67",
            }}
          />
        </div>
      </div>

      {/* Inquiries & Complaints List */}
      <div className="inquiries-container">
        {loading && (
          <div
            style={{
              textAlign: "center",
              padding: "50px 20px",
              color: "#7e6550",
              fontWeight: 700,
            }}
          >
            Loading records from database...
          </div>
        )}

        {!loading && filteredInquiries.length === 0 && (
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #ebd9be",
              borderRadius: "16px",
              padding: "60px 20px",
              textAlign: "center",
              color: "#836954",
            }}
          >
            <FiInbox
              style={{ fontSize: "44px", color: "#e85c17", opacity: 0.6 }}
            />
            <h3
              style={{ margin: "14px 0 6px", color: "#4f2812", fontSize: "19px" }}
            >
              No submissions found
            </h3>
            <p style={{ margin: 0, fontSize: "13.5px" }}>
              {searchTerm
                ? "Try searching with a different keyword."
                : categoryFilter === "scbc"
                ? "Complaints registered via the SC/BC Cell page will appear here."
                : categoryFilter === "sexual_harassment"
                ? "Complaints registered via Anti Sexual Harassment Cell will appear here."
                : categoryFilter === "alumni"
                ? "Registrations from Alumni Registration form will appear here."
                : categoryFilter === "grievance"
                ? "Grievances submitted from Student Grievance page will appear here."
                : "Inquiries submitted via the Contact page will appear here."}
            </p>
          </div>
        )}

        {!loading &&
          filteredInquiries.map((inq) => {
            const isScbc = isType(inq.type, "scbc");
            const isSexual = isType(inq.type, "sexual_harassment");
            const isAlumni = isType(inq.type, "alumni");
            const isGrievance = isType(inq.type, "grievance");

            let cardClass = "";
            if (isScbc) cardClass = "scbc-card";
            else if (isSexual) cardClass = "sexual-card";
            else if (isAlumni) cardClass = "alumni-card";
            else if (isGrievance) cardClass = "grievance-card";

            return (
              <div
                key={inq._id}
                className={`inquiry-card-item ${
                  inq.status === "unread" ? "unread" : ""
                } ${cardClass}`}
              >
                <div className="inquiry-card-header">
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "6px",
                        flexWrap: "wrap",
                      }}
                    >
                      {isScbc && (
                        <span className="inquiry-type-badge scbc">
                          <FiShield /> Violence against SC/BC
                        </span>
                      )}
                      {isSexual && (
                        <span className="inquiry-type-badge sexual_harassment">
                          <FiAlertTriangle /> SEXUAL HARASSMENT & VIOLENCE
                        </span>
                      )}
                      {isAlumni && (
                        <span className="inquiry-type-badge alumni">
                          <FiAward /> Alumni Registration
                        </span>
                      )}
                      {isGrievance && (
                        <span className="inquiry-type-badge grievance">
                          <FiMessageSquare /> Student’s Grievance
                        </span>
                      )}
                      {!isScbc && !isSexual && !isAlumni && !isGrievance && (
                        <span className="inquiry-type-badge contact">
                          <FiMail /> Contact Inquiry
                        </span>
                      )}

                      {inq.designation && (
                        <span
                          style={{
                            background: "#f7f1e7",
                            color: "#5b381e",
                            padding: "2px 8px",
                            borderRadius: "5px",
                            fontSize: "11px",
                            fontWeight: 700,
                          }}
                        >
                          {inq.designation}
                        </span>
                      )}

                      {isGrievance && inq.department && (
                        <span
                          style={{
                            background: "#e8effc",
                            color: "#1a5596",
                            padding: "2px 8px",
                            borderRadius: "5px",
                            fontSize: "11px",
                            fontWeight: 700,
                          }}
                        >
                          Dept: {inq.department}
                        </span>
                      )}

                      {isAlumni && inq.coursePassed && (
                        <span
                          style={{
                            background: "#fef8e7",
                            color: "#9b720b",
                            padding: "2px 8px",
                            borderRadius: "5px",
                            fontSize: "11px",
                            fontWeight: 700,
                          }}
                        >
                          {inq.coursePassed}{" "}
                          {inq.passingYear ? `(${inq.passingYear})` : ""}
                        </span>
                      )}
                    </div>

                    <h3 className="inquiry-sender-name">
                      {inq.title ? `${inq.title} ` : ""}
                      {inq.name}
                      {inq.district && (
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#8a664e",
                            marginLeft: "8px",
                          }}
                        >
                          <FiMapPin style={{ marginRight: "3px" }} />
                          {inq.district}
                        </span>
                      )}
                      {isAlumni && inq.city && (
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#8a664e",
                            marginLeft: "8px",
                          }}
                        >
                          <FiMapPin style={{ marginRight: "3px" }} />
                          {[inq.city, inq.state].filter(Boolean).join(", ")}
                        </span>
                      )}
                    </h3>

                    <div className="inquiry-meta-row">
                      <span>
                        <FiMail style={{ marginRight: "4px" }} />
                        <a href={`mailto:${inq.email}`}>{inq.email}</a>
                      </span>
                      {inq.phone && (
                        <span>
                          <FiPhone style={{ marginRight: "4px" }} />
                          <a href={`tel:${inq.phone}`}>{inq.phone}</a>
                        </span>
                      )}
                      {inq.altPhone && (
                        <span>
                          <FiPhone style={{ marginRight: "4px" }} />
                          Alt: <a href={`tel:${inq.altPhone}`}>{inq.altPhone}</a>
                        </span>
                      )}
                      {inq.aadhaar && (
                        <span>
                          <strong>Aadhaar:</strong> {inq.aadhaar}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className={`inquiry-status-pill ${inq.status}`}>
                    {inq.status === "unread" ? "● New Submission" : "✓ Reviewed"}
                  </span>
                </div>

                {/* Accused Details for SC/BC and Sexual Harassment Complaints */}
                {(isScbc || isSexual) && inq.accusedName && (
                  <div
                    className="scbc-accused-box"
                    style={
                      isSexual
                        ? {
                            background: "#fff7f8",
                            borderColor: "#f9d0db",
                          }
                        : {}
                    }
                  >
                    <div>
                      <strong style={isSexual ? { color: "#a81c46" } : {}}>
                        Accused Name:
                      </strong>{" "}
                      <span>{inq.accusedName || "—"}</span>
                    </div>
                    <div>
                      <strong style={isSexual ? { color: "#a81c46" } : {}}>
                        Department:
                      </strong>{" "}
                      <span>{inq.accusedDept || "—"}</span>
                    </div>
                    <div>
                      <strong style={isSexual ? { color: "#a81c46" } : {}}>
                        Designation:
                      </strong>{" "}
                      <span>{inq.accusedDesignation || "—"}</span>
                    </div>
                    <div>
                      <strong style={isSexual ? { color: "#a81c46" } : {}}>
                        Relationship:
                      </strong>{" "}
                      <span>{inq.relationship || "—"}</span>
                    </div>
                  </div>
                )}

                {/* Alumni Specific Details Box */}
                {isAlumni && (
                  <div className="alumni-info-box">
                    <div>
                      <strong>Course:</strong>{" "}
                      <span>{inq.coursePassed || "—"}</span>
                    </div>
                    <div>
                      <strong>Passing Year:</strong>{" "}
                      <span>{inq.passingYear || "—"}</span>
                    </div>
                    <div>
                      <strong>Profession:</strong>{" "}
                      <span>{inq.professional || "—"}</span>
                    </div>
                    <div>
                      <strong>Location:</strong>{" "}
                      <span>
                        {[inq.city, inq.state, inq.country]
                          .filter(Boolean)
                          .join(", ") || "—"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Grievance Specific Details Box */}
                {isGrievance && (
                  <div className="grievance-info-box">
                    <div>
                      <strong>Department:</strong>{" "}
                      <span>{inq.department || "General"}</span>
                    </div>
                    {inq.address && (
                      <div>
                        <strong>Address:</strong> <span>{inq.address}</span>
                      </div>
                    )}
                  </div>
                )}

                {inq.subject && (
                  <div className="inquiry-subject">
                    Subject: {inq.subject}
                  </div>
                )}

                <div className="inquiry-body-text">
                  {(isScbc || isSexual) && (
                    <strong
                      style={{
                        color: isSexual ? "#a81c46" : "#772010",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Incident / Complaint Statement:
                    </strong>
                  )}
                  {isGrievance && (
                    <strong
                      style={{
                        color: "#175494",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Grievance Description:
                    </strong>
                  )}
                  {inq.message || "(No additional text provided)"}
                </div>

                <div className="inquiry-card-actions">
                  <span className="inquiry-date">
                    <FiClock style={{ marginRight: "5px" }} />
                    Received on {formatDate(inq.createdAt)}
                  </span>

                  <div className="inquiry-btn-group">
                    <button
                      type="button"
                      className="inquiry-action-btn"
                      onClick={() => setSelectedInquiry(inq)}
                    >
                      <FiEye /> View Full
                    </button>

                    <button
                      type="button"
                      className="inquiry-action-btn"
                      onClick={() => handleToggleStatus(inq._id, inq.status)}
                    >
                      <FiCheckCircle />
                      {inq.status === "unread" ? "Mark Reviewed" : "Mark as New"}
                    </button>

                    <button
                      type="button"
                      className="inquiry-action-btn delete"
                      onClick={() => handleDelete(inq._id)}
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div
          className="inquiry-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedInquiry(null);
          }}
        >
          <div className="inquiry-modal-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color:
                      selectedInquiry.type === "sexual_harassment"
                        ? "#a81c46"
                        : selectedInquiry.type === "scbc"
                        ? "#8f2113"
                        : selectedInquiry.type === "alumni"
                        ? "#946c0b"
                        : selectedInquiry.type === "grievance"
                        ? "#175494"
                        : "#e85c17",
                  }}
                >
                  {selectedInquiry.type === "sexual_harassment" && (
                    <>
                      <FiAlertTriangle /> SEXUAL HARASSMENT & VIOLENCE COMPLAINT
                    </>
                  )}
                  {selectedInquiry.type === "scbc" && (
                    <>
                      <FiShield /> VIOLENCE AGAINST SC/BC COMPLAINT
                    </>
                  )}
                  {selectedInquiry.type === "alumni" && (
                    <>
                      <FiAward /> ALUMNI REGISTRATION DETAILS
                    </>
                  )}
                  {selectedInquiry.type === "grievance" && (
                    <>
                      <FiMessageSquare /> STUDENT’S GRIEVANCE DETAILS
                    </>
                  )}
                  {!selectedInquiry.type ||
                    (selectedInquiry.type === "contact" && (
                      <>
                        <FiMail /> CONTACT INQUIRY DETAILS
                      </>
                    ))}
                </span>
                <h2
                  style={{ margin: "4px 0 0", color: "#4f2812", fontSize: "22px" }}
                >
                  {selectedInquiry.title ? `${selectedInquiry.title} ` : ""}
                  {selectedInquiry.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInquiry(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                  color: "#6b4a33",
                }}
              >
                <FiX />
              </button>
            </div>

            {/* General & Complainant Details Grid */}
            <div
              style={{
                background: "#fffaf4",
                border: "1px solid #eddcca",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "13px",
                marginBottom: "16px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              <div>
                <strong>Full Name:</strong> {selectedInquiry.name}
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${selectedInquiry.email}`}
                  style={{
                    color: "#e85c17",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  {selectedInquiry.email}
                </a>
              </div>
              {selectedInquiry.phone && (
                <div>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    style={{
                      color: "#e85c17",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    {selectedInquiry.phone}
                  </a>
                </div>
              )}
              {selectedInquiry.altPhone && (
                <div>
                  <strong>Alternate Phone:</strong>{" "}
                  <a
                    href={`tel:${selectedInquiry.altPhone}`}
                    style={{
                      color: "#e85c17",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    {selectedInquiry.altPhone}
                  </a>
                </div>
              )}
              {selectedInquiry.designation && (
                <div>
                  <strong>Designation:</strong> {selectedInquiry.designation}
                </div>
              )}
              {selectedInquiry.district && (
                <div>
                  <strong>District:</strong> {selectedInquiry.district}
                </div>
              )}
              {selectedInquiry.aadhaar && (
                <div>
                  <strong>Aadhaar No.:</strong> {selectedInquiry.aadhaar}
                </div>
              )}
              {selectedInquiry.department && (
                <div>
                  <strong>Department:</strong> {selectedInquiry.department}
                </div>
              )}
              <div>
                <strong>Submitted At:</strong>{" "}
                {formatDate(selectedInquiry.createdAt)}
              </div>
              <div>
                <strong>Status:</strong>{" "}
                <span
                  className={`inquiry-status-pill ${selectedInquiry.status}`}
                  style={{ display: "inline-block" }}
                >
                  {selectedInquiry.status === "unread"
                    ? "New Submission"
                    : "Reviewed"}
                </span>
              </div>
            </div>

            {/* Accused Information Box (if SC/BC or Sexual Harassment) */}
            {(selectedInquiry.type === "scbc" ||
              selectedInquiry.type === "sexual_harassment") &&
              selectedInquiry.accusedName && (
                <div
                  style={{
                    background:
                      selectedInquiry.type === "sexual_harassment"
                        ? "#fdf2f4"
                        : "#fbf2f0",
                    border: `1px solid ${
                      selectedInquiry.type === "sexual_harassment"
                        ? "#f7c7d2"
                        : "#f2c7bd"
                    }`,
                    borderRadius: "12px",
                    padding: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      color:
                        selectedInquiry.type === "sexual_harassment"
                          ? "#a81c46"
                          : "#8f2113",
                      fontWeight: 800,
                      fontSize: "13px",
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <FiAlertCircle /> Accused / Respondent Information
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "8px",
                      fontSize: "13px",
                      color: "#4a2414",
                    }}
                  >
                    <div>
                      <strong>Accused Name:</strong>{" "}
                      {selectedInquiry.accusedName || "—"}
                    </div>
                    <div>
                      <strong>Department:</strong>{" "}
                      {selectedInquiry.accusedDept || "—"}
                    </div>
                    <div>
                      <strong>Designation:</strong>{" "}
                      {selectedInquiry.accusedDesignation || "—"}
                    </div>
                    <div>
                      <strong>Working Relationship:</strong>{" "}
                      {selectedInquiry.relationship || "—"}
                    </div>
                  </div>
                </div>
              )}

            {/* Alumni Detailed Information Box */}
            {selectedInquiry.type === "alumni" && (
              <div
                style={{
                  background: "#fdfbed",
                  border: "1px solid #f2e3a8",
                  borderRadius: "12px",
                  padding: "16px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    color: "#946c0b",
                    fontWeight: 800,
                    fontSize: "13px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <FiAward /> Alumni Academic & Professional Details
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#4a3b1c",
                  }}
                >
                  <div>
                    <strong>Course Passed:</strong>{" "}
                    {selectedInquiry.coursePassed || "—"}
                  </div>
                  <div>
                    <strong>Passing Year:</strong>{" "}
                    {selectedInquiry.passingYear || "—"}
                  </div>
                  <div>
                    <strong>Date of Birth:</strong>{" "}
                    {selectedInquiry.dob || "—"}
                  </div>
                  <div>
                    <strong>Current Profession:</strong>{" "}
                    {selectedInquiry.professional || "—"}
                  </div>
                  {selectedInquiry.alternativeEmail && (
                    <div>
                      <strong>Alternative Email:</strong>{" "}
                      {selectedInquiry.alternativeEmail}
                    </div>
                  )}
                  {selectedInquiry.address && (
                    <div style={{ gridColumn: "1 / -1" }}>
                      <strong>Address:</strong> {selectedInquiry.address}
                      {selectedInquiry.city && `, ${selectedInquiry.city}`}
                      {selectedInquiry.state && `, ${selectedInquiry.state}`}
                      {selectedInquiry.pincode &&
                        ` - ${selectedInquiry.pincode}`}
                      {selectedInquiry.country &&
                        `, ${selectedInquiry.country}`}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Message / Statement Description */}
            <div style={{ marginBottom: "20px" }}>
              <strong
                style={{
                  color: "#542c14",
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "13px",
                }}
              >
                {selectedInquiry.type === "sexual_harassment"
                  ? "Sexual Harassment & Violence Complaint Statement:"
                  : selectedInquiry.type === "scbc"
                  ? "Violence against SC/BC Incident Description:"
                  : selectedInquiry.type === "grievance"
                  ? "Student Grievance Statement:"
                  : selectedInquiry.type === "alumni"
                  ? "Professional Details / Remarks:"
                  : "Message Content:"}
              </strong>
              <div
                style={{
                  background: "#fffdf9",
                  border: "1px solid #ebd8bd",
                  borderRadius: "10px",
                  padding: "14px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#3f2616",
                  whiteSpace: "pre-wrap",
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
              >
                {selectedInquiry.message || "(No additional details provided)"}
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(
                    `Regarding your submission at MKJK Mahavidyalaya: ${
                      selectedInquiry.subject || ""
                    }`
                  )}`}
                  className="btn btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  <FiSend /> Reply by Email
                </a>
                {selectedInquiry.phone && (
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="btn btn-light"
                    style={{ textDecoration: "none" }}
                  >
                    <FiPhone /> Call Contact
                  </a>
                )}
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() =>
                    handleToggleStatus(
                      selectedInquiry._id,
                      selectedInquiry.status
                    )
                  }
                >
                  <FiCheckCircle />
                  {selectedInquiry.status === "unread"
                    ? "Mark Reviewed"
                    : "Mark New"}
                </button>
              </div>

              <button
                type="button"
                className="btn btn-light"
                onClick={() => setSelectedInquiry(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
