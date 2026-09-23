const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoute");
const contactRoutes = require("./routes/contactRoute");
const inquiryRoutes = require("./routes/inquiryRoute");
const popupRoutes = require("./routes/popupRoute");
const seedAdmin = require("./config/seedAdmin");

const path = require("path");

// Load environment variables from server/.env
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB and seed default Admin credentials
connectDB().then(() => {
  seedAdmin();
});

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/popup", popupRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "MKJK College Backend API",
    database: "Connected to MongoDB",
    timestamp: new Date().toISOString(),
  });
});

// Root welcome route
app.get("/", (req, res) => {
  res.send("MKJK Mahavidyalaya API Server is running.");
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`🚀 MKJK Server is running on port ${PORT}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
});
