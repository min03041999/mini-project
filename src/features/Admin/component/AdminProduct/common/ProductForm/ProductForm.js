import React, { useEffect, useState, useRef } from "react";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import AdminModal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../common/AdminModal/AdminModal";
import { Row, Col } from "antd";
import api from "../../../../../../api/CategoryApi";
import { Button, FormGroup } from "react-bootstrap";
import AdminTextEditor from "../../../../common/AdminTextEditor/AdminTextEditor";

const ProductForm = (props) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
  });
  const product = props.product;
  const [category, setCategory] = useState([]);
  const [imgProduct, setImgProduct] = useState(product ? product.image : "");
  const imgRef = useRef();
  const [formValues, setFormValues] = useState({
    title: "",
    category: "",
    price: "",
    // description: "",
  });

  useEffect(() => {
    setFormValues({
      ...formValues,
      title: product ? product.title : "",
      category: product ? product.category : "",
      price: product ? product.price : "",
      // description: product ? product.description : "",
    });
  }, [product]);

  //Select Category
  const mapData = (data) => {
    const newCategory = data.map((item, index) => ({
      key: index + 1,
      name: item,
    }));
    setCategory(newCategory);
  };

  const fetchCategory = async () => {
    try {
      const res = await api.getCategoryList();
      if (res.status === 200) {
        res.data && mapData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  //handle Input Img Change
  const handleInputImgChange = () => {
    const file = imgRef.current.files[0];
    console.log(file.name);
    file.preview = URL.createObjectURL(file);
    setImgProduct(file);
  };

  //Text editor
  const [initialValue, setInitialValue] = useState(
    product ? product.description : ""
  );
  const editorRef = useRef(null);

  //Submit
  const handleSubmit = (values) => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log(content);
      // an application would save the editor content to the server here
      setInitialValue(content);
    }

    console.log(values);
    const formData = new FormData();
    // When logging a formData object with just console.log(formData) it always returns empty, as you can't log formData.
    // If you just have to log it before sending it, you can use entries() to get the entries in the formData object
    //Cách 1
    formData.append("title", values.title);
    formData.append("category", values.price);
    formData.append("price", values.price);
    formData.append(
      "image",
      imgRef.current.files[0] ? imgRef.current.files[0] : imgProduct
    );
    formData.append("description", editorRef.current.getContent());

    //Cách 2
    // formData.title = values.title;
    // formData.image = imgRef.current.files[0];
    // formData.price = values.price;
    // formData.category = values.category;

    props.onSubmit(formData);

    //check formData
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
  };

  return (
    <div className="form-wapper">
      <Formik
        {...props}
        validationSchema={validationSchema}
        initialValues={formValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <AdminModal
            show={props.show}
            setShow={props.setShow}
            style={{ width: "800px", margin: "1% auto" }}
          >
            <ModalHeader>
              {product ? "Edit Product" : "Add Product"}
            </ModalHeader>
            <ModalBody>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="title">Product Name:</label>
                    <Field name="title" type="text" className="form-control" />
                    <ErrorMessage
                      name="title"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="price">Price:</label>
                    <Field
                      name="price"
                      type="number"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="price"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>
                </Col>
                <Col span={12}>
                  <FormGroup>
                    <label htmlFor="category">Category:</label>
                    <Field as="select" name="category" className="form-control">
                      <option disabled value=""></option>
                      {category.map((item, index) => (
                        <option value={item.name} key={index}>
                          {item.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      className="d-block invalid-feedback"
                      component="span"
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="image">Image:</label>
                    <input
                      ref={imgRef}
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      style={{
                        cursor: "pointer",
                        marginBottom: "10px",
                      }}
                      onChange={handleInputImgChange}
                    />
                    {imgProduct && (
                      <img
                        width={imgProduct.preview ? "50%" : "20%"}
                        src={
                          imgProduct.preview ? imgProduct.preview : imgProduct
                        }
                        alt=""
                      />
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <AdminTextEditor
                    apiKey={"b6p5nnv5z7ivpda4drprz2dsg9o3rrytzoobpibyd1hgm4ev"}
                    initialValue={initialValue}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                  />
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

export default ProductForm;
