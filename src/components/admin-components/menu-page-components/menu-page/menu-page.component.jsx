import React from "react";
import "./menu-page.styles.scss";

// Import Component
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import KategoriMenu from "../../../kategori-menu/kategori-menu.component";
import AdminMenuList from "../admin-menu-list/admin-menu-list.component";

const MenuPage = () => {
  return (
    <div id="admin-dashboard-menu-page">
      <KategoriMenu />

      <div className="menu-list-container">
        <Button className="btn-tambah" icon={<PlusOutlined />}>
          Tambah Menu
        </Button>
        <AdminMenuList />
      </div>
    </div>
  );
};

export default MenuPage;
