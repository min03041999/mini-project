import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./component/AdminDashboard/AdminDashboard";
import AdminLogin from "./component/AdminLogin/AdminLogin";

const AdminPage = () => {
  const { auth } = useSelector((state) => state.auth);
  if (!auth) {
    return <AdminLogin />;
  }

  return (
    <section className="admin">
      <AdminDashboard />
    </section>
  );
};

export default AdminPage;
