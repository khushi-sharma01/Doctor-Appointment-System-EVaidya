// Importing required models
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");

// Controller to get all users
const getAllUsersController = async (req, res) => {
  try {
    // Fetch all users from the userModel
    const users = await userModel.find({});
    // Send a successful response with the list of users
    res.status(200).send({
      success: true,
      message: "Users data list",
      data: users,
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching users",
      error,
    });
  }
};

// Controller to get all doctors
const getAllDoctorsController = async (req, res) => {
  try {
    // Fetch all doctors from the doctorModel
    const doctors = await doctorModel.find({});
    // Send a successful response with the list of doctors
    res.status(200).send({
      success: true,
      message: "Doctors data list",
      data: doctors,
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting doctors data",
      error,
    });
  }
};

// Controller to change doctor account status
const changeAccountStatusController = async (req, res) => {
  try {
    // Extract doctorId and status from the request body
    const { doctorId, status } = req.body;
    // Update the account status of the doctor in the doctorModel
    const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });
    // Find the corresponding user in the userModel
    const user = await userModel.findOne({ _id: doctor.userId });
    // Access user's notifications
    const notification = user.notification;
    // Push a new notification regarding the doctor account status change
    notification.push({
      type: "doctor-account-request-updated",
      message: `Your Doctor Account Request Has ${status}`,
      onClickPath: "/notification",
    });
    // Update the isDoctor status based on the account approval
    user.isDoctor = status === "approved" ? true : false;
    // Save the updated user information
    await user.save();
    // Send a successful response with the updated doctor data
    res.status(201).send({
      success: true,
      message: "Account status updated",
      data: doctor,
    });
  } catch (error) {
    // Handle errors and send an error response
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in account status update",
      error,
    });
  }
};

// Exporting controllers for external use
module.exports = {
  getAllDoctorsController,
  getAllUsersController,
  changeAccountStatusController,
};
