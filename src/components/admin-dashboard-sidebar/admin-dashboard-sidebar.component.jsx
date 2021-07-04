import React from "react";
import "./admin-dashboard-sidebar.styles.scss";

import AdminDashboardSidebarProfile from "../admin-dashboard-sidebar-profile/admin-dashboard-sidebar-options.component";
import AdminDashboardSidebarOptions from "../admin-dashboard-sidebar-options/admin-dashboard-sidebar-options.component";

const AdminDashboardSidebar = () => {
  return (
    <div className="admin-sidebar-container">
      <div className="wrapper-top">
        <AdminDashboardSidebarOptions />
      </div>
      <div className="wrapper-bottom">
        <AdminDashboardSidebarProfile />
      </div>
    </div>
  );
};

export default AdminDashboardSidebar;
