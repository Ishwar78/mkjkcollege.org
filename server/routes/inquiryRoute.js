const express = require("express");
const Inquiry = require("../models/Inquiry");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// POST /api/inquiries - Submit an inquiry/form (contact, scbc, sexual_harassment, alumni, grievance)
router.post("/", async (req, res) => {
  try {
    const {
      type = "contact",
      // Common
      email,
      phone,
      mobile,
      subject,
      message,
      description,
      complaint,
      // SC/BC and Sexual Harassment
      complainantName,
      designation,
      aadhaar,
      district,
      accusedDept,
      accusedDepartment,
      accusedName,
      accusedDesignation,
      relationship,
      // Alumni
      title,
      firstName,
      middleName,
      lastName,
      coursePassed,
      passingYear,
      dob,
      alternativeEmail,
      address,
      city,
      state,
      country,
      pincode,
      professional,
      // Grievance
      department,
      altPhone,
    } = req.body;

    let computedName = (req.body.name || complainantName || "").trim();
    if (!computedName && (firstName || lastName)) {
      computedName = [title, firstName, middleName, lastName]
        .filter(Boolean)
        .join(" ")
        .trim();
    }

    const computedEmail = (email || "").trim().toLowerCase();
    const computedPhone = (phone || mobile || "").trim();
    const computedMessage = (
      message ||
      description ||
      complaint ||
      professional ||
      (type === "alumni" ? `Alumni Registration for ${coursePassed || "Course"} (${passingYear || "Year"})` : "")
    ).trim();

    if (!computedName) {
      return res.status(400).json({
        success: false,
        message: "Please provide your Name.",
      });
    }

    if (!computedEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide your Email address.",
      });
    }

    let defaultSubject = "General Inquiry";
    if (type === "scbc") defaultSubject = "Violence against SC/BC Complaint";
    else if (type === "sexual_harassment")
      defaultSubject = "SEXUAL HARASSMENT & VIOLENCE Complaint";
    else if (type === "alumni") defaultSubject = "Alumni Registration";
    else if (type === "grievance") defaultSubject = "Student’s Grievance";

    const inquiry = new Inquiry({
      type,
      name: computedName,
      email: computedEmail,
      phone: computedPhone,
      subject: (subject || "").trim() || defaultSubject,
      message: computedMessage,
      status: "unread",

      // SC/BC & Sexual Harassment fields
      designation: (designation || "").trim(),
      aadhaar: (aadhaar || "").trim(),
      district: (district || "").trim(),
      accusedDept: (accusedDept || accusedDepartment || "").trim(),
      accusedName: (accusedName || "").trim(),
      accusedDesignation: (accusedDesignation || "").trim(),
      relationship: (relationship || "").trim(),

      // Alumni fields
      title: (title || "").trim(),
      firstName: (firstName || "").trim(),
      middleName: (middleName || "").trim(),
      lastName: (lastName || "").trim(),
      coursePassed: (coursePassed || "").trim(),
      passingYear: (passingYear || "").trim(),
      dob: (dob || "").trim(),
      alternativeEmail: (alternativeEmail || "").trim(),
      address: (address || "").trim(),
      city: (city || "").trim(),
      state: (state || "").trim(),
      country: (country || "").trim(),
      pincode: (pincode || "").trim(),
      professional: (professional || "").trim(),

      // Grievance fields
      department: (department || "").trim(),
      altPhone: (altPhone || "").trim(),
    });

    await inquiry.save();

    let successMsg = "Thank you! Your submission has been received successfully.";
    if (type === "scbc") {
      successMsg = "Harassment & Violence against SC/BC complaint registered successfully.";
    } else if (type === "sexual_harassment") {
      successMsg = "Sexual Harassment & Violence complaint registered successfully. The committee will review it.";
    } else if (type === "alumni") {
      successMsg = "Alumni registration submitted successfully. Welcome to MKJK Alumni network!";
    } else if (type === "grievance") {
      successMsg = "Your grievance has been submitted to the Student Grievances Redressal Cell.";
    }

    res.status(201).json({
      success: true,
      message: successMsg,
      inquiry,
    });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit form: " + error.message,
    });
  }
});

// GET /api/inquiries - Fetch inquiries for admin (optionally filtered by type)
router.get("/", protectAdmin, async (req, res) => {
  try {
    const { type } = req.query;
    const filter = {};
    if (
      type &&
      ["contact", "scbc", "sexual_harassment", "alumni", "grievance"].includes(type)
    ) {
      filter.type = type;
    }

    const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 });

    const totalInquiries = await Inquiry.countDocuments();
    const unreadCount = await Inquiry.countDocuments({ status: "unread" });

    const contactCount = await Inquiry.countDocuments({ type: "contact" });
    const unreadContactCount = await Inquiry.countDocuments({
      type: "contact",
      status: "unread",
    });

    const scbcCount = await Inquiry.countDocuments({ type: "scbc" });
    const unreadScbcCount = await Inquiry.countDocuments({
      type: "scbc",
      status: "unread",
    });

    const sexualHarassmentCount = await Inquiry.countDocuments({
      type: "sexual_harassment",
    });
    const unreadSexualHarassmentCount = await Inquiry.countDocuments({
      type: "sexual_harassment",
      status: "unread",
    });

    const alumniCount = await Inquiry.countDocuments({ type: "alumni" });
    const unreadAlumniCount = await Inquiry.countDocuments({
      type: "alumni",
      status: "unread",
    });

    const grievanceCount = await Inquiry.countDocuments({ type: "grievance" });
    const unreadGrievanceCount = await Inquiry.countDocuments({
      type: "grievance",
      status: "unread",
    });

    res.json({
      success: true,
      inquiries,
      unreadCount,
      totalInquiries,
      contactCount,
      unreadContactCount,
      scbcCount,
      unreadScbcCount,
      sexualHarassmentCount,
      unreadSexualHarassmentCount,
      alumniCount,
      unreadAlumniCount,
      grievanceCount,
      unreadGrievanceCount,
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load inquiries: " + error.message,
    });
  }
});

// PATCH /api/inquiries/:id/status - Update inquiry status
router.patch("/:id/status", protectAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ success: false, message: "Inquiry not found." });
    }

    if (status) inquiry.status = status;
    await inquiry.save();

    res.json({
      success: true,
      message: "Status updated successfully.",
      inquiry,
    });
  } catch (error) {
    console.error("Error updating inquiry status:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/inquiries/:id - Delete an inquiry
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ success: false, message: "Inquiry not found." });
    }

    res.json({
      success: true,
      message: "Inquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
