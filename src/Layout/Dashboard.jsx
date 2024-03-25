import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../component/TopNavbar/TopNavbar';

const { Sider, Content, Footer } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: 'dashboard',
      icon: <DesktopOutlined />,
      label: 'Dashboard',
      to: '/',
    },
    {
      key: 'suppliers',
      icon: <UserOutlined />,
      label: 'Suppliers',
      to: '/allSuppliers',
    },
    {
      key: 'products',
      icon: <UserOutlined />,
      label: 'Products',
      to: '/allProducts',
    },
    {
      key: 'employee',
      icon: <UserOutlined />,
      label: 'Employee',
      to: '/allEmployees',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <TopNavbar /> */}
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}  >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {items.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.to}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
        <TopNavbar />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Management Inventory System ©{new Date().getFullYear()} Created by GOINNOVIOR LIMITED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
