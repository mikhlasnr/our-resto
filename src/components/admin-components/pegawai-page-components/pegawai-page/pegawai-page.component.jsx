import React, { useEffect } from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataPegawai } from "../../../../redux/users/users.action";
import { fetchDataRoles } from "../../../../redux/roles/roles.action";

// import component
import PegawaiTable from "../pegawai-table-components/pegawai-table/pegawai-table.component";
import PegawaiAddModal from "../pegawai-add-components/pegawai-add-modal/pegawai-add-modal.component";
import PegawaiUpdateModal from "../pegawai-update-components/pegawai-update-modal/pegawai-update-modal.component";
import PegawaiDeleteModal from "../pegawai-delete-modal/admin-pegawai-delete-modal.component";
const PegawaiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataPegawai());
    dispatch(fetchDataRoles());
  }, []);

  return (
    <div id="dashboard-admin-pegawai-page">
      <h1>Daftar Pegawai</h1>
      <PegawaiTable />
      <PegawaiAddModal />
      <PegawaiUpdateModal />
      <PegawaiDeleteModal />
    </div>
  );
};

export default PegawaiPage;
