import React from "react";
import { toast } from "react-toastify";
import api from "../../../../../api/UserApi";
import UserForm from "../common/UserForm/UserForm";

const AdminUserEdit = (props) => {
  const user = props.user;
  //obSubmit handler
  const onSubmit1 = async (formData) => {
    console.log(formData);
    try {
      const res = await api.editUser(user.id, formData);
      console.log(res);
      if (res.status === 200) {
        props.setShow(false);
        toast.success("Modify user successful!");
      }
    } catch (err) {
      toast.error("Error data");
      console.log(err);
    }
  };

  return (
    // <AdminModal
    //   show={props.show}
    //   setShow={props.setShow}
    //   style={{ width: "800px", margin: "5% auto" }}
    // >
    //   <ModalHeader>Edit User</ModalHeader>
    //   <ModalBody>

    //   </ModalBody>
    // </AdminModal>
    <UserForm
      user={user}
      onSubmit={onSubmit1}
      enableReinitialize
      show={props.show}
      setShow={props.setShow}
    ></UserForm>
  );
};

export default AdminUserEdit;
