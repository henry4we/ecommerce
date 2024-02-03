import React from "react";
import { Store } from "../Store";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const {
    state: { userInfo },
  } = useContext(Store);

  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
};

export default AdminRoute;
