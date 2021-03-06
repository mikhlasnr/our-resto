import React, { useEffect } from "react";
import "./menu-page.styles.scss";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataKategoriMenu } from "../../../../redux/kategoriMenu/kategoriMenu.action";
import { fetchDataMenu } from "../../../../redux/menu/menu.action";
// Import Component
import KategoriMenu from "../../../kategori-menu-components/kategori-menu/kategori-menu.component";
import MenuList from "../menu-list-components/menu-list/menu-list.component";
import MenuAddModal from "../menu-add-compnents/menu-add-modal/menu-add-modal.component";
import MenuDeleteModal from "../menu-delete-modal/menu-delete-modal.component";
import MenuUpdateModal from "../menu-update-compnents/menu-update-modal/menu-update-modal.component";

const MenuPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataKategoriMenu());
    dispatch(fetchDataMenu());
  }, [dispatch]);

  return (
    <div id="admin-dashboard-menu-page">
      <KategoriMenu />
      <div className="menu-list-container">
        <MenuList />
      </div>
      <MenuAddModal />
      <MenuDeleteModal />
      <MenuUpdateModal />
    </div>
  );
};

export default MenuPage;
