import React from "react";
import "./dashboard-kasir-pesanan.styles.scss";
import { Row, Col, Divider } from "antd";
import DashboardKasirPesananListItem from "../dashboard-kasir-pesanan-list-item/dashboard-kasir-pesanan-list-item.component";

const DashboardKasirPesanan = () => {
  return (
    <div className="dashboard-kasir-pesanan">
      <Divider orientation="left">Pesanan</Divider>
      <div className="pesanan-list-items">
        <DashboardKasirPesananListItem />
        <DashboardKasirPesananListItem />
        <DashboardKasirPesananListItem />
        <DashboardKasirPesananListItem />
      </div>
    </div>
  );
};

export default DashboardKasirPesanan;
