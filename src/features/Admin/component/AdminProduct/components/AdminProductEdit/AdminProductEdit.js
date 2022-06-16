import React from "react";
import { toast } from "react-toastify";
import api from "../../../../../../api/ProductApi";
import ProductForm from "../../common/ProductForm/ProductForm";

const AdminProductEdit = (props) => {
  const product = props.product;
  // console.log(product);
  const onSubmitProduct = async (formData) => {
    console.log(formData);
    try {
      const res = await api.editProductApi(formData);
      console.log(res);
      if (res.status === 200) {
        props.setShow(false);
        toast.success("Edit Product successful!");
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
      product={product}
      enableReinitialize
    />
  );
};

export default AdminProductEdit;
