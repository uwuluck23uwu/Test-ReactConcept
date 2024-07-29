import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FormOutlined,
  TableOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
const Dashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: (
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              ),
            },
            {
              key: "2",
              icon: <FormOutlined />,
              label: (
                <Link className="nav-link active" to="/Forms">
                  Form
                </Link>
              ),
            },
            {
              key: "3",
              icon: <TableOutlined />,
              label: (
                <Link className="nav-link active" to="/tables">
                  Table
                </Link>
              ),
            },
            {
              key: "4",
              icon: <DatabaseOutlined />,
              label: (
                <Link className="nav-link active" to="/todolist">
                  Todo List
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
