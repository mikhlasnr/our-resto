import React from "react";
import "./dashboard-kasir-main.styles.scss";

// import component
import DashboardKasirSearch from "../dashboard-kasir-search/dashboard-kasir-search.component";
import DashboardKasirKategoriMenu from "../dashboard-kasir-kategori-menu/dashboard-kasir-kategori-menu.component";
import DashboardKasirPilihMenu from "../dashboard-kasir-pilih-menu/dashboard-kasir-pilih-menu.component";

const DashboardKasirMain = () => {
  return (
    <section id="dashboard-kasir-main">
      <DashboardKasirSearch />
      <DashboardKasirKategoriMenu />
      <DashboardKasirPilihMenu />
    </section>
  );
};

export default DashboardKasirMain;
