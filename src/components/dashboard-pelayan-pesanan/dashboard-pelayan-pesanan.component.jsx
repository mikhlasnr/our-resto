import React from "react";
import "./dashboard-pelayan-pesanan.styles.scss";
import { Divider } from "antd";
import DashboardPelayanPesananItem from "../dashboard-pelayan-pesanan-list-item/dashboard-pelayan-pesanan-list-item.component";

const DashboardPelayanPesanan = () => {
  return (
    <div className="dashboard-pelayan-pesanan">
      <div className="divider-container">
        <Divider orientation="left">Pesanan</Divider>
      </div>
      <div className="pesanan-list-items">
        <DashboardPelayanPesananItem />
        <DashboardPelayanPesananItem />
        <DashboardPelayanPesananItem />
        <DashboardPelayanPesananItem />
        <DashboardPelayanPesananItem />
        <DashboardPelayanPesananItem />
      </div>
      <div className="pesanan-total">
        <h2>Total</h2>
        <p>Rp 99.999</p>
      </div>
    </div>
  );
};

export default DashboardPelayanPesanan;
