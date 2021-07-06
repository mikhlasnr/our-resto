import React from "react";
import "./dashboard-sidebar.styles.scss";

import SidebarOptions from "../sidebar-options/sidebar-options.component";
import SidebarProfile from "../sidebar-profile/sidebar-options.component";

const DashboardSidebar = () => {
  return (
    <div className="admin-sidebar-container">
      <div className="wrapper-top">
        <SidebarOptions />
      </div>
      <div className="wrapper-bottom">
        <SidebarProfile />
      </div>
    </div>
  );
};

export default DashboardSidebar;
