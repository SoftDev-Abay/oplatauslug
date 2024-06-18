import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RoleRedirect() {
  const { isAdmin } = useAuth();
  const roleRedirect = {
    admin: "/admin-panel/city",
    cashier: "/cashier",
  };

  const userRole = isAdmin ? "admin" : "cashier";

  return <Navigate to={roleRedirect[userRole]} replace />;
}

export default RoleRedirect;
