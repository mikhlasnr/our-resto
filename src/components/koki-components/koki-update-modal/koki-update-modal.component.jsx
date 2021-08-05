import React from "react";
import { useState } from "react";
import "./koki-update-modal.styles.scss";
import axios from "axios";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectModalUpdateStatusMasakHidden,
  selectDataPesanan,
} from "../../../redux/listPesanan/listPesanan.selectors";
import {
  toggleModalUpdateStatusMasakHidden,
  removeDataPesanan,
  fetchDataListPesananKoki,
} from "../../../redux/listPesanan/listPesanan.action";

// Import Component
import { Modal, Button, Space, message, Spin } from "antd";
import { ReactComponent as UpdateIcon } from "../../../assets/icons/update-icon.svg";

const KokiUpdateModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectModalUpdateStatusMasakHidden);
  const dataPesanan = useSelector(selectDataPesanan);
  const [isUploading, setIsUploading] = useState(false);

  const handlingModalOnCancel = () => {
    dispatch(removeDataPesanan());
    dispatch(toggleModalUpdateStatusMasakHidden());
  };

  const handlingUpdateStatusMasak = () => {
    setIsUploading(true);
    axios
      .put(`/pesanan/update-status-masak/${dataPesanan.IdPesanan}`)
      .then(response => {
        dispatch(toggleModalUpdateStatusMasakHidden());
        dispatch(fetchDataListPesananKoki());
        message.success("Pembaharuan Status Masak Berhasil!");
        setIsUploading(false);
      })
      .catch(err => {
        setIsUploading(false);
        message.error("Pembaharuan Status Masak Gagal!");
      });
  };

  const handlingLoadingFetchDataPesanan = () => {
    if (dataPesanan) return false;
    return true;
  };

  const handlingClickUpdate = () => {
    if (dataPesanan) handlingUpdateStatusMasak();
  };

  return (
    <Modal
      className="confirm-modal"
      visible={!isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <Spin spinning={handlingLoadingFetchDataPesanan() || isUploading}>
        <div className="confirm-modal-container">
          <UpdateIcon />
          <h2>Apakah kamu yakin pesanan sudah selesai?</h2>
          <Space size="middle">
            <Button
              className="btn-default btn-action-update-cancel"
              onClick={handlingModalOnCancel}
            >
              Batal
            </Button>
            <Button
              className="btn-default btn-action-update"
              onClick={handlingClickUpdate}
            >
              Yakin
            </Button>
          </Space>
        </div>
      </Spin>
    </Modal>
  );
};

export default KokiUpdateModal;
