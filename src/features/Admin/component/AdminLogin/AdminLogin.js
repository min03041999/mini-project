import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../store/auth";
import "./admin_login.css";

const AdminLogin = () => {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        <Form className="box">
          <div className="input-box">
            <Field type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <Field type="password" name="password" required />
            <label>Password</label>
          </div>
          <Field type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default AdminLogin;
