import React from "react";
import "./menu-list.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import { selectDataMenu } from "../../../../redux/menu/menu.selectors";
// Import Components
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import MenuListCard from "../menu-list-card/menu-list-card.component";
import MenuListCardSkeleton from "../menu-list-card-skeleton/menu-list-card-skeleton.component";

const MenuList = () => {
  const dataMenus = useSelector(selectDataMenu);
  const handlingRenderMenu = () => {
    return dataMenus.map(menu => (
      <MenuListCard key={menu.IdMenu} menu={menu} />
    ));
  };
  const handlingRenderMenuSkeleton = () => {
    return [0, 1, 2, 3].map(item => <MenuListCardSkeleton menu={item} />);
  };
  return (
    <div id="admin-menu-list">
      <Button className="btn-tambah" icon={<PlusOutlined />}>
        Tambah Menu
      </Button>
      <div className="admin-menu-list-container">
        <h1>Daftar Menu</h1>
        {dataMenus ? handlingRenderMenu() : handlingRenderMenuSkeleton()}
      </div>
    </div>
  );
};

export default MenuList;
