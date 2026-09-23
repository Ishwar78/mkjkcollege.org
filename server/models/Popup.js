const mongoose = require("mongoose");

const popupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Notice & Announcements",
      trim: true,
    },
    subtitle: {
      type: String,
      default: "Important institutional updates and notifications from MKJK College.",
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "/assets/popup.png",
      trim: true,
    },
    linkUrl: {
      type: String,
      default: "/popup",
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Popup", popupSchema);
