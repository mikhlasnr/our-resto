import React from "react";
import "./dashboard-pelayan-sidebar.styles.scss";

// handling redux
import { connect } from "react-redux";
import { toggleCheckoutModalHidden } from "../../redux/pesanan/pesanan.action";

// import component
import DashboardPelayanProfile from "../dashboard-pelayan-profile/dashboard-pelayan-profile.component";
import DashboardPelayanPesanan from "../dashboard-pelayan-pesanan/dashboard-pelayan-pesanan.component";
import { Button } from "antd";

import { Layout } from "antd";
const { Sider } = Layout;

const DashboardPelayanSidebar = ({ dispatch }) => {
  return (
    <Sider
      theme="light"
      width={493}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        right: 0,
        background: "#FFFFFF",
        boxShadow: "-12px 0px 68px rgba(215, 215, 215, 0.26)",
      }}
    >
      <div id="dashboard-pelayan-sidebar">
        <DashboardPelayanProfile />
        <DashboardPelayanPesanan />
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
    </Sider>
  );
};

export default connect()(DashboardPelayanSidebar);
