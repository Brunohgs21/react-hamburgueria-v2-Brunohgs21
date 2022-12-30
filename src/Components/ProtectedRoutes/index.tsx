import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const ProtectedRoutes = () => {
  const { food, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return null;
  }

  return food ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};

export default ProtectedRoutes;
