import React, { useEffect } from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowModalAddPegawai,
  selectInputProfile,
  selectIsUploading,
} from "../../../../../redux/pegawai/pegawai.selectors";
import {
  toggleShowModalAddPegawai,
  removeInputProfile,
} from "../../../../../redux/pegawai/pegawai.action";

// Import Component
import { Modal, Spin } from "antd";
import PegawaiAddForm from "../pegawai-add-form/pegawai-add-form.component";

const PegawaiAddModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalAddPegawai);
  const inputProfile = useSelector(selectInputProfile);
  const isUploading = useSelector(selectIsUploading);

  useEffect(() => {
    if (inputProfile !== null && isModalVisible === false)
      dispatch(removeInputProfile());
  }, [dispatch, isModalVisible]);

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
      centered={true}
    >
      <Spin spinning={isUploading}>
        <h1>Tambah Pegawai</h1>
        {isModalVisible ? <PegawaiAddForm /> : null}
      </Spin>
    </Modal>
  );
};

export default PegawaiAddModal;
