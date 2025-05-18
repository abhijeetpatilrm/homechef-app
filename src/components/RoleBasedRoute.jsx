import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Protect routes by role
export default function RoleBasedRoute({ children, allowedRoles = [] }) {
  const { user } = useContext(AuthContext);

  // If user not logged in or role is not in allowedRoles, redirect to home
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
