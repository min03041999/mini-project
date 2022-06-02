import React from "react";
import AdminModal, {
  ModalBody,
  ModalHeader,
} from "../../../common/AdminModal/AdminModal";

const AdminUserEdit = (props) => {
  // console.log(props);
  return (
    <AdminModal
      show={props.show}
      setShow={props.setShow}
      style={{ width: "800px", margin: "5% auto" }}
    >
      <ModalHeader></ModalHeader>
      <ModalBody></ModalBody>
    </AdminModal>
  );
};

export default AdminUserEdit;
