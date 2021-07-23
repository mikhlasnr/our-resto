import React, { useEffect } from "react";
import "./admin-pegawai-delete-modal.styles.scss";

import axios from "axios";
import { storage } from "../../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowModalDeleteMenu,
  selectIsUploading,
} from "../../../../redux/menu/menu.selectors";
import {
  toggleShowModalDeletePegawai,
  toggleIsUploading,
} from "../../../../redux/pegawai/pegawai.action";
import { removeCurrentUserById } from "../../../../redux/userById/userById.action";

import {
  selectUserData,
  selectUserByIdIsFetching,
} from "../../../../redux/userById/userById.selectors";
import { fetchDataPegawai } from "../../../../redux/pegawai/pegawai.action";

// Import Component
import { Modal, Button, Space, message, Spin } from "antd";
import { ReactComponent as WarningIcon } from "../../../../assets/icons/warningIcon.svg";

const PegawaiDeleteModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalDeleteMenu);
  const userById = useSelector(selectUserData);
  const isDataFetching = useSelector(selectUserByIdIsFetching);
  const isUploading = useSelector(selectIsUploading);

  const handlingModalOnCancel = () => {
    dispatch(removeCurrentUserById());
    dispatch(toggleShowModalDeletePegawai());
  };

  const handlingDeletePegawai = () => {
    dispatch(toggleIsUploading());
    axios
      .delete(`/user/delete/${userById.IdUser}`)
      .then(response => {
        if (userById.Foto) {
          handlingDeleteImageRef();
        } else {
          dispatch(toggleShowModalDeletePegawai());
          dispatch(toggleIsUploading());
          dispatch(fetchDataPegawai());
          message.success("Hapus Pegawai Berhasil!");
          dispatch(removeCurrentUserById());
        }
      })
      .catch(err => {
        message.error("Hapus pegawai gagal!");
        dispatch(toggleIsUploading());
      });
  };

  const handlingDeleteImageRef = () => {
    let desertRef = storage.ref("userImages").child(`${userById.IdUser}`);
    // Delete the file
    desertRef
      .delete()
      .then(() => {
        // File deleted successfully
        dispatch(toggleShowModalDeletePegawai());
        dispatch(toggleIsUploading());
        dispatch(fetchDataPegawai());
        message.success("Hapus Pegawai Berhasil!");
        dispatch(removeCurrentUserById());
      })
      .catch(error => {
        // Uh-oh, an error occurred!
        message.error("Hapus pegawai gagal!");
        dispatch(toggleIsUploading());
      });
  };

  const handlingDeleteAction = () => {
    handlingDeletePegawai();
  };

  return (
    <Modal
      className="delete-modal"
      visible={isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <Spin spinning={isUploading || isDataFetching}>
        <div className="delete-modal-container">
          <WarningIcon />
          <h2>Apakah kamu yakin menghapus pegawai?</h2>
          <Space size="middle">
            <Button
              className="btn-default btn-action-cancel"
              onClick={handlingModalOnCancel}
            >
              Batal
            </Button>
            <Button
              className="btn-default btn-action-delete"
              onClick={handlingDeleteAction}
            >
              Hapus
            </Button>
          </Space>
        </div>
      </Spin>
    </Modal>
  );
};

export default PegawaiDeleteModal;
