import React, { useRef } from "react";
import "./struk-pembayaran-modal.styles.scss";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectModalStrukrHidden } from "../../../../redux/listPesanan/listPesanan.selectors";
import { toggleModalStrukHidden } from "../../../../redux/listPesanan/listPesanan.action";
import { removeDetailPesanan } from "../../../../redux/detailPesanan/detailPesanan.action";
import { selectDataDetailPesanan } from "../../../../redux/detailPesanan/detailPesanan.selectors";
import { selectDataPembayaran } from "../../../../redux/pembayaran/pembayaran.selectors";
import { removeDataPembayaran } from "../../../../redux/pembayaran/pembayaran.action";
// Import Component
import { Modal, Skeleton, Button } from "antd";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "../component-to-print/component-to-print.components";
const StrukPembayaranModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectModalStrukrHidden);
  const dataDetailPesanan = useSelector(selectDataDetailPesanan);
  const dataPemesan = useSelector(selectDataPembayaran);
  // START Handling Print
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // END Handling Print

  const handlingModalOnCancel = () => {
    dispatch(removeDataPembayaran());
    dispatch(removeDetailPesanan());
    dispatch(toggleModalStrukHidden());
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
          <h1>Struk Pembayaran</h1>
        </div>
        <div className="detail-pesanan-body">
          <div className="detail-pesanan-item dash-diveder-bottom">
            {dataPemesan ? <p>kasir</p> : <Skeleton.Button active={true} />}
            {dataPemesan ? (
              <p>{dataPemesan.NamaKasir}</p>
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
            <div className="detail-pesanan-item">
              {dataPemesan ? <p>Payment</p> : <Skeleton.Button active={true} />}
              {dataPemesan ? (
                <p>{dataPemesan.Nominal}</p>
              ) : (
                <Skeleton.Button active={true} />
              )}
            </div>
            <div className="detail-pesanan-item">
              {dataPemesan ? <p>Kembali</p> : <Skeleton.Button active={true} />}
              {dataPemesan ? (
                <p>{dataPemesan.Kembalian}</p>
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
            disabled={dataPemesan ? false : true}
            onClick={handlePrint}
          >
            Cetak
          </Button>
        </div>

        {dataPemesan && dataDetailPesanan ? (
          <div className="print-component-container">
            <ComponentToPrint
              ref={componentRef}
              dataPemesan={dataPemesan}
              dataDetailPesanan={dataDetailPesanan}
            />
          </div>
        ) : null}
      </div>
    </Modal>
  );
};

export default StrukPembayaranModal;
