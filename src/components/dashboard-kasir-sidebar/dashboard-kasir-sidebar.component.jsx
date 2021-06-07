import React from "react";
import "./dashboard-kasir-sidebar.styles.scss";

// handling redux
import { connect } from "react-redux";
import { toggleCheckoutModalHidden } from "../../redux/pesanan/pesanan.action";

// import component
import DashboardKasirProfile from "../dashboard-kasir-profile/dashboard-kasir-profile.component";
import DashboardKasirPesanan from "../dashboard-kasir-pesanan/dashboard-kasir-pesanan.component";
import { Button } from "antd";

const DashboardKasirSidebar = ({ dispatch }) => {
  return (
    <div id="dashboard-kasir-sidebar">
      <DashboardKasirProfile />
      <DashboardKasirPesanan />
      <div className="checkout-btn-container">
        <Button
          className="checkout-btn"
          block
          disabled={false}
          onClick={e => {
            e.preventDefault();
            dispatch(toggleCheckoutModalHidden());
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default connect()(DashboardKasirSidebar);
