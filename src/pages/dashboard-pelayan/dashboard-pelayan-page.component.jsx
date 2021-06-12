import React from "react";

// import component
import { Layout } from "antd";

import DashboardPelayanMain from "../../components/dashboard-pelayan-main/dashboard-pelayan-main.component";
import DashboardPelayanSidebar from "../../components/dashboard-pelayan-sidebar/dashboard-pelayan-sidebar.component";
import BuatPesananModal from "../../components/buat-pesanan-modal/buat-pesanan-modal.component";

const DashBoardPelayanPage = () => {
  return (
    <Layout id="dashboard-pelayan-page">
      <DashboardPelayanMain />
      <DashboardPelayanSidebar />
      <BuatPesananModal />
    </Layout>
  );
};

export default DashBoardPelayanPage;
