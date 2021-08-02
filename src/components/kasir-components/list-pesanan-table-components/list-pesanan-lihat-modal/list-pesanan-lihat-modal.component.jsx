import React from "react";
import "./list-pesanan-lihat-modal.styles.scss";
import axios from "axios";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectListPesananLihatModaltHidden,
  selectListPesananIsUploading,
} from "../../../../../redux/listPesanan/listPesanan.selectors";
import {
  toggleListPesananLihatModalHidden,
  fetchDataListPesananPelayan,
  toggleIsUploadingListPesanan,
} from "../../../../../redux/listPesanan/listPesanan.action";
import { removeDetailPesanan } from "../../../../../redux/detailPesanan/detailPesanan.action";
import {
  selectDataDetailPesanan,
  selectInfoPesanan,
} from "../../../../../redux/detailPesanan/detailPesanan.selectors";

// Import Component
import { Modal, Spin, Skeleton, Button, message } from "antd";

const ListPesananLihatModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectListPesananLihatModaltHidden);
  const dataDetailPesanan = useSelector(selectDataDetailPesanan);
  const infoPemesan = useSelector(selectInfoPesanan);

  const handlingModalOnCancel = () => {
    dispatch(removeDetailPesanan());
    dispatch(toggleListPesananLihatModalHidden());
  };

  const handlingRenderMenuPesanan = () =>
    dataDetailPesanan.map(item => {
      return (
        <div className="list-pesanan-title " key={item.IdMenu}>
          <p>{item.NamaMenu}</p>
          <p>{item.Quantity}</p>
        </div>
      );
    });
  const handlingRenderMenuPesananSkeleton = () =>
    [1, 2, 3].map(item => {
      return (
        <div className="detail-menu-pesanan-item" key={item}>
          <Skeleton.Button active={true} />
        </div>
      );
    });
  const handlingDisableBtnAntar = () => {
    const { StatusMasak } = infoPemesan;
    if (StatusMasak === "selesai") return false;
    return true;
  };

  const handlingClickBtnAntar = () => {
    const { IdPesanan } = infoPemesan;
    dispatch(toggleIsUploadingListPesanan());
    axios
      .put(`/pesanan/update-status-antar/${IdPesanan}`)
      .then(response => {
        dispatch(toggleIsUploadingListPesanan());
        dispatch(fetchDataListPesananPelayan());
        dispatch(toggleListPesananLihatModalHidden());
        message.success("Pembaharuan Status Antar Berhasil!");
      })
      .catch(err => {
        dispatch(toggleIsUploadingListPesanan());
        message.error("Pembaharuan Status Antar Gagal!");
      });
  };
  return (
    <Modal
      className="list-pesanan-lihat"
      visible={!isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <Spin spinning={false}>
        <div className="list-pesanan-lihat-container">
          <div className="list-pesanan-lihat-header">
            <h1>Detail Pesanan</h1>
          </div>
          <div className="list-pesanan-lihat-body">
            <div className="list-pesanan-lihat-item dash-diveder-bottom">
              {infoPemesan ? (
                <p>{infoPemesan.AtasNama}</p>
              ) : (
                <Skeleton.Button active={true} />
              )}
              {infoPemesan ? (
                <p>Meja {infoPemesan.NoMeja}</p>
              ) : (
                <Skeleton.Button active={true} />
              )}
            </div>
            <div className="detail-menu-pesanan dash-diveder-bottom">
              {/* <h2>Menu Pesanan</h2> */}
              {dataDetailPesanan
                ? handlingRenderMenuPesanan()
                : handlingRenderMenuPesananSkeleton()}
            </div>
          </div>
          <Button
            className="btn-action-secondary"
            disabled={infoPemesan ? handlingDisableBtnAntar() : true}
            onClick={handlingClickBtnAntar}
          >
            Sudah Diantar
          </Button>
        </div>
      </Spin>
    </Modal>
  );
};

export default ListPesananLihatModal;
