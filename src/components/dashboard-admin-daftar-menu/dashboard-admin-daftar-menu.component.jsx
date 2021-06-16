import React from "react";
import "./dashboard-admin-daftar-menu.styles.scss";
import DashboardAdminDaftarMenuCard from "../dashboard-admin-daftar-menu-card/dashboard-admin-daftar-menu-card.component";

const DashboardAdminDaftarMenu = () => {
  return (
    <div id="dashboard-admin-daftar-menu">
      <h1>Daftar Menu</h1>
      <DashboardAdminDaftarMenuCard />
      <DashboardAdminDaftarMenuCard />
      <DashboardAdminDaftarMenuCard />
      <DashboardAdminDaftarMenuCard />
      <DashboardAdminDaftarMenuCard />
      <DashboardAdminDaftarMenuCard />
    </div>
  );
};

export default DashboardAdminDaftarMenu;
