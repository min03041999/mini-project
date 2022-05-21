import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../store/auth";
import "./admin_login.css";
import * as Yup from "yup";

const AdminLogin = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(4, "Password is too short - should be 4 chars minimum."),
  });

  return (
    <div className="main-container">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        <Form className="box" autoComplete="off">
          <div className="input-box">
            <Field type="text" name="username" required />
            <label>Username</label>
            <ErrorMessage
              name="username"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <div className="input-box">
            <Field type="password" name="password" required />
            <label>Password</label>
            <ErrorMessage
              name="password"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <Field type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default AdminLogin;
