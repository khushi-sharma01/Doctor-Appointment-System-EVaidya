import React from "react";

// Spinner component to display a loading spinner
const Spinner = () => {
  return (
    // Container for the spinner, centered horizontally
    <div class="d-flex justify-content-center spinner">
      {/* Actual spinner element */}
      <div class="spinner-border" role="status">
        {/* Visually hidden text for accessibility */}
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

// Export the Spinner component for external use
export default Spinner;
