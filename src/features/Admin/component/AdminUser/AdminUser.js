import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import userApi from "../../../../api/UserApi";
import AdminTable from "../../common/AdminTable/AdminTable";

const AdminUser = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

  const mapData = (data) => {
    const newData = data.map((item, index) => ({
      key: index + 1,
      name:
        item.name.firstname.charAt(0).toUpperCase() +
        item.name.firstname.slice(1) +
        " " +
        item.name.lastname.charAt(0).toUpperCase() +
        item.name.lastname.slice(1),
      email: item.email,
      phone: item.phone,
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
      title: "Full Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (i) => (
        <Space size="middle">
          <Button
            type="primary"
            style={{ backgroundColor: "#40a9ff", borderColor: "#40a9ff" }}
          >
            Detail
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#fadb14", borderColor: "#fadb14" }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#ff4d4f", borderColor: "#ff4d4f" }}
            onClick={() => handleDeleteUser(i.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await userApi.getUserList();

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

  //Delete
  const handleDeleteUser = async (id) => {
    try {
      const res = await userApi.deleteUser(id);
      if (res.status === 200 || res.status === 204) {
        toast.success("Xóa thành công!");
        fetchData();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>User List</h2>
      <Button
        type="primary"
        style={{
          margin: "15px 0",
          backgroundColor: "#73d13d",
          borderColor: "#73d13d",
        }}
      >
        Add User
      </Button>
      <AdminTable
        limit={5}
        loading={loading}
        data={items}
        columns={columns}
      ></AdminTable>
    </div>
  );
};

export default AdminUser;
