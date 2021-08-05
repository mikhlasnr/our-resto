import React from "react";
import "./menu-list.styles.scss";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectDataMenu,
  selectIsFetchingMenu,
} from "../../../../../redux/menu/menu.selectors";
import { toggleShowModalAddMenu } from "../../../../../redux/menu/menu.action";
import { selectCurrentUserRole } from "../../../../../redux/user/user.selectors";
// Import Components
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import MenuListCard from "../menu-list-card/menu-list-card.component";
import MenuListCardSkeleton from "../menu-list-card-skeleton/menu-list-card-skeleton.component";

const MenuList = () => {
  const dispatch = useDispatch();
  const dataMenus = useSelector(selectDataMenu);
  const isFetchingMenu = useSelector(selectIsFetchingMenu);
  const currentRole = useSelector(selectCurrentUserRole);

  const handlingTambahMenu = () => {
    dispatch(toggleShowModalAddMenu());
  };

  const handlingRenderListMenu = () => {
    return dataMenus.map(menu => (
      <MenuListCard key={menu.IdMenu} menu={menu} />
    ));
  };
  const handlingRenderMenuSkeleton = () => {
    return [0, 1, 2, 3].map(item => (
      <MenuListCardSkeleton key={item} menu={item} />
    ));
  };

  return (
    <div id="admin-menu-list">
      {currentRole === "admin" ? (
        <Button
          className="btn-tambah"
          icon={<PlusOutlined />}
          onClick={handlingTambahMenu}
        >
          Tambah Menu
        </Button>
      ) : null}

      <div className="admin-menu-list-container">
        <h1>Daftar Menu</h1>
        {!dataMenus || isFetchingMenu
          ? handlingRenderMenuSkeleton()
          : handlingRenderListMenu()}
      </div>
    </div>
  );
};

export default MenuList;
