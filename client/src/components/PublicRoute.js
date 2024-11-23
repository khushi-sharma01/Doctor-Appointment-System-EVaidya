import React from "react";
import { Navigate } from "react-router-dom";

// PublicRoute component to handle routes accessible to unauthenticated users
export default function PublicRoute({ children }) {
  // Check if a valid token exists; if true, redirect to the home page, otherwise render children
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
