import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiX, FiDownload, FiExternalLink, FiBell } from "react-icons/fi";
import "./PopupModal.css";

export default function PopupModal({
  isOpen,
  onClose,
  imageSrc = "/assets/popup.png",
  title = "Notice & Announcements",
  linkUrl = "/popup",
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mkjk-popup-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Important Announcement Popup"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="mkjk-popup-card">
        {/* Header Bar */}
        <div className="mkjk-popup-header">
          <div className="mkjk-popup-badge-group">
            <span className="mkjk-popup-badge">
              <span className="mkjk-popup-badge-pulse" />
              <FiBell style={{ fontSize: "12px" }} />
              Announcement
            </span>
            <span className="mkjk-popup-collegename">
              MKJK Mahavidyalaya, Rohtak
            </span>
          </div>

          <button
            type="button"
            className="mkjk-popup-close-btn"
            onClick={onClose}
            aria-label="Close Notice Popup"
          >
            <FiX />
          </button>
        </div>

        {/* Content Image */}
        <div className="mkjk-popup-body">
          <div className="mkjk-popup-img-wrap">
            <img
              src={imageSrc}
              alt={title}
              className="mkjk-popup-image"
              onError={(e) => {
                // Fallback if popup.png is not found
                if (e.target.src.indexOf("popup-notice.png") === -1) {
                  e.target.src = "/assets/popup-notice.png";
                } else {
                  e.target.src = "/assets/MAHARANI-KISHORI.png";
                }
              }}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mkjk-popup-footer">
          <div className="mkjk-popup-info">
            <span>📢 Latest College Update</span>
          </div>

          <div className="mkjk-popup-actions">
            <Link
              to={linkUrl}
              className="mkjk-popup-btn mkjk-popup-btn-page"
              onClick={onClose}
            >
              <FiExternalLink />
              View Full Page
            </Link>

            <a
              href={imageSrc}
              download="MKJK-Notice.png"
              className="mkjk-popup-btn mkjk-popup-btn-download"
            >
              <FiDownload />
              Download
            </a>

            <button
              type="button"
              className="mkjk-popup-btn mkjk-popup-btn-close"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
