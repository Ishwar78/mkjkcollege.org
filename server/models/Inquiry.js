const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["contact", "scbc", "sexual_harassment", "alumni", "grievance"],
      default: "contact",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      default: "General Inquiry",
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["unread", "read", "replied"],
      default: "unread",
    },
    // Fields for SC/BC and Sexual Harassment Complaints
    designation: {
      type: String,
      trim: true,
      default: "",
    },
    aadhaar: {
      type: String,
      trim: true,
      default: "",
    },
    district: {
      type: String,
      trim: true,
      default: "",
    },
    accusedDept: {
      type: String,
      trim: true,
      default: "",
    },
    accusedName: {
      type: String,
      trim: true,
      default: "",
    },
    accusedDesignation: {
      type: String,
      trim: true,
      default: "",
    },
    relationship: {
      type: String,
      trim: true,
      default: "",
    },
    // Fields for Alumni Registration
    title: {
      type: String,
      trim: true,
      default: "",
    },
    firstName: {
      type: String,
      trim: true,
      default: "",
    },
    middleName: {
      type: String,
      trim: true,
      default: "",
    },
    lastName: {
      type: String,
      trim: true,
      default: "",
    },
    coursePassed: {
      type: String,
      trim: true,
      default: "",
    },
    passingYear: {
      type: String,
      trim: true,
      default: "",
    },
    dob: {
      type: String,
      trim: true,
      default: "",
    },
    alternativeEmail: {
      type: String,
      trim: true,
      default: "",
    },
    address: {
      type: String,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      trim: true,
      default: "",
    },
    state: {
      type: String,
      trim: true,
      default: "",
    },
    country: {
      type: String,
      trim: true,
      default: "",
    },
    pincode: {
      type: String,
      trim: true,
      default: "",
    },
    professional: {
      type: String,
      trim: true,
      default: "",
    },
    // Fields for Student Grievances
    department: {
      type: String,
      trim: true,
      default: "",
    },
    altPhone: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
