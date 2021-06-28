import React, { useEffect } from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataRoles } from "../../redux/roles/roles.action";
import { fetchDataPegawai } from "../../redux/users/users.action";

// import component
import AdminPegawaiTable from "../admin-pegawai-table/admin-pegawai-table.component";

const AdminPegawaiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataPegawai());
  }, []);

  return (
    <div id="dashboard-admin-pegawai-page">
      <h1>Daftar Pegawai</h1>
      <AdminPegawaiTable />
    </div>
  );
};

export default AdminPegawaiPage;
