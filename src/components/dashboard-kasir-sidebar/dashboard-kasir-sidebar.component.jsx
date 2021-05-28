import React from "react";
import "./dashboard-kasir-sidebar.styles.scss";

import DashboardKasirProfile from "../dashboard-kasir-profile/dashboard-kasir-profile.component";
import DashboardKasirPesanan from "../dashboard-kasir-pesanan/dashboard-kasir-pesanan.component";
import { Button } from "antd";

const DashboardKasirSidebar = () => {
  return (
    <div id="dashboard-kasir-sidebar">
      <DashboardKasirProfile />
      <DashboardKasirPesanan />
      <div className="checkout-btn-container">
        <Button className="checkout-btn" block disabled={false}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default DashboardKasirSidebar;
