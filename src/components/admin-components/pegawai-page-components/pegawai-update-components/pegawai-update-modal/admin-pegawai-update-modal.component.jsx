import React from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectShowModalUpdatePegawai } from "../../../../../redux/users/users.selectors";
import { toggleShowModalUpdatePegawai } from "../../../../../redux/users/users.action";

// Import Component
import { Modal } from "antd";
import PegawaiUpdateForm from "../pegawai-update-form/pegawai-update-form.component";
const AdminPegawaiUpdateModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalUpdatePegawai);
  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalUpdatePegawai());
  };
  return (
    <Modal
      className="modal-table-pegawai-add"
      visible={isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
    >
      <h1>Update Pegawai</h1>
      <PegawaiUpdateForm />
    </Modal>
  );
};

export default AdminPegawaiUpdateModal;
