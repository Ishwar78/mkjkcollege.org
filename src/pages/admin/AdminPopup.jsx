import React, { useState, useEffect, useRef } from "react";
import AdminLayout from "./AdminLayout";
import api, { getAssetUrl } from "../../lib/api";
import {
  FiImage,
  FiUploadCloud,
  FiCheckCircle,
  FiAlertCircle,
  FiEye,
  FiTrash2,
  FiRotateCcw,
  FiExternalLink,
  FiSave,
  FiInfo,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";
import "./AdminPopup.css";

export default function AdminPopup() {
  const [popup, setPopup] = useState({
    title: "Notice & Announcements",
    subtitle: "Important institutional updates and notifications from MKJK College.",
    imageUrl: "/assets/popup.png",
    linkUrl: "/popup",
    isActive: true,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [message, setMessage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);

  // Fetch current popup settings on mount
  useEffect(() => {
    fetchPopup();
  }, []);

  const fetchPopup = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/popup");
      if (res.success && res.popup) {
        setPopup(res.popup);
      }
    } catch (err) {
      console.error("Failed to load popup details:", err);
      setMessage({
        type: "error",
        text: "Failed to load popup details: " + err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle local file selection
  const handleFileChange = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage({
        type: "error",
        text: "Please select an image file (.png, .jpg, .jpeg, .webp).",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setMessage({
        type: "error",
        text: "Image file size must be less than 10MB.",
      });
      return;
    }

    setSelectedFile(file);
    const localUrl = URL.createObjectURL(file);
    setPreviewUrl(localUrl);
    setMessage(null);
  };

  // Drag & Drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Upload image to backend
  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage({
        type: "error",
        text: "Please select or drop an image first.",
      });
      return;
    }

    try {
      setUploading(true);
      setMessage(null);

      const formData = new FormData();
      formData.append("image", selectedFile);

      const res = await api.upload("/api/popup/upload", formData);

      if (res.success) {
        setPopup(res.popup);
        setSelectedFile(null);
        setPreviewUrl(null);
        setMessage({
          type: "success",
          text: "🎉 Pop-up image uploaded and published successfully!",
        });
      }
    } catch (err) {
      console.error("Upload error:", err);
      setMessage({
        type: "error",
        text: "Failed to upload image: " + err.message,
      });
    } finally {
      setUploading(false);
    }
  };

  // Toggle Popup Active Status
  const handleToggleActive = async () => {
    try {
      const newActive = !popup.isActive;
      setPopup((prev) => ({ ...prev, isActive: newActive }));

      const res = await api.put("/api/popup", {
        isActive: newActive,
      });

      if (res.success) {
        setMessage({
          type: "success",
          text: `Pop-up is now ${newActive ? "ENABLED & ACTIVE" : "DISABLED (Hidden from visitors)"}.`,
        });
      }
    } catch (err) {
      console.error("Failed to toggle status:", err);
      setMessage({
        type: "error",
        text: "Failed to update status: " + err.message,
      });
    }
  };

  // Save Settings (Title, Subtitle, LinkUrl)
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      setMessage(null);

      const res = await api.put("/api/popup", {
        title: popup.title,
        subtitle: popup.subtitle,
        linkUrl: popup.linkUrl,
        isActive: popup.isActive,
      });

      if (res.success) {
        setPopup(res.popup);
        setMessage({
          type: "success",
          text: "Pop-up settings saved successfully!",
        });
      }
    } catch (err) {
      console.error("Save settings error:", err);
      setMessage({
        type: "error",
        text: "Failed to save settings: " + err.message,
      });
    } finally {
      setSaving(false);
    }
  };

  // Reset to default image
  const handleReset = async () => {
    if (
      !window.confirm(
        "Are you sure you want to reset the popup image to the default notice banner?"
      )
    ) {
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/api/popup/reset", {});
      if (res.success) {
        setPopup(res.popup);
        setSelectedFile(null);
        setPreviewUrl(null);
        setMessage({
          type: "success",
          text: "Pop-up image restored to default notice.",
        });
      }
    } catch (err) {
      console.error("Reset error:", err);
      setMessage({
        type: "error",
        text: "Failed to reset popup: " + err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const activeDisplayUrl = previewUrl || getAssetUrl(popup.imageUrl);

  return (
    <AdminLayout>
      <div className="admin-popup-page">
        {/* Header Bar */}
        <div className="admin-popup-header">
          <div>
            <div className="admin-popup-breadcrumb">
              <span>Admin Panel</span>
              <span>/</span>
              <span>Notice & Pop-up</span>
            </div>
            <h1>Website Pop-up Manager</h1>
            <p>
              Manage the announcement modal that pops up on the Home Page and its notice banner image.
            </p>
          </div>

          <div className="admin-popup-top-actions">
            <a
              href="/popup"
              target="_blank"
              rel="noreferrer"
              className="admin-popup-link-btn"
            >
              <FiExternalLink /> View Public Notice Page
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="admin-popup-link-btn primary"
            >
              <FiEye /> View Home Page
            </a>
          </div>
        </div>

        {/* Alert Notifications */}
        {message && (
          <div className={`admin-popup-alert ${message.type}`}>
            {message.type === "success" ? (
              <FiCheckCircle className="alert-icon" />
            ) : (
              <FiAlertCircle className="alert-icon" />
            )}
            <span>{message.text}</span>
            <button
              type="button"
              className="alert-close"
              onClick={() => setMessage(null)}
            >
              ✕
            </button>
          </div>
        )}

        {/* Status Toggle Card */}
        <div className="admin-popup-status-card">
          <div className="status-info">
            <div className="status-badge-wrap">
              <span
                className={`status-pill ${
                  popup.isActive ? "status-active" : "status-inactive"
                }`}
              >
                <span className="status-dot" />
                {popup.isActive ? "Pop-up is Currently ACTIVE" : "Pop-up is DISABLED"}
              </span>
            </div>
            <h3>Announcement Pop-up Display Status</h3>
            <p>
              When active, visitors opening the MKJK home page will automatically see this notice modal.
            </p>
          </div>

          <button
            type="button"
            className={`status-toggle-btn ${popup.isActive ? "active" : "inactive"}`}
            onClick={handleToggleActive}
          >
            {popup.isActive ? <FiToggleRight /> : <FiToggleLeft />}
            <span>{popup.isActive ? "Disable Pop-up" : "Enable Pop-up"}</span>
          </button>
        </div>

        {/* Main Grid: Upload & Settings (Left) vs Live Preview (Right) */}
        <div className="admin-popup-grid">
          {/* Left Column: Upload & Settings */}
          <div className="admin-popup-forms-col">
            {/* 1. Image Upload Box */}
            <div className="admin-popup-card">
              <div className="card-header">
                <div className="card-title">
                  <FiUploadCloud className="card-icon" />
                  <div>
                    <h3>Upload Pop-up Image</h3>
                    <span>Upload a high-quality notice banner, poster, or circular</span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                {/* Drag and Drop Zone */}
                <div
                  className={`upload-dropzone ${dragActive ? "drag-active" : ""} ${
                    selectedFile ? "has-file" : ""
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileChange(e.target.files[0])}
                  />

                  <div className="dropzone-content">
                    <div className="upload-icon-circle">
                      <FiUploadCloud />
                    </div>
                    {selectedFile ? (
                      <div className="selected-file-details">
                        <strong>{selectedFile.name}</strong>
                        <span>
                          {(selectedFile.size / 1024).toFixed(1)} KB — Ready to upload
                        </span>
                        <span className="click-to-change">
                          Click or drop another file to change
                        </span>
                      </div>
                    ) : (
                      <>
                        <h4>Drag & drop new pop-up image here</h4>
                        <p>or browse from your device</p>
                        <span className="dropzone-hint">
                          Recommended format: PNG, JPG, or WEBP (up to 10MB)
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Upload Action Bar */}
                <div className="upload-action-bar">
                  {selectedFile && (
                    <button
                      type="button"
                      className="btn-upload-publish"
                      onClick={handleUpload}
                      disabled={uploading}
                    >
                      <FiCheckCircle />
                      {uploading ? "Uploading & Saving..." : "Publish This Image Now"}
                    </button>
                  )}

                  {selectedFile && (
                    <button
                      type="button"
                      className="btn-cancel-file"
                      onClick={() => {
                        setSelectedFile(null);
                        setPreviewUrl(null);
                      }}
                    >
                      <FiTrash2 /> Cancel Selection
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn-reset-default"
                    onClick={handleReset}
                    title="Restore original college notice image"
                  >
                    <FiRotateCcw /> Reset to Default Image
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Notice Content Settings Form */}
            <div className="admin-popup-card">
              <div className="card-header">
                <div className="card-title">
                  <FiInfo className="card-icon" />
                  <div>
                    <h3>Pop-up Details & Redirect Link</h3>
                    <span>Configure modal title and target button destination</span>
                  </div>
                </div>
              </div>

              <form className="card-body" onSubmit={handleSaveSettings}>
                <div className="form-group">
                  <label htmlFor="popupTitle">Notice Title</label>
                  <input
                    id="popupTitle"
                    type="text"
                    value={popup.title}
                    onChange={(e) =>
                      setPopup({ ...popup, title: e.target.value })
                    }
                    placeholder="e.g. Notice & Announcements"
                    required
                  />
                  <small>Displayed at the top of the announcement modal and page.</small>
                </div>

                <div className="form-group">
                  <label htmlFor="popupSubtitle">Subtitle / Short Description</label>
                  <textarea
                    id="popupSubtitle"
                    rows="2"
                    value={popup.subtitle}
                    onChange={(e) =>
                      setPopup({ ...popup, subtitle: e.target.value })
                    }
                    placeholder="Short description for the announcement"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="popupLink">Target Redirect URL</label>
                  <input
                    id="popupLink"
                    type="text"
                    value={popup.linkUrl}
                    onChange={(e) =>
                      setPopup({ ...popup, linkUrl: e.target.value })
                    }
                    placeholder="/popup or full URL https://..."
                    required
                  />
                  <small>
                    The "View Full Page" button in the popup links to this URL (Default: <code>/popup</code>).
                  </small>
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className="btn-save-settings"
                    disabled={saving}
                  >
                    <FiSave />
                    {saving ? "Saving Changes..." : "Save Pop-up Details"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Live Popup Preview */}
          <div className="admin-popup-preview-col">
            <div className="admin-popup-card sticky-preview">
              <div className="card-header">
                <div className="card-title">
                  <FiEye className="card-icon" />
                  <div>
                    <h3>Live Modal Preview</h3>
                    <span>How visitors see this announcement on the home page</span>
                  </div>
                </div>

                {previewUrl && (
                  <span className="preview-badge-unsaved">Preview (Unsaved)</span>
                )}
              </div>

              <div className="card-body preview-container">
                {/* Mock Popup Window */}
                <div className="mock-popup-window">
                  {/* Mock Window Header */}
                  <div className="mock-popup-header">
                    <div className="mock-badge">
                      <span className="mock-pulse" />
                      <span>Announcement</span>
                    </div>
                    <span className="mock-collegename">MKJK Mahavidyalaya</span>
                    <button type="button" className="mock-close">✕</button>
                  </div>

                  {/* Mock Image Body */}
                  <div className="mock-popup-body">
                    <img
                      src={activeDisplayUrl}
                      alt="Pop-up preview"
                      className="mock-popup-image"
                      onError={(e) => {
                        e.target.src = "/assets/popup.png";
                      }}
                    />
                  </div>

                  {/* Mock Footer */}
                  <div className="mock-popup-footer">
                    <span className="mock-footer-text">
                      📢 {popup.title || "Latest College Update"}
                    </span>
                    <div className="mock-footer-buttons">
                      <span className="mock-btn primary">View Full Page</span>
                      <span className="mock-btn secondary">Download</span>
                      <span className="mock-btn outline">Close</span>
                    </div>
                  </div>
                </div>

                {/* Current Image Details */}
                <div className="preview-image-meta">
                  <div className="meta-item">
                    <span>Source:</span>
                    <strong>
                      {popup.imageUrl.startsWith("/uploads/")
                        ? "Uploaded Custom Image"
                        : "Default Asset"}
                    </strong>
                  </div>
                  <div className="meta-item">
                    <span>Active File Path:</span>
                    <code title={popup.imageUrl}>{popup.imageUrl}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
