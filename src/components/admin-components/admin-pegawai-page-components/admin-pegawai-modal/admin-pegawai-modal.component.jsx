import React from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectShowModalPegawai } from "../../../../redux/users/users.selectors";
import { toggleShowModalPegawai } from "../../../../redux/users/users.action";

// Import Component
import { Modal } from "antd";
import AdminPegawaiForm from "../admin-pegawai-form/admin-pegawai-form.component";

const AdminPegawaiModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalPegawai);
  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalPegawai());
  };
  return (
    <Modal
      className="modal-table-pegawai-add"
      visible={isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
    >
      <h1>Tambah Pegawai</h1>
      <AdminPegawaiForm />
    </Modal>
  );
};

export default AdminPegawaiModal;
