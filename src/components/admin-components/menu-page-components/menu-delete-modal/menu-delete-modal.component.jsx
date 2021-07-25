import React from "react";
import "./menu-delete-modal.styles.scss";

import axios from "axios";
import { storage } from "../../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectShowModalDeleteMenu } from "../../../../redux/menu/menu.selectors";
import {
  fetchDataMenu,
  toggleShowModalDeleteMenu,
} from "../../../../redux/menu/menu.action";

import {
  selectDataMenuById,
  selectIsFetching,
  selectIsUploading,
} from "../../../../redux/menuById/menuById.selectors";
import {
  removeCurrentMenuById,
  toggleIsUploading,
} from "../../../../redux/menuById/menuById.action";

// Import Component
import { Modal, Button, Space, message, Spin } from "antd";
import { ReactComponent as WarningIcon } from "../../../../assets/icons/warningIcon.svg";

const MenuDeleteModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalDeleteMenu);
  const menuById = useSelector(selectDataMenuById);
  const isDataFetching = useSelector(selectIsFetching);
  const isUploading = useSelector(selectIsUploading);
  const handlingModalOnCancel = () => {
    dispatch(removeCurrentMenuById());
    dispatch(toggleShowModalDeleteMenu());
  };

  const handlingDeletePegawai = () => {
    if (menuById) {
      dispatch(toggleIsUploading());
      axios
        .delete(`/menu/delete/${menuById.IdMenu}`)
        .then(response => {
          console.log(response);
          if (menuById.Foto) {
            handlingDeleteImageRef();
          } else {
            dispatch(toggleShowModalDeleteMenu());
            dispatch(toggleIsUploading());
            dispatch(fetchDataMenu());
            message.success("Hapus Pegawai Berhasil!");
            dispatch(removeCurrentMenuById());
          }
        })
        .catch(err => {
          console.log(err);
          message.error("Hapus pegawai gagal!");
          dispatch(toggleIsUploading());
        });
    }
  };

  const handlingDeleteImageRef = () => {
    let desertRef = storage.ref("menuImages").child(`${menuById.IdMenu}`);
    // Delete the file
    desertRef
      .delete()
      .then(() => {
        // File deleted successfully
        dispatch(toggleShowModalDeleteMenu());
        dispatch(toggleIsUploading());
        dispatch(fetchDataMenu());
        message.success("Hapus Pegawai Berhasil!");
        dispatch(removeCurrentMenuById());
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
          <h2>Apakah kamu yakin menghapus menu?</h2>
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

export default MenuDeleteModal;
