import React from "react";

// import component
import { Layout } from "antd";
import DashboardKasirMain from "../../components/dashboard-kasir-main/dashboard-kasir-main.component";
import DashboardKasirSidebar from "../../components/dashboard-kasir-sidebar/dashboard-kasir-sidebar.component";
import BuatPesananModal from "../../components/buat-pesanan-modal/buat-pesanan-modal.component";

// destructuring layout
const { Sider, Content } = Layout;

const DashBoadrKasirPage = () => {
  return (
    <Layout id="dashboard-kasir-page">
      <Layout
        className="site-layout"
        style={{
          padding: "87px 524px 30px 100px",
          background: "#FFFFFF",
        }}
      >
        <Content>
          <DashboardKasirMain />
        </Content>
      </Layout>
      <Sider
        theme="light"
        width={493}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          right: 0,
          background: "#FFFFFF",
          boxShadow: "-12px 0px 68px rgba(215, 215, 215, 0.26)",
        }}
      >
        <DashboardKasirSidebar />
      </Sider>
      <BuatPesananModal />
    </Layout>
  );
};

export default DashBoadrKasirPage;
