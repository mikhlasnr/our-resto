import React from "react";
import "./dashboard-kasir-page.styles.scss";

// Import Component
import DashboardKasirTablePesanan from "../../components/dashboard-kasir-table-pesanan/dashboard-kasir-table-pesanan.component";

const DashboardKasirPage = () => {
  return (
    <div id="dashboard-kasir-list-pesanan">
      <div className="list-pesanan-header">
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

export default DashboardKasirPage;
