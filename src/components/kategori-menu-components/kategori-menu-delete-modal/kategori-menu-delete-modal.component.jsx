import React, { useEffect } from "react";
import "./kategori-menu-delete-modal.styles.scss";

import axios from "axios";
import { storage } from "../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowModalDeleteKategoriMenu,
  selectIsUploading,
  selectDeleteKategoriById,
} from "../../../redux/kategoriMenu/kategoriMenu.selectors";
import {
  toggleShowModalDeleteKategoriMenu,
  removeDeleteKategoriById,
  toggleIsUploading,
  fetchDataKategoriMenu,
} from "../../../redux/kategoriMenu/kategoriMenu.action";

// Import Component
import { Modal, Button, Space, message, Spin } from "antd";
import { ReactComponent as WarningIcon } from "../../../assets/icons/warningIcon.svg";

const KategoriMenuDeleteModal = () => {
  const dispatch = useDispatch();
  const isUploading = useSelector(selectIsUploading);
  const isModalVisible = useSelector(selectShowModalDeleteKategoriMenu);
  const IdKategori = useSelector(selectDeleteKategoriById);

  const handlingModalOnCancel = () => {
    dispatch(removeDeleteKategoriById());
    dispatch(toggleShowModalDeleteKategoriMenu());
  };

  const handlingDeleteKategori = () => {
    dispatch(toggleIsUploading());
    axios
      .delete(`/kategori-menu/delete/${IdKategori}`)
      .then(response => {
        handlingDeleteImageRef();
      })
      .catch(err => {
        message.error("Hapus pegawai gagal!");
        dispatch(toggleIsUploading());
      });
  };

  const handlingDeleteImageRef = () => {
    let desertRef = storage.ref("kategoriImages").child(`${IdKategori}`);
    // Delete the file
    desertRef
      .delete()
      .then(() => {
        // File deleted successfully
        message.success("Hapus Pegawai Berhasil!");
        dispatch(toggleShowModalDeleteKategoriMenu());
        dispatch(toggleIsUploading());
        dispatch(fetchDataKategoriMenu());
        dispatch(removeDeleteKategoriById());
      })
      .catch(error => {
        // Uh-oh, an error occurred!
        message.error("Hapus pegawai gagal!");
        dispatch(toggleIsUploading());
      });
  };

  const handlingDeleteAction = () => {
    handlingDeleteKategori();
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
      <Spin spinning={isUploading}>
        <div className="delete-modal-container">
          <WarningIcon />
          <h2>Apakah kamu yakin menghapus kategori?</h2>
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

export default KategoriMenuDeleteModal;
