import React from "react";
import { useEffect } from "react";
import "./dashboard-koki.styles.scss";
// Handling Redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataListPesananKoki,
  removeDataListPesanan,
} from "../../redux/listPesanan/listPesanan.action";
import { selectDataListPesanan } from "../../redux/listPesanan/listPesanan.selectors";
// Import Components
import KokiProfile from "../../components/koki-components/koki-profile/koki-profile.component";
import ListPesananCards from "../../components/koki-components/list-pesanan-cards/list-pesanan-cards.components";
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
    </div>
  );
};

export default DashboardKoki;
