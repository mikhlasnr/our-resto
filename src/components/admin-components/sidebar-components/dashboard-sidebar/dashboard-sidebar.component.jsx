import React from "react";
import "./dashboard-sidebar.styles.scss";

import SidebarOptions from "../sidebar-options/sidebar-options.component";
import SidebarProfile from "../sidebar-profile/sidebar-options.component";
import { ReactComponent as Logo } from "../../../../assets/Logo.svg";

const DashboardSidebar = () => {
  return (
    <div className="admin-sidebar-container">
      <div className="wrapper-top">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="options-container">
          <SidebarOptions />
        </div>
      </div>
      <div className="wrapper-bottom">
        <SidebarProfile />
      </div>
    </div>
  );
};

export default DashboardSidebar;
