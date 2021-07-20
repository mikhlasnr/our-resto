import React from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowModalAddMenu,
  selectIsUploading,
} from "../../../../../redux/menu/menu.selectors";
import { toggleShowModalAddMenu } from "../../../../../redux/menu/menu.action";

// Import Component
import { Modal, Spin } from "antd";
import MenuAddForm from "../menu-add-form/menu-add-form.components";

const MenuAddModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalAddMenu);
  const isUploading = useSelector(selectIsUploading);

  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalAddMenu());
  };

  return (
    <Modal
      className="modal-large"
      visible={isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <Spin spinning={isUploading}>
        <h1 className="title"> Tambah Menu</h1>
        <MenuAddForm />
      </Spin>
    </Modal>
  );
};

export default MenuAddModal;
