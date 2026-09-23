const mongoose = require("mongoose");
const dns = require("dns");

// Windows DNS fix for MongoDB SRV resolution
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (err) {
  console.warn("DNS server setup notice:", err.message);
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`✅ MongoDB Connected: ${conn.connection.host} (Database: ${conn.connection.name})`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
