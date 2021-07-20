import React, { useEffect } from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";

import {
  selectShowModalUpdatePegawai,
  selectInputProfile,
} from "../../../../../redux/pegawai/pegawai.selectors";
import {
  toggleShowModalUpdatePegawai,
  removeInputProfile,
} from "../../../../../redux/pegawai/pegawai.action";

import { removeCurrentUserById } from "../../../../../redux/userById/userById.action";
import { selectUserData } from "../../../../../redux/userById/userById.selectors";

// Import Component
import { Modal } from "antd";
import PegawaiUpdateForm from "../pegawai-update-form/pegawai-update-form.component";

const AdminPegawaiUpdateModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalUpdatePegawai);
  const userById = useSelector(selectUserData);
  const inputProfile = useSelector(selectInputProfile);

  useEffect(() => {
    if (userById !== null && isModalVisible === false)
      dispatch(removeCurrentUserById());
    if (inputProfile !== null && isModalVisible === false)
      dispatch(removeInputProfile());
  }, [isModalVisible]);

  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalUpdatePegawai());
  };

  return (
    <Modal
      className="modal-large"
      visible={isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered={true}
    >
      <h1>Update Pegawai</h1>
      {isModalVisible ? <PegawaiUpdateForm /> : null}
    </Modal>
  );
};

export default AdminPegawaiUpdateModal;
