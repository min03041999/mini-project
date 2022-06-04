import React from "react";
import { toast } from "react-toastify";
import api from "../../../../../api/UserApi";
import UserForm from "../common/UserForm/UserForm";

const AdminUserAdd = (props) => {
  //onSubmit handler
  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const res = await api.addUser(formData);
      console.log(res);
      if (res.status === 200) {
        props.setShow(false);
        toast.success("Add user successful!");
      }
    } catch (err) {
      toast.error("Error data");
      console.log(err);
    }
  };

  return (
    <UserForm
      show={props.show}
      setShow={props.setShow}
      onSubmit={onSubmit}
      enableReinitialize
    ></UserForm>
  );
};

export default AdminUserAdd;
