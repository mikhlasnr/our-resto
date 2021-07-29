import React from "react";
import "./list-pesanan-delete-modal.styles.scss";

import axios from "axios";
import { storage } from "../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowModalDeleteKategoriMenu,
  selectListPesananIsUploading,
} from "../../../redux/listPesanan/listPesanan.selectors";
import {
  toggleListPesananDeleteModalHidden,
  toggleIsUploadingListPesanan,
  fetchDataListPesanan,
} from "../../../redux/listPesanan/listPesanan.action";

// Import Component
import { Modal, Button, Space, message, Spin } from "antd";
import { ReactComponent as WarningIcon } from "../../../assets/icons/warningIcon.svg";

const ListPesananLihatModal = () => {
  const dispatch = useDispatch();
  const isUploading = useSelector(selectListPesananIsUploading);
  const isModalVisible = useSelector(selectShowModalDeleteKategoriMenu);

  const handlingModalOnCancel = () => {
    dispatch(toggleListPesananDeleteModalHidden());
  };

  const handlingDeleteListPesanan = () => {};

  const handlingDeleteAction = () => {};

  return (
    <Modal
      className="delete-modal"
      visible={!isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <Spin spinning={isUploading}>
        <div className="delete-modal-container">
          <WarningIcon />
          <h2>Apakah kamu yakin menghapus pesanan?</h2>
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

export default ListPesananLihatModal;
