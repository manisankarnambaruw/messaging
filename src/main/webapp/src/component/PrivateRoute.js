import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { localStorageKey } from "../constants";

export default function PrivateRoute() {
  const username = localStorage.getItem(localStorageKey);

  return !username ? <Navigate to="/" /> : <Outlet />;
}
