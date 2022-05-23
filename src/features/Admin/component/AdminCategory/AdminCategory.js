import { Table } from "antd";
import React, { useEffect, useState } from "react";
import categoryApi from "../../../../api/CategoryApi";
import "./admin-category.css";

const AdminCategory = () => {
  const [items, setItems] = useState([]);
  const { Column } = Table;

  useEffect(() => {
    const Category = async () => {
      try {
        const response = await categoryApi.getCategoryList();
        // console.log(response.data);
        setItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    Category();
  }, []);

  const data = [];
  for (let i = 1; i <= items.length; i++) {
    data.push({
      key: i,
      name: `${items[i]}`,
    });
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>List Category</h2>
      <Table dataSource={data}>
        <Column title="ID" dataIndex="key" key="key" />
        <Column title="Category Name" dataIndex="name" key="name" />
      </Table>
    </div>
  );
};

export default AdminCategory;
