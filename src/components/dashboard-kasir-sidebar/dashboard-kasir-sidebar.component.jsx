import React from "react";
import "./dashboard-kasir-sidebar.styles.scss";
import DashboardKasirProfile from "../dashboard-kasir-profile/dashboard-kasir-profile.component";

const DashboardKasirSidebar = () => {
  return (
    <div id="dashboard-kasir-sidebar">
      <div className="dashboard-kasir-sidebar-container">
        <DashboardKasirProfile />
      </div>
    </div>
  );
};

export default DashboardKasirSidebar;
