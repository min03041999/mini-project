import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productApi from "../../../../api/ProductApi";
import AdminTable from "../../common/AdminTable/AdminTable";
import AdminProductAdd from "./components/AdminProductAdd/AdminProductAdd";
import AdminProductEdit from "./components/AdminProductEdit/AdminProductEdit";
import AdminProductDetail from "./components/AdminProductDetail/AdminProductDetail";

const AdminProduct = () => {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState();
  const [check, setCheck] = useState();
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await productApi.getProductApi();
      if (res.status === 200) {
        res.data && mapData(res.data);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const mapData = (data) => {
    const newData = data.map((item, index) => ({
      key: item.id,
      title: item.title,
      category: item.category,
      image: item.image,
      price: item.price,
      description: item.description,
    }));
    setItems(newData);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name Product",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={`${image}`} style={{ height: "30px" }} alt={image} />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <div>{price}$</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (i) => (
        <Space>
          <Button
            type="primary"
            style={{ backgroundColor: "#40a9ff", borderColor: "#40a9ff" }}
            onClick={() => handleDetailProduct(i.key)}
          >
            Detail
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#fadb14", borderColor: "#fadb14" }}
            onClick={() => handleEditProduct(i.key)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#ff4d4f", borderColor: "#ff4d4f" }}
            onClick={() => handleDeleteProduct(i.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  //Detail
  const handleDetailProduct = async (id) => {
    try {
      const res = await productApi.detailProductApi(id);
      if (res.status === 200) {
        setShowModal(true);
        setProduct(res.data);
        setCheck("Detail Product");
      }
    } catch (error) {
      setShowModal(false);
      toast.error(error);
    }
  };

  //Delete
  const handleDeleteProduct = async (id) => {
    try {
      const res = await productApi.deleteProductApi(id);
      if (res.status === 200) {
        toast.success("Delete Product is success");
        fetchData();
      }
    } catch (error) {
      toast.error("Data error");
    }
  };

  //Edit
  const handleEditProduct = async (id) => {
    try {
      const res = await productApi.detailProductApi(id);
      if (res.status === 200) {
        setShowModal(true);
        setProduct(res.data);
      }
      setCheck("Edit Product");
    } catch (error) {
      setShowModal(false);
      toast.error(error);
    }
  };

  //Add
  const handleAddProduct = () => {
    setCheck("Add Product");
    setShowModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>List Product</h2>
      <Button
        type="primary"
        style={{
          margin: "15px 0",
          backgroundColor: "#73d13d",
          borderColor: "#73d13d",
        }}
        onClick={() => handleAddProduct()}
      >
        Add Product
      </Button>
      <AdminTable limit={5} loading={loading} columns={columns} data={items} />
      {check === "Add Product" && (
        <AdminProductAdd show={showModal} setShow={setShowModal} />
      )}
      {check === "Edit Product" && (
        <AdminProductEdit
          show={showModal}
          setShow={setShowModal}
          product={product}
        />
      )}
      {check === "Detail Product" && (
        <AdminProductDetail
          show={showModal}
          setShow={setShowModal}
          product={product}
        />
      )}
    </div>
  );
};

export default AdminProduct;
