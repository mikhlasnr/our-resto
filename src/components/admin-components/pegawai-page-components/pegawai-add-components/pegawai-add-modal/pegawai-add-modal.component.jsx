import React from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectShowModalAddPegawai } from "../../../../../redux/pegawai/pegawai.selectors";
import { toggleShowModalAddPegawai } from "../../../../../redux/pegawai/pegawai.action";

// Import Component
import { Modal } from "antd";
import PegawaiAddForm from "../pegawai-add-form/pegawai-add-form.component";

const PegawaiAddModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalAddPegawai);
  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalAddPegawai());
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
      <PegawaiAddForm />
    </Modal>
  );
};

export default PegawaiAddModal;
