// User menu for regular users
export const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house", // Home icon
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list", // List icon for appointments
  },
  {
    name: "Apply Doctor",
    path: "/apply-doctor",
    icon: "fa-solid fa-user-doctor", // Doctor icon for applying
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user", // User profile icon
  },
];

// Admin menu for administrators
export const adminMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house", // Home icon
  },
  {
    name: "Doctors",
    path: "/admin/doctors",
    icon: "fa-solid fa-user-doctor", // Doctor icon for managing doctors
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "fa-solid fa-user", // User icon for managing users
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user", // User profile icon
  },
];
