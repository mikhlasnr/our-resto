import React from "react";

// Import Component
import { Layout } from "antd";
import DashboardAdminSidebar from "../../components/dashboard-admin-sidebar/dashboard-admin-sidebar.component";
import AdminDashboardMain from "../../components/admin-dashboard-main/admin-dashboard-main.component";

const AdminDashboardPage = () => {
  return (
    <Layout>
      <DashboardAdminSidebar />
      <AdminDashboardMain />
    </Layout>
  );
};

export default AdminDashboardPage;
