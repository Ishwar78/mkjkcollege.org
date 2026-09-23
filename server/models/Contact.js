const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      default: "01262-274660, 9812152759",
    },
    email: {
      type: String,
      default: "mkjkmrt@gmail.com",
    },
    address: {
      type: String,
      default: "Delhi Road, Rohtak, Haryana – 124001",
    },
    officeHours: {
      type: String,
      default: "Monday – Saturday: 9:00 AM – 5:00 PM",
    },
    mapLink: {
      type: String,
      default:
        "https://www.google.com/maps/search/?api=1&query=Maharani+Kishori+Jat+Kanya+Mahavidyalaya+Rohtak",
    },
    additionalInfo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
