import React from "react";
import { useSelector } from "react-redux";
import AdminHeader from "./component/AdminHeader/AdminHeader";
import AdminLogin from "./component/AdminLogin/AdminLogin";

const AdminPage = () => {
  const { auth } = useSelector((state) => state.auth);
  if (!auth) {
    return <AdminLogin />;
  }

  return (
    <section className="admin">
      <AdminHeader />
    </section>
  );
};

export default AdminPage;
