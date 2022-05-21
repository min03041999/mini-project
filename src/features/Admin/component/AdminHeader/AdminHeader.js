// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../../../store/auth";

// const AdminHeader = () => {
//   const dispatch = useDispatch();
//   const { auth } = useSelector((state) => state.auth);
//   return (
//     <div>
//       <div className="admin-header">
//         <h2>Dashboard</h2>
//         Hi, {auth.username}!
//         <button onClick={() => dispatch(logout())}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default AdminHeader;

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
import { logout } from "../../../../store/auth";
import "./admin-header.css";

const { Header, Sider, Content } = Layout;

const AdminHeader = () => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
    console.log(state);
  };

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={state}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "User",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Category",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Product",
            },
          ]}
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

          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="0">Info Account</Menu.Item>
                <Menu.Item key="1">
                  <div className="" onClick={() => dispatch(logout())}>
                    Logout
                  </div>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <a
              className="ant-dropdown-link"
              href={() => false}
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
            </a>
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminHeader;
