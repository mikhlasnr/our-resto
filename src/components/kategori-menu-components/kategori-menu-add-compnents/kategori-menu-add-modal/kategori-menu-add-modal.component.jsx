import React from "react";
import "./kategori-menu-add-modal.styles.scss";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowModalAddKategoriMenu,
  selectIsUploading,
} from "../../../../redux/kategoriMenu/kategoriMenu.selectors";
import { toggleShowModalAddKategoriMenu } from "../../../../redux/kategoriMenu/kategoriMenu.action";

// Import Component
import { Modal, Spin } from "antd";
import KategoriMenuAddForm from "../kategori-menu-add-form/kategori-menu-add-form.component";
const KategoriMenuAddModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalAddKategoriMenu);
  const isUploading = useSelector(selectIsUploading);

  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalAddKategoriMenu());
  };

  return (
    <Modal
      className="kategori-modal-add"
      visible={isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <Spin spinning={isUploading}>
        <div className="kategori-modal-add-container">
          <h2>Tambah Kategori</h2>
        </div>
        <KategoriMenuAddForm />
      </Spin>
    </Modal>
  );
};

export default KategoriMenuAddModal;
