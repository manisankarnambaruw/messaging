import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { localStorageKey } from "../constants";

export default function PublicRoute() {
  const username = localStorage.getItem(localStorageKey);

  return !!username ? <Navigate to="/app" /> : <Outlet />;
}
