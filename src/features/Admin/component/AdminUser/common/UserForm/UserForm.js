import { Col, Row } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, FormGroup } from "react-bootstrap";
import * as Yup from "yup";

import AdminModal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../../../../common/AdminModal/AdminModal";

const UserForm = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(4, "Password is too short - should be 4 chars minimum.")
      .required("Required"),
    name: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
    }),
    address: Yup.object({
      city: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
      zipcode: Yup.string().required("Required"),
      geolocation: Yup.object({
        lat: Yup.string().required("Required"),
        long: Yup.string().required("Required"),
      }),
    }),
    phone: Yup.string().required("Required").min(8),
  });
  // console.log(props);
  const user = props.user;
  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  });

  useEffect(() => {
    setFormValues({
      ...formValues,
      email: user ? user?.email : "",
      username: user ? user?.username : "",
      password: user ? user?.password : "",
      name: {
        firstname: user ? user?.name.firstname : "",
        lastname: user ? user?.name.lastname : "",
      },
      address: {
        city: user ? user?.address.city : "",
        street: user ? user?.address.street : "",
        number: user ? user?.address.number : "",
        zipcode: user ? user?.address.zipcode : "",
        geolocation: {
          lat: user ? user?.address.geolocation.lat : "",
          long: user ? user?.address.geolocation.long : "",
        },
      },
      phone: user ? user?.phone : "",
    });
  }, [user]);

  return (
    <div className="form-wapper">
      <Formik
        {...props}
        validationSchema={validationSchema}
        initialValues={formValues}
      >
        <Form>
          <AdminModal
            show={props.show}
            setShow={props.setShow}
            style={{ width: "800px", margin: "1% auto" }}
          >
            <ModalHeader>{user ? "Edit User" : "Add User"}</ModalHeader>
            <ModalBody>
              {" "}
              <Row style={{ fontWeight: "bold" }}>
                <h4>Info</h4>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="name.firstname">FirstName:</label>
                    <Field
                      name="name.firstname"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name.firstname"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email:</label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage
                      name="email"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="name.lastname">LastName:</label>
                    <Field
                      name="name.lastname"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name.lastname"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="phone">Phone:</label>
                    <Field name="phone" type="text" className="form-control" />
                    <ErrorMessage
                      name="phone"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <h4 style={{ fontWeight: "bold", marginTop: "10px" }}>
                  Address
                </h4>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="address.city">City:</label>
                    <Field
                      name="address.city"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.city"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="address.street">Street:</label>
                    <Field
                      name="address.street"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.street"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="address.number">Number:</label>
                    <Field
                      name="address.number"
                      type="number"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.number"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="address.zipcode">Zipcode:</label>
                    <Field
                      name="address.zipcode"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.zipcode"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <h4 style={{ fontWeight: "bold", marginTop: "10px" }}>
                  Geolocation
                </h4>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="address.geolocation.lat">Lat:</label>
                    <Field
                      name="address.geolocation.lat"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.geolocation.lat"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="address.geolocation.long">Long:</label>
                    <Field
                      name="address.geolocation.long"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.geolocation.long"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <h4 style={{ fontWeight: "bold", marginTop: "10px" }}>
                  Account
                </h4>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="username">Username:</label>
                    <Field
                      name="username"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="username"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="password">Password:</label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Row
                style={{
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#73d13d",
                    borderColor: "#73d13d",
                  }}
                >
                  Save
                </Button>
                <Button
                  onClick={() => props.setShow(false)}
                  style={{
                    backgroundColor: "#ff4d4f",
                    borderColor: "#ff4d4f",
                  }}
                >
                  Close
                </Button>
              </Row>
            </ModalFooter>
          </AdminModal>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
