import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown } from "antd";
// import MenuItem from "antd/lib/menu/MenuItem";
// import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/auth";
import "./admin-header.css";

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
  getItem("User", "1", <UserOutlined />),
  getItem("Category", "sub1", <UploadOutlined />, [
    getItem("Option 1", "2"),
    getItem("Option 2", "3"),
    getItem("Option 3", "4"),
  ]),
  getItem("Product", "sub2", <VideoCameraOutlined />, [
    getItem("Option 1", "5"),
    getItem("Option 2", "6"),
  ]),
];

// function getItemInfo(label, key)

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
          defaultOpenKeys={["1"]}
          items={items}
          onSelect={(e) => {
            console.log(e);
          }}
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
                {/* <Menu.Item key="0">Info Account</Menu.Item>
                <Menu.Item key="1">
                  <div className="" onClick={() => dispatch(logout())}>
                    Logout
                  </div>
                </Menu.Item> */}
              </Menu>
            }
            trigger={["click"]}
          >
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminHeader;
