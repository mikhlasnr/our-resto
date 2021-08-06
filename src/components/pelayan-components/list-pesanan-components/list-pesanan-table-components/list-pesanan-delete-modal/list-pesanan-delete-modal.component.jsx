import React from "react";
import "./list-pesanan-delete-modal.styles.scss";
import axios from "axios";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectListPesananDeleteModaltHidden,
  selectListPesananIsUploading,
} from "../../../../../redux/listPesanan/listPesanan.selectors";
import {
  toggleListPesananDeleteModalHidden,
  toggleIsUploadingListPesanan,
  fetchDataListPesananPelayan,
} from "../../../../../redux/listPesanan/listPesanan.action";
import { removeDetailPesanan } from "../../../../../redux/detailPesanan/detailPesanan.action";
import {
  selectDataDetailPesanan,
  selectListPesananIsFetching,
} from "../../../../../redux/detailPesanan/detailPesanan.selectors";
import { fetchDataMenu } from "../../../../../redux/menu/menu.action";

// Import Component
import { Modal, Button, Space, message, Spin } from "antd";
import { ReactComponent as WarningIcon } from "../../../../../assets/icons/warningIcon.svg";

const ListPesananDeleteModal = () => {
  const dispatch = useDispatch();
  const isUploading = useSelector(selectListPesananIsUploading);
  const isModalVisible = useSelector(selectListPesananDeleteModaltHidden);
  const dataDetailPesanan = useSelector(selectDataDetailPesanan);
  const detailIsFetching = useSelector(selectListPesananIsFetching);

  const handlingModalOnCancel = () => {
    dispatch(removeDetailPesanan());
    dispatch(toggleListPesananDeleteModalHidden());
  };

  const handlingDataDetailPesananNull = () =>
    dataDetailPesanan ? false : true;

  const handlingDeletePesanan = () => {
    const { IdPesanan } = dataDetailPesanan[0];
    dispatch(toggleIsUploadingListPesanan());
    axios
      .delete(`/pesanan/delete/${IdPesanan}`)
      .then(response => {
        handlingUpdateStok();
      })
      .catch(err => {
        console.log(err);
        message.error("Hapus Pesanan gagal!");
        dispatch(toggleIsUploadingListPesanan());
        dispatch(toggleListPesananDeleteModalHidden());
      });
  };

  const handlingUpdateStok = () => {
    dataDetailPesanan.map((item, indeks) => {
      if (indeks === dataDetailPesanan.length - 1) {
        axios
          .put(`/menu/increment-stok/${item.IdMenu}`, {
            Quantity: item.Quantity,
          })
          .then(res => {
            dispatch(fetchDataMenu());
            dispatch(fetchDataListPesananPelayan());
            dispatch(toggleIsUploadingListPesanan());
            dispatch(toggleListPesananDeleteModalHidden());
            message.success("Hapus Pesanan Berhasil!");
            dispatch(removeDetailPesanan());
          })
          .catch(error => console.error(error));
      } else {
        axios
          .put(`/menu/decrement-stok/${item.IdMenu}`, {
            Quantity: item.Quantity,
          })
          .catch(error => console.error(error));
      }
    });
  };

  const handlingDeleteAction = () => {
    if (dataDetailPesanan) handlingDeletePesanan();
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
      <Spin
        spinning={
          isUploading || detailIsFetching || handlingDataDetailPesananNull()
        }
      >
        <div className="confirm-modal-container">
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

export default ListPesananDeleteModal;
