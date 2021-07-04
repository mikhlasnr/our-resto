import React from "react";

// Import Component
import AdminDashboardSidebar from "../../components/admin-dashboard-sidebar/admin-dashboard-sidebar.component";
import AdminDashboardMain from "../../components/admin-dashboard-main/admin-dashboard-main.component";
import { Layout } from "antd";
const { Sider } = Layout;

const AdminDashboardPage = () => {
  return (
    <Layout id="dashboard-admin-page">
      <Sider
        id="dashboard-admin-sidebar"
        theme="light"
        width={"40vh"}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          zIndex: "1",
          left: 0,
          background: "#FFFFFF",
          boxShadow: "12px 4px 68px rgba(215, 215, 215, 0.26)",
        }}
      >
        <AdminDashboardSidebar />
      </Sider>
      <Layout
        className="admin-dashboard-main"
        style={{
          padding: "6.438rem 4.5rem 0 0",
          paddingLeft: "calc(40vh + 1.875rem)",
          background: "#FFFFFF",
        }}
      >
        <AdminDashboardMain />
      </Layout>
    </Layout>
  );
};

export default AdminDashboardPage;
