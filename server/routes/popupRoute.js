const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Popup = require("../models/Popup");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Ensure upload directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueName = `popup-${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`;
    cb(null, uniqueName);
  },
});

// File filter for images only
const fileFilter = (req, file, cb) => {
  const allowedExtensions = /jpeg|jpg|png|webp|gif/;
  const extname = allowedExtensions.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedExtensions.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error("Only image files (.jpg, .jpeg, .png, .webp, .gif) are allowed!"));
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: fileFilter,
});

// Helper: Get or create default popup document
async function getOrCreatePopup() {
  let popup = await Popup.findOne();
  if (!popup) {
    popup = await Popup.create({
      title: "Notice & Announcements",
      subtitle: "Important institutional updates and notifications from MKJK College.",
      imageUrl: "/assets/popup.png",
      linkUrl: "/popup",
      isActive: true,
    });
  }
  return popup;
}

// GET /api/popup - Fetch popup settings (Public)
router.get("/", async (req, res) => {
  try {
    const popup = await getOrCreatePopup();
    res.json({ success: true, popup });
  } catch (error) {
    console.error("Error fetching popup:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/popup/upload - Upload new popup image (Admin)
router.post("/upload", protectAdmin, (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      console.error("Multer upload error:", err);
      return res.status(400).json({
        success: false,
        message: err.message || "Failed to upload image file.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided. Please choose an image to upload.",
      });
    }

    try {
      const imageUrl = `/uploads/${req.file.filename}`;
      const popup = await getOrCreatePopup();

      popup.imageUrl = imageUrl;
      popup.isActive = true; // Auto-activate on new upload
      await popup.save();

      res.json({
        success: true,
        message: "Popup image uploaded and updated successfully!",
        imageUrl,
        popup,
      });
    } catch (saveError) {
      console.error("Error saving popup with uploaded image:", saveError);
      res.status(500).json({
        success: false,
        message: "Failed to save popup info: " + saveError.message,
      });
    }
  });
});

// PUT /api/popup - Update popup details & active state (Admin)
router.put("/", protectAdmin, async (req, res) => {
  try {
    const { title, subtitle, imageUrl, linkUrl, isActive } = req.body;
    const popup = await getOrCreatePopup();

    if (title !== undefined) popup.title = title.trim();
    if (subtitle !== undefined) popup.subtitle = subtitle.trim();
    if (imageUrl !== undefined) popup.imageUrl = imageUrl.trim();
    if (linkUrl !== undefined) popup.linkUrl = linkUrl.trim();
    if (isActive !== undefined) popup.isActive = Boolean(isActive);

    await popup.save();

    res.json({
      success: true,
      message: "Popup settings updated successfully!",
      popup,
    });
  } catch (error) {
    console.error("Error updating popup:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/popup/reset - Reset popup image to default /assets/popup.png (Admin)
router.post("/reset", protectAdmin, async (req, res) => {
  try {
    const popup = await getOrCreatePopup();
    popup.imageUrl = "/assets/popup.png";
    popup.title = "Notice & Announcements";
    popup.linkUrl = "/popup";
    popup.isActive = true;
    await popup.save();

    res.json({
      success: true,
      message: "Popup image reset to default banner.",
      popup,
    });
  } catch (error) {
    console.error("Error resetting popup:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
