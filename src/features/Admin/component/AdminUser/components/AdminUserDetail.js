import { Button } from "antd";
import React from "react";
import AdminModal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../common/AdminModal/AdminModal";
import { Row, Col } from "antd";

const AdminUserDetail = (props) => {
  const user = props.user;

  return (
    <AdminModal show={props.show} setShow={props.setShow}>
      <ModalHeader>Detail User</ModalHeader>
      <ModalBody>
        <Row>
          <Col span={12}>
            <h5 style={{ fontWeight: "bold" }}>Info</h5>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div style={{ marginTop: "10px" }}>
              <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                FullName:
              </label>
              <span style={{ fontWeight: "500" }}>
                {user ? user.name.firstname + " " + user.name.lastname : ""}
              </span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                Phone:
              </label>
              <span style={{ fontWeight: "500" }}>
                {user ? user.phone : ""}
              </span>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginTop: "10px" }}>
              <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                Email:
              </label>
              <span style={{ fontWeight: "500" }}>
                {user ? user.email : ""}
              </span>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div style={{ marginTop: "30px" }}>
              <h5 style={{ fontWeight: "bold" }}>Address</h5>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                  City:
                </label>
                <span style={{ fontWeight: "500" }}>
                  {user ? user.address.city : ""}
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Street:
                </label>
                <span style={{ fontWeight: "500" }}>
                  {user ? user.address.street : ""}
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Zip-code:
                </label>
                <span style={{ fontWeight: "500" }}>
                  {user ? user.address.zipcode : ""}
                </span>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginTop: "30px" }}>
              <h5 style={{ fontWeight: "bold" }}>Account</h5>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Username:
                </label>
                <span style={{ fontWeight: "500" }}>
                  {user ? user.username : ""}
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Password:
                </label>
                <span style={{ fontWeight: "500" }}>
                  {user ? user.password : ""}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => props.setShow(false)}>Close</Button>
      </ModalFooter>
    </AdminModal>
  );
};

export default AdminUserDetail;
