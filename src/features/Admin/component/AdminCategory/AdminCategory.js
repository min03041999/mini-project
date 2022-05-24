import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import categoryApi from "../../../../api/CategoryApi";
import AdminTable from "../../common/AdminTable/AdminTable";
import "./admin-category.css";

const AdminCategory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

  const mapData = (data) => {
    const newData = data.map((item, index) => ({
      key: index + 1,
      name: item,
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
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await categoryApi.getCategoryList();

        if (res.status === 200) {
          res.data && mapData(res.data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>List Category</h2>
      <AdminTable limit={5} loading={loading} data={items} columns={columns} />
    </div>
  );
};

export default AdminCategory;
