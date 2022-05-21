import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/auth";
import "./admin-header.css";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="admin-header">
        <h2>Dashboard</h2>
        Hi, {auth.username}!
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
};

export default AdminHeader;
