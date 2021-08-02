import React, { useEffect } from "react";
import "./dashboard-main.styles.scss";

// Handling Redux
import { useDispatch } from "react-redux";
import {
  fetchDataListPesananKasir,
  removeDataListPesanan,
} from "../../../redux/listPesanan/listPesanan.action";
// Import Components
import KasirProfile from "../kasir-profile/kasir-profile.component";
import ListPesananTable from "../list-pesanan-table-components/list-pesanan-table/list-pesanan-table.component";
import ListPesananLihatModal from "../list-pesanan-table-components/list-pesanan-lihat-modal/list-pesanan-lihat-modal.component";

const DashboardMain = () => {
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
      <ListPesananLihatModal />
    </div>
  );
};

export default DashboardMain;
