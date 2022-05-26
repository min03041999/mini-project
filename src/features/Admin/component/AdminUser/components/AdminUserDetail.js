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
            <div style={{ fontWeight: "bold" }}>
              Name:
              <span style={{ fontWeight: "500" }}>
                {user.name.firstname + " " + user.name.lastname}
              </span>
            </div>
          </Col>
          <Col span={12}>
            <div>col-6</div>
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
