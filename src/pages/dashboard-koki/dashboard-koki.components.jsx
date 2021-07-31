import React from "react";
import KokiProfile from "../../components/koki-components/koki-profile/koki-profile.component";
import ListPesananCards from "../../components/koki-components/list-pesanan-cards/list-pesanan-cards.components";
import "./dashboard-koki.styles.scss";
const DashboardKoki = () => {
  return (
    <div id="dashboard-koki">
      <div className="dashboard-koki-container">
        <header className="koki-header-container">
          <KokiProfile />
        </header>
        <main className="koki-main-container">
          <ListPesananCards />
        </main>
      </div>
    </div>
  );
};

export default DashboardKoki;
