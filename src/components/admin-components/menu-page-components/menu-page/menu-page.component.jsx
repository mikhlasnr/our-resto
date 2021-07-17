import React, { useEffect } from "react";
import "./menu-page.styles.scss";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataKategoriMenu } from "../../../../redux/kategoriMenu/kategoriMenu.action";
// Import Component
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import KategoriMenu from "../../../kategori-menu-components/kategori-menu/kategori-menu.component";
import MenuList from "../menu-list/menu-list.component";

const MenuPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataKategoriMenu());
  }, [dispatch]);

  return (
    <div id="admin-dashboard-menu-page">
      <KategoriMenu />

      <div className="menu-list-container">
        <Button className="btn-tambah" icon={<PlusOutlined />}>
          Tambah Menu
        </Button>
        <MenuList />
      </div>
    </div>
  );
};

export default MenuPage;
