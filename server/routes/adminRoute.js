const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Generate JWT token helper
const generateToken = (admin) => {
  return jwt.sign(
    { id: admin._id, email: admin.email, role: admin.role },
    process.env.JWT_SECRET || "mkjk_admin_jwt_secret_key_2026",
    { expiresIn: "7d" }
  );
};

// POST /api/admin/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Find admin by email (case-insensitive)
    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid admin email or password.",
      });
    }

    // Match password
    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid admin email or password.",
      });
    }

    // Create token
    const token = generateToken(admin);

    return res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during login: " + error.message,
    });
  }
});

// GET /api/admin/me
router.get("/me", protectAdmin, async (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});

module.exports = router;
