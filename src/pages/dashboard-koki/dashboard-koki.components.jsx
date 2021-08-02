import React from "react";
import { useEffect } from "react";
import "./dashboard-koki.styles.scss";
// Handling Redux
import { useDispatch } from "react-redux";
import {
  fetchDataListPesananKoki,
  removeDataListPesanan,
} from "../../redux/listPesanan/listPesanan.action";
// Import Components
import KokiProfile from "../../components/koki-components/koki-profile/koki-profile.component";
import ListPesananCards from "../../components/koki-components/list-pesanan-cards/list-pesanan-cards.components";
import KokiUpdateModal from "../../components/koki-components/koki-update-modal/koki-update-modal.component";
const DashboardKoki = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataListPesananKoki());
    return () => {
      dispatch(removeDataListPesanan());
    };
  }, []);

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
      <KokiUpdateModal />
    </div>
  );
};

export default DashboardKoki;
