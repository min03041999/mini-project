import React from "react";
import { useSelector } from "react-redux";
import AdminHeader from "./component/AdminHeader/AdminHeader";
import AdminLogin from "./component/AdminLogin/AdminLogin";

const AdminPage = () => {
  // const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  // console.log({ auth });
  if (!auth) {
    return <AdminLogin />;
  }

  return (
    // <div>
    //   Hi, {auth.username}!
    //   <button onClick={() => dispatch(logout())}>Logout</button>
    // </div>
    <section className="admin">
      <AdminHeader />
    </section>
  );
};

export default AdminPage;
