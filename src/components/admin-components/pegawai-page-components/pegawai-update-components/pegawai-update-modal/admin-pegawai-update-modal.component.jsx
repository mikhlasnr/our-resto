import React, { useEffect } from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectShowModalUpdatePegawai } from "../../../../../redux/pegawai/pegawai.selectors";
import { fetchDataRoles } from "../../../../../redux/roles/roles.action";
import { toggleShowModalUpdatePegawai } from "../../../../../redux/pegawai/pegawai.action";
import { removeCurrentUserById } from "../../../../../redux/userById/userById.action";

// Import Component
import { Modal } from "antd";
import PegawaiUpdateForm from "../pegawai-update-form/pegawai-update-form.component";
const AdminPegawaiUpdateModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRoles());
  }, [dispatch]);

  const isModalVisible = useSelector(selectShowModalUpdatePegawai);

  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalUpdatePegawai());
    dispatch(removeCurrentUserById());
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
