import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productApi from "../../../../api/ProductApi";
import AdminTable from "../../common/AdminTable/AdminTable";

const AdminProduct = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

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
  ];

  useEffect(() => {
    fetchData();
    console.log(items);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>List Product</h2>
      <AdminTable limit={5} loading={loading} columns={columns} data={items} />
    </div>
  );
};

export default AdminProduct;
