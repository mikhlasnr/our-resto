import React, { useEffect } from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataPegawai } from "../../redux/users/users.action";
import AdminPegawaiModal from "../admin-pegawai-modal/admin-pegawai-modal.component";

// import component
import AdminPegawaiTable from "../admin-pegawai-table/admin-pegawai-table.component";

const AdminPegawaiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataPegawai());
  }, [dispatch]);

  return (
    <div id="dashboard-admin-pegawai-page">
      <h1>Daftar Pegawai</h1>
      <AdminPegawaiTable />
      <AdminPegawaiModal />
    </div>
  );
};

export default AdminPegawaiPage;
