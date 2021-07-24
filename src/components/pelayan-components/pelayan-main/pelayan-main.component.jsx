import React from "react";
import "./pelayan-main.styles.scss";
// import component
import PelayanSearch from "../pelayan-search/pelayan-search.component";
import KategoriMenu from "../../kategori-menu-components/kategori-menu/kategori-menu.component";
import PelayanPilihMenu from "../pelayan-pilih-menu/pelayan-pilih-menu.component";
import { Layout } from "antd";

const PelayandMain = () => {
  return (
    <Layout
      id="dashboard-pelayan-main"
      style={{
        padding: "80px 524px 30px 100px",
        background: "#FFFFFF",
      }}
    >
      <PelayanSearch />
      <KategoriMenu />
      <PelayanPilihMenu />
    </Layout>
  );
};

export default PelayandMain;
