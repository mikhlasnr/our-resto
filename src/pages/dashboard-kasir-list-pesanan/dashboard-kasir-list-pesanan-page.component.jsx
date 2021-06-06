import React from "react";
import "./dashboard-kasir-list-pesanan-page.styles.scss";
// Import Component
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import DashboardKasirTablePesanan from "../../components/dashboard-kasir-table-pesanan/dashboard-kasir-table-pesanan.component";

const DashboardKasirListPesananPage = () => {
  return (
    <div id="dashboard-kasir-list-pesanan">
      <div className="list-pesanan-header">
        <div className="button-back">
          <Link to="/">
            <LeftOutlined style={{ fontSize: "22px" }} />
          </Link>
        </div>
        <div className="title">
          <h1>List Pesanan</h1>
        </div>
      </div>
      <div className="list-pesanan-container">
        <DashboardKasirTablePesanan />
      </div>
    </div>
  );
};

export default DashboardKasirListPesananPage;
