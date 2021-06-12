import React from "react";

import { Layout } from "antd";
import DashboardAdminSidebar from "../../components/dashboard-admin-sidebar/dashboard-admin-sidebar.component";
import DashboardAdminMain from "../../components/dashboard-admin-main/dashboard-admin-main.component";

const DashboardAdminPage = () => {
  return (
    <Layout>
      <DashboardAdminSidebar />
      <DashboardAdminMain />
    </Layout>
  );
};

export default DashboardAdminPage;
