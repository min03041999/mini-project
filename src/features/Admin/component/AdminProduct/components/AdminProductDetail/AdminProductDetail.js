import React from "react";
import { Button } from "react-bootstrap";
import AdminModal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../common/AdminModal/AdminModal";
import { Row, Col } from "antd";

const AdminProductDetail = (props) => {
  const product = props.product;
  return (
    <AdminModal
      show={product ? props.show : ""}
      setShow={product ? props.setShow : ""}
      style={{ width: "800px", margin: "5% auto" }}
    >
      <ModalHeader>Detail Product</ModalHeader>
      <ModalBody>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div style={{ marginTop: "10px" }}>
                  <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                    Name:
                  </label>
                  <span style={{ fontWeight: "500" }}>
                    {product ? product.title : ""}
                  </span>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ marginTop: "10px" }}>
                  <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                    Category:
                  </label>
                  <span style={{ fontWeight: "500" }}>
                    {product ? product.category : ""}
                  </span>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ marginTop: "10px" }}>
                  <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                    Price:
                  </label>
                  <span style={{ fontWeight: "500" }}>
                    {product ? product.price : ""}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <div style={{ marginTop: "10px" }}>
              <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                Image:
              </label>
              <div>
                <img
                  src={product ? product.image : ""}
                  style={{ height: "150px", display: "block", margin: "auto" }}
                  alt={product ? product.image : ""}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div style={{ marginTop: "10px" }}>
              <label style={{ fontWeight: "bold", marginRight: "5px" }}>
                Description:
              </label>
              <div style={{ fontWeight: "500" }}>
                {product ? product.description : ""}
              </div>
            </div>
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
  );
};

export default AdminProductDetail;
