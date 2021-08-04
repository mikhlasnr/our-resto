import React from "react";
import "./detail-pesanan-modal.styles.scss";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectDetailPesananHidden } from "../../../../redux/listPesanan/listPesanan.selectors";
import {
  toggleModalDetailPesananHidden,
  toggleModalBayarHidden,
  removeDataPesanan,
} from "../../../../redux/listPesanan/listPesanan.action";
import { removeDetailPesanan } from "../../../../redux/detailPesanan/detailPesanan.action";
import {
  selectDataDetailPesanan,
  selectInfoPesanan,
} from "../../../../redux/detailPesanan/detailPesanan.selectors";

// Import Component
import { Modal, Skeleton, Button } from "antd";

const DetailPesananModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectDetailPesananHidden);
  const dataDetailPesanan = useSelector(selectDataDetailPesanan);
  const dataPemesan = useSelector(selectInfoPesanan);

  const handlingModalOnCancel = () => {
    dispatch(removeDetailPesanan());
    dispatch(removeDataPesanan());
    dispatch(toggleModalDetailPesananHidden());
  };

  const handlingRenderMenuPesanan = () =>
    dataDetailPesanan.map(item => {
      return (
        <div
          className="detail-pesanan-item menu-pesanan-item"
          key={item.IdMenu}
        >
          <div className="menu-pesanan-item-info">
            <p>{item.Quantity}</p>
            <p>{item.NamaMenu}</p>
          </div>
          <p>{`${item.Harga}`}</p>
        </div>
      );
    });
  const handlingRenderMenuPesananSkeleton = () =>
    [1, 2, 3].map(item => {
      return (
        <div className="detail-pesanan-item" key={item}>
          <Skeleton.Button active={true} />
          <Skeleton.Button active={true} />
        </div>
      );
    });
  const handlingDisableBtnSelanjutnya = () => {
    if (dataDetailPesanan) return false;
    return true;
  };

  const handlingClickBtnPilihMetode = () => {
    dispatch(toggleModalBayarHidden());
    dispatch(toggleModalDetailPesananHidden());
  };
  return (
    <Modal
      className="detail-pesanan"
      visible={!isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className="detail-pesanan-container">
        <div className="detail-pesanan-header">
          <h1>Detail Pesanan</h1>
        </div>
        <div className="detail-pesanan-body">
          <div className="detail-pesanan-item dash-diveder-bottom">
            {dataPemesan ? (
              <p>{dataPemesan.AtasNama}</p>
            ) : (
              <Skeleton.Button active={true} />
            )}
            {dataPemesan ? (
              <p>Meja {dataPemesan.NoMeja}</p>
            ) : (
              <Skeleton.Button active={true} />
            )}
          </div>
          <div className="dash-diveder-bottom">
            {dataDetailPesanan
              ? handlingRenderMenuPesanan()
              : handlingRenderMenuPesananSkeleton()}
          </div>
          <div className="dash-diveder-bottom">
            <div className="detail-pesanan-item">
              {dataPemesan ? (
                <p>Subtotal</p>
              ) : (
                <Skeleton.Button active={true} />
              )}
              {dataPemesan ? (
                <p>{dataPemesan.TotalHarga}</p>
              ) : (
                <Skeleton.Button active={true} />
              )}
            </div>
            <div className="detail-pesanan-item">
              {dataPemesan ? <p>Total</p> : <Skeleton.Button active={true} />}
              {dataPemesan ? (
                <p>{dataPemesan.TotalHarga}</p>
              ) : (
                <Skeleton.Button active={true} />
              )}
            </div>
          </div>
        </div>
        <div className="detail-pesanan-footer">
          <Button
            block
            className="btn-action-secondary"
            disabled={dataPemesan ? handlingDisableBtnSelanjutnya() : true}
            onClick={handlingClickBtnPilihMetode}
          >
            Pilih Metode Pembayaran
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailPesananModal;
