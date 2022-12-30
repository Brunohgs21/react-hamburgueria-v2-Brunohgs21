import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/index";
import Main from "../Pages/Main/index";
import Register from "../Pages/Register/index";
import React from "react";
import ProtectedRoutes from "../Components/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
