const mongoose = require("mongoose");

// Define a mongoose schema for the Doctor model
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    specialization: {
      type: String,
      required: [true, "Specialization is required"],
    },
    experience: {
      type: String,
      required: [true, "Experience is required"],
    },
    feesPerConsultation: {
      type: Number,
      required: [true, "Fee is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
      required: [true, "Work timings are required"],
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields with timestamps
);

// Create a mongoose model for the Doctor schema
const doctorModel = mongoose.model("doctors", doctorSchema);

// Export the doctorModel for external use
module.exports = doctorModel;