const Admin = require("../models/Admin");

const seedAdmin = async () => {
  try {
    const email = "admin@mkjkcollege.org";
    const rawPassword = "MKJKADMIN@2026";

    let admin = await Admin.findOne({ email });
    if (!admin) {
      admin = new Admin({
        email,
        password: rawPassword,
        name: "MKJK Super Admin",
        role: "superadmin",
      });
      await admin.save();
      console.log(`✅ [SEED] Admin created successfully: ${email}`);
    } else {
      // Check if current password matches MKJKADMIN@2026
      const isMatch = await admin.matchPassword(rawPassword);
      if (!isMatch) {
        admin.password = rawPassword;
        await admin.save();
        console.log(`✅ [SEED] Admin password updated to latest for: ${email}`);
      } else {
        console.log(`ℹ️ [SEED] Admin account ready: ${email}`);
      }
    }
  } catch (error) {
    console.error("❌ [SEED] Error initializing admin:", error.message);
  }
};

module.exports = seedAdmin;
