import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data"; // Importing menu data

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

// Layout component responsible for rendering the main structure of the application
const Layout = ({ children }) => {
  // Accessing user data from Redux store
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // Doctor-specific menu
  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];

  // Rendering menu list based on user role
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  return (
    <>
      {/* Main container for the layout */}
      <div className="main">
        <div className="layout">
          {/* Sidebar section */}
          <div className="sidebar">
            {/* Logo and branding */}
            <div className="logo">
              {/* Logo image */}
              <span>
                <center>
                  <img
                    style={{ marginTop: "7px" }}
                    color="white"
                    src="https://www.paruluniversity.ac.in/app/202008/images/course_outcome/770063Electrocardiography%20Technician.png"
                    width="200"
                    align=""
                  />
                </center>
                <h1 className="text-light">E-VAIDYA</h1>{" "}
                <h6>connect with convenience</h6>
              </span>
              <hr />
            </div>

            {/* Menu items */}
            <div className="menu">
              {/* Mapping over SidebarMenu to render menu items */}
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}

              {/* Logout menu item */}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>

          {/* Main content section */}
          <div className="content">
            {/* Header section */}
            <div className="header">
              <div
                className="header-content"
                style={{ cursor: "pointer", color: "white" }}
              >
                {/* Badge for notifications */}
                <Badge
                  count={user && user.notifcation.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  {/* Bell icon */}
                  <i
                    className="fa-solid fa-bell"
                    style={{ color: "white" }}
                  ></i>
                </Badge>

                {/* Link to user profile */}
                <Link to="/profile" style={{ color: "white" }}>
                  {user?.name}
                </Link>
              </div>
            </div>

            {/* Body section */}
            <div className="body" style={{ backgroundColor: "#E0F4FF" }}>
              {/* Render the children components */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the Layout component for external use
export default Layout;
