import React from "react";
import "./dashboard-admin-menu-page.styles.scss";

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import KategoriMenu from "../kategori-menu/kategori-menu.component";
import DashboardAdminDaftarMenu from "../dashboard-admin-daftar-menu/dashboard-admin-daftar-menu.component";

const DashboardAdminMenuPage = () => {
  return (
    <div id="dashboard-admin-menu-page">
      <KategoriMenu />

      <div className="daftar-menu-container">
        <Button className="btn-tambah-menu" icon={<PlusOutlined />}>
          Tambah Menu
        </Button>
        <DashboardAdminDaftarMenu />
      </div>
    </div>
  );
};

export default DashboardAdminMenuPage;
