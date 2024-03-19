// import React, { useState } from 'react';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Dashboard', 'dashboard', <UserOutlined />),
//   getItem('Suppliers', 'suppliers', <UserOutlined />),
//   getItem('Products', 'products', <UserOutlined />),
//   getItem('Employee', 'employee', <UserOutlined />),
// ];


// import { Outlet } from 'react-router-dom'
// import TopNavbar from '../component/TopNavbar/TopNavbar';

// const Dashboard = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <div>
//             <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="demo-logo-vertical" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout>
//         <TopNavbar/>
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >

//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               // background: colorBgContainer,
//               // borderRadius: borderRadiusLG,
//             }}
//           >
//           <Outlet/>
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Management Inventory System ©{new Date().getFullYear()} Created by GOINNOVIOR LIMITED
//         </Footer>
//       </Layout>
//     </Layout>
//     </div>
//   )
// }

// export default Dashboard;






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
      to: '/dashboard',
    },
    {
      key: 'suppliers',
      icon: <UserOutlined />,
      label: 'Suppliers',
      to: '/suppliers',
    },
    {
      key: 'products',
      icon: <UserOutlined />,
      label: 'Products',
      to: '/products',
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
