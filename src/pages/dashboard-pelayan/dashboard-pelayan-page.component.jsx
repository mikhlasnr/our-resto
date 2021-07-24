import React from "react";

// import component
import { Layout } from "antd";

import PelayandMain from "../../components/pelayan-components/pelayan-main/pelayan-main.component";
import PelayanSidebar from "../../components/pelayan-components/pelayan-sidebar/pelayan-sidebar.component";
import BuatPesananModal from "../../components/pelayan-components/buat-pesanan-modal/buat-pesanan-modal.component";

const DashBoardPelayanPage = () => {
  return (
    <Layout id="dashboard-pelayan-page">
      <PelayandMain />
      <PelayanSidebar />
      <BuatPesananModal />
    </Layout>
  );
};

export default DashBoardPelayanPage;
