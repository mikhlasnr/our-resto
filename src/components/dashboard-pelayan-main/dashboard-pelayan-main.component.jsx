import React from "react";

// import component
import DashboardPelayanSearch from "../dashboard-pelayan-search/dashboard-pelayan-search.component";
import DashboardPelayanKategoriMenu from "../dashboard-pelayan-kategori-menu/dashboard-pelayan-kategori-menu.component";
import DashboardPelayanPilihMenu from "../dashboard-pelayan-pilih-menu/dashboard-pelayan-pilih-menu.component";

import { Layout } from "antd";
const { Content } = Layout;

const DashboardPelayanMain = () => {
  return (
    <Layout
      className="site-layout"
      style={{
        padding: "87px 524px 30px 100px",
        background: "#FFFFFF",
      }}
    >
      <Content>
        <section id="dashboard-pelayan-main">
          <DashboardPelayanSearch />
          <DashboardPelayanKategoriMenu />
          <DashboardPelayanPilihMenu />
        </section>
      </Content>
    </Layout>
  );
};

export default DashboardPelayanMain;
