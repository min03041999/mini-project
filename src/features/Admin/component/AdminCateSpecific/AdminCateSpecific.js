import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../../../api/CategoryApi";
import AdminTable from "../../common/AdminTable/AdminTable";
const { Option } = Select;

const AdminCateSpecific = () => {
  const [items, setItems] = useState([]);
  const [itemsSpecific, setItemsSpecific] = useState([]);
  const [loading, setLoading] = useState(false);

  //Category
  const mapData = (data) => {
    const newData = data.map((item, index) => ({
      key: index + 1,
      name: item,
    }));
    setItems(newData);
  };

  const fetchData = async () => {
    try {
      const res = await api.getCategoryList();
      if (res.status === 200) {
        res.data && mapData(res.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Get Product a Specific Category
  const handleChange = async (value) => {
    setLoading(true);
    try {
      const res = await api.getCategorySpecific(value);
      if (res.status === 200) {
        res.data && mapDataSpecific(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const mapDataSpecific = (data) => {
    const dataSpecific = data.map((item, index) => ({
      key: index + 1,
      title: item.title,
      price: item.price,
      category: item.category,
      image: item.image,
      description: item.description,
    }));
    setItemsSpecific(dataSpecific);
  };

  console.log(itemsSpecific);

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
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
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2 style={{ fontWeight: "bold" }}>Category Specific</h2>

      <label style={{ fontWeight: "bold", margin: "50px 10px 20px 0" }}>
        Category:
      </label>
      <Select style={{ width: 200 }} onChange={handleChange}>
        {items.map((item, index) => (
          <Option value={item.name} key={index}>
            {item.name}
          </Option>
        ))}
      </Select>

      <h5 style={{ fontWeight: "bold" }}>Get Product In a Specific Category</h5>
      <AdminTable
        limit={5}
        loading={loading}
        data={itemsSpecific}
        columns={columns}
      />
    </div>
  );
};

export default AdminCateSpecific;
