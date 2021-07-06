import React from "react";
import "./admin-menu-list.styles.scss";
import AdminMenuListCard from "../admin-menu-list-card/admin-menu-list-card.component";

const AdminMenuList = () => {
  return (
    <div id="admin-menu-list">
      <h1>Daftar Menu</h1>
      <AdminMenuListCard />
      <AdminMenuListCard />
      <AdminMenuListCard />
      <AdminMenuListCard />
      <AdminMenuListCard />
      <AdminMenuListCard />
    </div>
  );
};

export default AdminMenuList;
