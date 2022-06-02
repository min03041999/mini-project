import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../../../api/UserApi";
import AdminModal, {
  ModalBody,
  // ModalFooter,
  ModalHeader,
} from "../../../common/AdminModal/AdminModal";
import UserForm from "../common/UserForm/UserForm";

const AdminUserAdd = (props) => {
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

  //onSubmit handler
  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const res = await api.addUser(formData);
      console.log(res);
      if (res.status === 200) {
        props.setShow(false);
        toast.success("Thêm user thành công!");
      }
    } catch (err) {
      toast.error("Error");
    }
  };

  return (
    <AdminModal
      show={props.show}
      setShow={props.setShow}
      style={{ width: "800px", margin: "5% auto" }}
    >
      <ModalHeader>Add User</ModalHeader>
      <ModalBody>
        <UserForm
          initialValues={formValues}
          onSubmit={onSubmit}
          enableReinitialize
        ></UserForm>
      </ModalBody>
      {/* <ModalFooter>
        <Button onClick={() => props.setShow(false)}>Close</Button>
      </ModalFooter> */}
    </AdminModal>
  );
};

export default AdminUserAdd;
