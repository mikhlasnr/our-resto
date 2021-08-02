import React, { useEffect } from "react";
import "./dashboard-kasir-page.styles.scss";
// Handling Redux
import { useDispatch } from "react-redux";
import {
  fetchDataListPesananKasir,
  removeDataListPesanan,
} from "../../redux/listPesanan/listPesanan.action";

// Import Component
import KasirProfile from "../../components/kasir-components/kasir-profile/kasir-profile.component";
import ListPesananTable from "../../components/kasir-components/list-pesanan-table-components/list-pesanan-table/list-pesanan-table.component";

const DashboardKasirPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataListPesananKasir());
    return () => {
      dispatch(removeDataListPesanan());
    };
  }, []);
  return (
    <div id="dashboard-kasir">
      <div className="dashboard-kasir-container">
        <header className="kasir-header-container">
          <KasirProfile />
        </header>
        <main className="kasir-main-container">
          <ListPesananTable />
        </main>
      </div>
    </div>
  );
};

export default DashboardKasirPage;
