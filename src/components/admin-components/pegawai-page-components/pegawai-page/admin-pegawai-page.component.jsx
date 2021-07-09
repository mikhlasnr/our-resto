import React, { useEffect } from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataPegawai } from "../../../../redux/users/users.action";

// import component
import PegawaiTable from "../pegawai-table-components/pegawai-table/pegawai-table.component";
import PegawaiAddModal from "../pegawai-add-components/pegawai-add-modal/pegawai-add-modal.component";
import PegawaiUpdateModal from "../pegawai-update-components/pegawai-update-modal/admin-pegawai-update-modal.component";

const PegawaiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataPegawai());
  }, [dispatch]);

  return (
    <div id="dashboard-admin-pegawai-page">
      <h1>Daftar Pegawai</h1>
      <PegawaiTable />
      <PegawaiAddModal />
      <PegawaiUpdateModal />
    </div>
  );
};

export default PegawaiPage;
