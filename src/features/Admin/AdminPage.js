import React from "react";
import AdminLogin from "./component/AdminLogin/AdminLogin";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  // console.log({ auth });
  if (!auth) {
    return <AdminLogin />;
  }

  return (
    <div>
      Hi, {auth.username}!
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default AdminPage;
