import React, { useEffect } from "react";
import "./menu-page.styles.scss";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataKategoriMenu } from "../../../../redux/kategoriMenu/kategoriMenu.action";
import { fetchDataMenu } from "../../../../redux/menu/menu.action";
// Import Component
import KategoriMenu from "../../../kategori-menu-components/kategori-menu/kategori-menu.component";
import MenuList from "../menu-list/menu-list.component";

const MenuPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataKategoriMenu());
    dispatch(fetchDataMenu());
  }, []);

  return (
    <div id="admin-dashboard-menu-page">
      <KategoriMenu />

      <div className="menu-list-container">
        <MenuList />
      </div>
    </div>
  );
};

export default MenuPage;
