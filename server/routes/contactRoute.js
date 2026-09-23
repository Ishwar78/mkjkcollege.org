const express = require("express");
const Contact = require("../models/Contact");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// GET /api/contact - fetch contact details
router.get("/", async (req, res) => {
  try {
    let contact = await Contact.findOne();
    if (!contact) {
      contact = await Contact.create({});
    }
    res.json({ success: true, contact });
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/contact - update contact details (admin)
router.put("/", protectAdmin, async (req, res) => {
  try {
    const { phone, email, address, officeHours, mapLink, additionalInfo } = req.body;

    let contact = await Contact.findOne();
    if (!contact) {
      contact = new Contact();
    }

    if (phone !== undefined) contact.phone = phone;
    if (email !== undefined) contact.email = email;
    if (address !== undefined) contact.address = address;
    if (officeHours !== undefined) contact.officeHours = officeHours;
    if (mapLink !== undefined) contact.mapLink = mapLink;
    if (additionalInfo !== undefined) contact.additionalInfo = additionalInfo;

    await contact.save();

    res.json({
      success: true,
      message: "Contact details updated successfully!",
      contact,
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
