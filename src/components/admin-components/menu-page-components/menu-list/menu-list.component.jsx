import React from "react";
import "./menu-list.styles.scss";
import MenuListCard from "../menu-list-card/menu-list-card.component";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const MenuList = () => {
  return (
    <div id="admin-menu-list">
      <Button className="btn-tambah" icon={<PlusOutlined />}>
        Tambah Menu
      </Button>
      <div className="admin-menu-list-container">
        <h1>Daftar Menu</h1>
        <MenuListCard />
        <MenuListCard />
        <MenuListCard />
        <MenuListCard />
        <MenuListCard />
        <MenuListCard />
      </div>
    </div>
  );
};

export default MenuList;
