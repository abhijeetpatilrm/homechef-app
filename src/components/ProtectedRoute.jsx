import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/**
 * Protect routes by requiring user login with optional role
 * Usage: <ProtectedRoute roles={['user','admin']}><YourComponent /></ProtectedRoute>
 */
export default function ProtectedRoute({ children, roles = [] }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Not logged in
    return <Navigate to="/" replace />;
  }
  if (roles.length && !roles.includes(user.role)) {
    // Unauthorized role
    return <Navigate to="/" replace />;
  }
  return children;
}
