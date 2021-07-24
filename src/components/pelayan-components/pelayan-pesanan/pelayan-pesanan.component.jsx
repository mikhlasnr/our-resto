import React from "react";
import "./pelayan-pesanan.styles.scss";
import { Divider } from "antd";
import PelayanPesananItem from "../pelayan-pesanan-list-item/pesanan-list-item.component";

const PelayanPesanan = () => {
  return (
    <div className="dashboard-pelayan-pesanan">
      <div className="divider-container">
        <Divider orientation="left">Pesanan</Divider>
      </div>
      <div className="pesanan-list-items">
        <PelayanPesananItem />
      </div>
      <div className="pesanan-total">
        <h2>Total</h2>
        <p>Rp 99.999</p>
      </div>
    </div>
  );
};

export default PelayanPesanan;
