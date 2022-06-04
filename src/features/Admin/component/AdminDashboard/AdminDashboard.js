import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../../store/auth";
import Routes from "../../Config/Routes";
import "./admin-dashboard.css";

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/admin/user">User</Link>, "0", <UserOutlined />),
  getItem("Category", "sub1", <UploadOutlined />, [
    getItem(<Link to="/admin/category/list-cate">List Category</Link>, "2"),
    getItem(
      <Link to="/admin/category/specific-cate">Specific Category</Link>,
      "3"
    ),
  ]),
  getItem("Product", "sub2", <VideoCameraOutlined />, [
    getItem("Option 1", "4"),
    getItem("Option 2", "5"),
  ]),
];

const AdminDashboard = () => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
    console.log(state);
  };

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  //Dropdown
  const dropDown = (
    <Menu
      items={[
        {
          label: <div>Info Account</div>,
          key: "0",
        },
        {
          label: <div onClick={() => dispatch(logout())}>Logout</div>,
          key: "1",
        },
      ]}
    />
  );

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={state}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ alignItems: "center" }}
        >
          <div className="trigger" onClick={toggle}>
            {state ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          </div>

          <Dropdown overlay={dropDown} trigger={["click"]}>
            <div
              className="ant-dropdown-link"
              style={{ display: "flex" }}
              onClick={(e) => e.preventDefault()}
            >
              <div>{auth.username}</div>
              <div
                style={{
                  marginLeft: "10px",
                  lineHeight: "60px",
                  fontSize: "13px",
                }}
              >
                <DownOutlined />
              </div>
            </div>
          </Dropdown>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 850,
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
