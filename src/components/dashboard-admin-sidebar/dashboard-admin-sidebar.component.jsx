import React from "react";
import "./dashboard-admin-sidebar.styles.scss";

import DashboardAdminProfile from "../dashboard-admin-profile/dashboard-admin-profile.component";
import DashboardAdminOptions from "../dashboard-admin-options/dashboard-admin-options.component";

import { Layout } from "antd";
const { Sider } = Layout;

const DashboardAdminSidebar = () => {
  return (
    <Sider
      id="dashboard-admin-sidebar"
      theme="light"
      width={400}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        background: "#FFFFFF",
        boxShadow: "12px 4px 68px rgba(215, 215, 215, 0.26)",
      }}
    >
      <div className="admin-sidebar-container">
        <div className="wrapper-top">
          <div className="logo" />
          <DashboardAdminOptions />
        </div>
        <div className="wrapper-bottom">
          <DashboardAdminProfile />
        </div>
      </div>
    </Sider>
  );
};

export default DashboardAdminSidebar;
