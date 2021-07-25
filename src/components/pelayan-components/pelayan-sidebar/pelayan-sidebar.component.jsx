import React from "react";
import "./pelayan-sidebar.styles.scss";

// handling redux
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckoutModalHidden } from "../../../redux/pesanan/pesanan.action";
import { isPesananItemsExist } from "../../../redux/pesanan/pesanan.selectors";

// import component
import PelayanProfile from "../pelayan-profile/pelayan-profile.component";
import PelayanPesanan from "../pelayan-pesanan/pelayan-pesanan.component";
import { Button } from "antd";

import { Layout } from "antd";
const { Sider } = Layout;

const PelayanSidebar = () => {
  const dispatch = useDispatch();
  const pesananItemsExist = useSelector(isPesananItemsExist);
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
        <PelayanProfile />
        <PelayanPesanan />
        <div className="checkout-btn-container">
          <Button
            className="checkout-btn"
            block
            disabled={false}
            onClick={e => {
              e.preventDefault();
              dispatch(toggleCheckoutModalHidden());
            }}
            disabled={pesananItemsExist ? false : true}
          >
            Checkout
          </Button>
        </div>
      </div>
    </Sider>
  );
};

export default PelayanSidebar;
