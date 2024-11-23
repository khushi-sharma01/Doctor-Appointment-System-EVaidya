// Importing required models
const appointmentModel = require("../models/appointmentModel");
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");

// Controller to get doctor information by userId
const getDoctorInfoController = async (req, res) => {
  try {
    // Find the doctor using the userId from the request body
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    // Send a successful response with the doctor's information
    res.status(200).send({
      success: true,
      message: "Doctor data fetch success",
      data: doctor,
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching doctor details",
    });
  }
};

// Controller to update doctor profile
const updateProfileController = async (req, res) => {
  try {
    // Find and update the doctor's profile using userId from the request body
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    // Send a successful response with the updated doctor profile
    res.status(201).send({
      success: true,
      message: "Doctor profile updated",
      data: doctor,
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating doctor profile",
      error,
    });
  }
};

// Controller to get a single doctor by doctorId
const getDoctorByIdController = async (req, res) => {
  try {
    // Find the doctor using the doctorId from the request body
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    // Send a successful response with the fetched doctor information
    res.status(200).send({
      success: true,
      message: "Single doctor info fetched",
      data: doctor,
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching single doctor info",
    });
  }
};

// Controller to get all appointments for a specific doctor
const doctorAppointmentsController = async (req, res) => {
  try {
    // Find the doctor using the userId from the request body
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    // Find all appointments associated with the doctor using the doctorId
    const appointments = await appointmentModel.find({
      doctorId: doctor._id,
    });
    // Send a successful response with the fetched appointments
    res.status(200).send({
      success: true,
      message: "Doctor appointments fetch successfully",
      data: appointments,
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching doctor appointments",
    });
  }
};

// Controller to update appointment status
const updateStatusController = async (req, res) => {
  try {
    // Extract appointmentsId and status from the request body
    const { appointmentsId, status } = req.body;
    // Update the status of the appointment using the appointmentsId
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    // Find the corresponding user in the userModel
    const user = await userModel.findOne({ _id: appointments.userId });
    // Access user's notifications
    const notification = user.notification;
    // Push a new notification regarding the appointment status update
    notification.push({
      type: "status-updated",
      message: `Your appointment has been updated to ${status}`,
      onClickPath: "/doctor-appointments",
    });
    // Save the updated user information
    await user.save();
    // Send a successful response
    res.status(200).send({
      success: true,
      message: "Appointment status updated",
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating appointment status",
    });
  }
};

// Exporting controllers for external use
module.exports = {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
};
