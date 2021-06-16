import React from "react";
import "./dashboard-pelayan-main.styles.scss";
// import component
import DashboardPelayanSearch from "../dashboard-pelayan-search/dashboard-pelayan-search.component";
import KategoriMenu from "../kategori-menu/kategori-menu.component";
import DashboardPelayanPilihMenu from "../dashboard-pelayan-pilih-menu/dashboard-pelayan-pilih-menu.component";
import { Layout } from "antd";

const DashboardPelayanMain = () => {
  return (
    <Layout
      id="dashboard-pelayan-main"
      style={{
        padding: "80px 524px 30px 100px",
        background: "#FFFFFF",
      }}
    >
      <DashboardPelayanSearch />
      <KategoriMenu />
      <DashboardPelayanPilihMenu />
    </Layout>
  );
};

export default DashboardPelayanMain;
