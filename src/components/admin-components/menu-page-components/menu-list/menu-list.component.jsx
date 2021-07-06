import React from "react";
import "./menu-list.styles.scss";
import MenuListCard from "../menu-list-card/menu-list-card.component";

const MenuList = () => {
  return (
    <div id="admin-menu-list">
      <h1>Daftar Menu</h1>
      <MenuListCard />
      <MenuListCard />
      <MenuListCard />
      <MenuListCard />
      <MenuListCard />
      <MenuListCard />
    </div>
  );
};

export default MenuList;
