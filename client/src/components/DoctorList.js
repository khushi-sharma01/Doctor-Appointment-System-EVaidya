import React from "react";
import { useNavigate } from "react-router-dom";

// Functional component for rendering a single doctor in the list
const DoctorList = ({ doctor }) => {
  // Get the navigation function from React Router
  const navigate = useNavigate();

  return (
    <>
      {/* Card representing a doctor with a clickable area */}
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        {/* Card header displaying the doctor's name */}
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        {/* Card body containing additional information about the doctor */}
        <div className="card-body">
          <p>
            <b>Specialization:</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience:</b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Consultation:</b> {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

// Export the DoctorList component for external use
export default DoctorList;
