import React from "react";
import { toast } from "react-toastify";
import api from "../../../../../../api/ProductApi";
import ProductForm from "../../common/ProductForm/ProductForm";

const AdminProductAdd = (props) => {
  //onSubmit handler
  const onSubmitProduct = async (formData) => {
    console.log(formData);
    try {
      const res = await api.addProductApi(formData);
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
    <ProductForm
      show={props.show}
      setShow={props.setShow}
      onSubmit={onSubmitProduct}
      enableReinitialize
    />
  );
};

export default AdminProductAdd;
