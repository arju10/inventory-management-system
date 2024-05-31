import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FiPackage } from 'react-icons/fi';
import {
  TbReportAnalytics,
  TbReportSearch,
  TbReport,
  TbFileReport,
} from 'react-icons/tb';
import {
  LineChartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  BlockOutlined,
  HomeOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
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
      icon: <HomeOutlined />,
      label: 'Dashboard',
      to: '/',
    },
    {
      key: 'requisition',
      icon: <TbReport />,
      label: 'Requisition',
      to: '/requisition',
    },
    {
      key: 'RequisitionAuthorization',
      icon: <TbReportSearch />,
      label: 'Requisition(Authorize)',
      to: '/RequisitionAuthorization',
    },
    {
      key: 'requisionApp',
      icon: <TbFileReport />,
      label: 'Requisition(Approval)',
      to: '/requisitionApp',
    },
    {
      key: 'requisitionIssue',
      icon: <TbFileReport />,
      label: 'Requisition(issue)',
      to: '/requisitionIssue',
    },
    {
      key: 'issuedRequisition',
      icon: <TbReportAnalytics />,
      label: 'Issued Requisition',
      to: '/issuedRequisition',
    },
    {
      key: 'allInventory',
      icon: <ShoppingCartOutlined />,
      label: 'Add Inventory',
      to: '/allInventory',
    },
    {
      key: 'currentStock',
      icon: <ShoppingCartOutlined />,
      label: 'Current Stock',
      to: '/currentStock',
    },
    {
      key: 'stockAdjust',
      icon: <ShoppingCartOutlined />,
      label: 'Stock Adjust',
      to: '/stockAdjust',
    },
    {
      key: 'suppliers',
      icon: <BlockOutlined />,
      label: 'Suppliers',
      to: '/allSuppliers',
    },
    {
      key: 'products',
      icon: <FiPackage />,
      label: 'Products',
      to: '/allProducts',
    },
    {
      key: 'reports',
      icon: <LineChartOutlined />,
      label: 'Reports',
      to: '/reports',
    },
    {
      key: 'employee',
      icon: <TeamOutlined />,
      label: 'Employee',
      to: '/allEmployees',
    },
    {
      key: 'userManagement',
      icon: <UserOutlined />,
      label: 'User Management',
      to: '/userManagement',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      to: '/settings',
    },
    {
      key: 'designation',
      icon: <LogoutOutlined />,
      label: 'Designation',
      to: '/designation',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <TopNavbar /> */}
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className='demo-logo-vertical' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            {items.map((item) => (
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
            Management Inventory System ©{new Date().getFullYear()} Created by
            GOINNOVIOR LIMITED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
