import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSave,
  FiRefreshCw,
  FiExternalLink,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import AdminLayout from "./AdminLayout";
import api from "../../lib/api";
import "./AdminContact.css";

export default function AdminContact() {
  const [formData, setFormData] = useState({
    phone: "01262-274660, 9812152759",
    email: "mkjkmrt@gmail.com",
    address: "Delhi Road, Rohtak, Haryana – 124001",
    officeHours: "Monday – Saturday: 9:00 AM – 5:00 PM",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Maharani+Kishori+Jat+Kanya+Mahavidyalaya+Rohtak",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchContactDetails();
  }, []);

  const fetchContactDetails = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/contact");
      if (res && res.contact) {
        setFormData({
          phone: res.contact.phone || "",
          email: res.contact.email || "",
          address: res.contact.address || "",
          officeHours: res.contact.officeHours || "",
          mapLink: res.contact.mapLink || "",
          additionalInfo: res.contact.additionalInfo || "",
        });
      }
    } catch (err) {
      console.warn("Could not fetch contact details from server:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await api.put("/api/contact", formData);
      if (res && res.success) {
        setMessage({
          type: "success",
          text: "Contact details updated successfully in the database!",
        });
      } else {
        setMessage({
          type: "error",
          text: res.message || "Failed to update contact details.",
        });
      }
    } catch (err) {
      console.error("Error updating contact details:", err);
      setMessage({
        type: "error",
        text: err.message || "Server error while saving contact details.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="admin-head">
        <div>
          <h1>Contact Page Management</h1>
          <p>
            Update official phone numbers, email addresses, college location, and
            office hours displayed on the public Contact page.
          </p>
        </div>

        <Link
          to="/contact"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light"
          style={{ textDecoration: "none" }}
        >
          <FiExternalLink />
          View Live Contact Page
        </Link>
      </div>

      <div className="admin-work-grid">
        {/* Left Panel: Edit Form */}
        <section className="admin-panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h3 style={{ margin: 0 }}>Edit Contact Information</h3>
            {loading && (
              <span style={{ fontSize: "12px", color: "#8e6c4e" }}>
                Loading details...
              </span>
            )}
          </div>

          {message.text && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                borderRadius: "10px",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "600",
                background:
                  message.type === "success" ? "#edf9f2" : "#fdf0ed",
                color:
                  message.type === "success" ? "#158a5b" : "#c53414",
                border: `1px solid ${
                  message.type === "success" ? "#b7ebd0" : "#f9cac0"
                }`,
              }}
            >
              {message.type === "success" ? <FiCheck /> : <FiAlertCircle />}
              <span>{message.text}</span>
            </div>
          )}

          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="field">
              <label>
                <FiPhone style={{ marginRight: "6px" }} />
                Phone Numbers (Separated by commas)
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 01262-274660, 9812152759"
                required
              />
            </div>

            <div className="field">
              <label>
                <FiMail style={{ marginRight: "6px" }} />
                Official Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. mkjkmrt@gmail.com"
                required
              />
            </div>

            <div className="field">
              <label>
                <FiMapPin style={{ marginRight: "6px" }} />
                College Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Delhi Road, Rohtak, Haryana – 124001"
                rows={2}
                style={{ minHeight: "80px" }}
                required
              />
            </div>

            <div className="field">
              <label>
                <FiClock style={{ marginRight: "6px" }} />
                Office Working Hours
              </label>
              <input
                type="text"
                name="officeHours"
                value={formData.officeHours}
                onChange={handleChange}
                placeholder="e.g. Monday – Saturday: 9:00 AM – 5:00 PM"
                required
              />
            </div>

            <div className="field">
              <label>Google Maps Direction Link</label>
              <input
                type="url"
                name="mapLink"
                value={formData.mapLink}
                onChange={handleChange}
                placeholder="https://maps.google.com/..."
              />
            </div>

            <div className="field">
              <label>Additional Notice / Info (Optional)</label>
              <input
                type="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="e.g. Closed on 2nd Saturdays and Gazetted Holidays"
              />
            </div>

            <div className="admin-actions" style={{ marginTop: "10px" }}>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={saving}
              >
                <FiSave />
                {saving ? "Saving Changes..." : "Save Contact Details"}
              </button>
              <button
                className="btn btn-light"
                type="button"
                onClick={fetchContactDetails}
                disabled={loading}
              >
                <FiRefreshCw />
                Reload from Database
              </button>
            </div>
          </form>
        </section>

        {/* Right Panel: Live Preview & Notes */}
        <aside>
          <section className="admin-panel" style={{ marginTop: 0 }}>
            <h3>Live Preview</h3>
            <p style={{ fontSize: "12px", color: "#7a624f", margin: "0 0 16px" }}>
              This is how your contact details appear to website visitors.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#fffaf0",
                border: "1px solid #ebd9bd",
                borderRadius: "14px",
                padding: "16px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "#e85c17",
                    textTransform: "uppercase",
                  }}
                >
                  Visit Us
                </span>
                <p style={{ margin: "3px 0 0", fontWeight: "700", color: "#3f2616", fontSize: "13px" }}>
                  {formData.address || "Delhi Road, Rohtak, Haryana"}
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "#e85c17",
                    textTransform: "uppercase",
                  }}
                >
                  Call Us
                </span>
                <p style={{ margin: "3px 0 0", fontWeight: "700", color: "#3f2616", fontSize: "13px" }}>
                  {formData.phone || "01262-274660"}
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "#e85c17",
                    textTransform: "uppercase",
                  }}
                >
                  Email Us
                </span>
                <p style={{ margin: "3px 0 0", fontWeight: "700", color: "#3f2616", fontSize: "13px" }}>
                  {formData.email || "mkjkmrt@gmail.com"}
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "#e85c17",
                    textTransform: "uppercase",
                  }}
                >
                  Office Hours
                </span>
                <p style={{ margin: "3px 0 0", fontWeight: "700", color: "#3f2616", fontSize: "13px" }}>
                  {formData.officeHours || "Monday - Saturday: 9:00 AM - 5:00 PM"}
                </p>
              </div>
            </div>
          </section>

          <section className="admin-panel" style={{ marginTop: "18px" }}>
            <h3>Help & Guidelines</h3>
            <div className="note">
              <strong>Instant Updates</strong>
              <p>
                When you click "Save Contact Details", the public Contact page updates
                immediately without rebuilding the app.
              </p>
            </div>
            <div className="note">
              <strong>Multiple Phone Numbers</strong>
              <p>
                You can write multiple numbers separated by commas. They will be formatted
                cleanly on the public site.
              </p>
            </div>
            <div className="note" style={{ borderBottom: "none" }}>
              <strong>Inquiries</strong>
              <p>
                Student messages sent from the contact form are saved in the{" "}
                <Link to="/admin/inquiries" style={{ color: "#e85c17", fontWeight: 700 }}>
                  Inquiries Section
                </Link>.
              </p>
            </div>
          </section>
        </aside>
      </div>
    </AdminLayout>
  );
}
