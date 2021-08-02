import React, { useRef } from "react";
import "./struk-pembayaran-modal.styles.scss";
import axios from "axios";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectListPesananLihatModaltHidden } from "../../../../redux/listPesanan/listPesanan.selectors";
import { toggleListPesananLihatModalHidden } from "../../../../redux/listPesanan/listPesanan.action";
import { removeDetailPesanan } from "../../../../redux/detailPesanan/detailPesanan.action";
import {
  selectDataDetailPesanan,
  selectInfoPesanan,
} from "../../../../redux/detailPesanan/detailPesanan.selectors";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";

// Handling print
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "../list-pesanan-print/list-pesanan-print.components";

// Import Component
import { Modal, Spin, Skeleton, Button, message } from "antd";

const StrukPembayaranModal = () => {
  // START HANDLING PRINT
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    removeAfterPrint: () => true,
    documentTitle: () => `invoice-ourresto`,
  });
  // END HANDLING PRINT

  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectListPesananLihatModaltHidden);
  const dataDetailPesanan = useSelector(selectDataDetailPesanan);
  const infoPemesan = useSelector(selectInfoPesanan);
  const currentUser = useSelector(selectCurrentUser);

  const handlingModalOnCancel = () => {
    dispatch(removeDetailPesanan());
    dispatch(toggleListPesananLihatModalHidden());
  };

  const handlingRenderMenuPesanan = () =>
    dataDetailPesanan.map(item => {
      return (
        <div className="list-pesanan-title" key={item.IdMenu}>
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
  // Handling display date
  const handlingFormatDate = () => {
    if (infoPemesan) {
      return infoPemesan.TanggalDibuat.replace("T", " ").split(".")[0];
    }
    return "";
  };
  return (
    <>
      <Modal
        className="struk-pembayaran"
        visible={!isModalVisible}
        onCancel={handlingModalOnCancel}
        footer={null}
        closable={false}
        centered
      >
        <Spin spinning={false}>
          <div className="struk-pembayaran-container">
            <div className="struk-pembayaran-header">
              <h1>Struk Pembayaran</h1>
            </div>
            <div className="struk-pembayaran-body">
              <div className="struk-info-kasir dash-diveder-bottom">
                {infoPemesan ? (
                  <p>Nama Kasir</p>
                ) : (
                  <Skeleton.Button active={true} />
                )}
                {infoPemesan ? (
                  <p>{currentUser.Nama}</p>
                ) : (
                  <Skeleton.Button active={true} />
                )}
              </div>
              <div className="struk-info-kasir dash-diveder-bottom">
                {infoPemesan ? <p></p> : <Skeleton.Button active={true} />}
                {infoPemesan ? (
                  <p>{handlingFormatDate()}</p>
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
            <Button className="btn-action-secondary" onClick={handlePrint}>
              Cetak
            </Button>
          </div>
        </Spin>
      </Modal>
      <ComponentToPrint
        ref={componentRef}
        infoPemesan={infoPemesan}
        dataDetailPesanan={dataDetailPesanan}
      />
    </>
  );
};

export default StrukPembayaranModal;
