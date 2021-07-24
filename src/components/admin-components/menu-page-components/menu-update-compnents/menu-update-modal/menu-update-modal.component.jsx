import React, { useEffect } from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowModalUpdateMenu,
  selectInputProfileMenu,
  selectIsUploading,
} from "../../../../../redux/menu/menu.selectors";
import {
  toggleShowModalUpdateMenu,
  removeInputProfileMenu,
} from "../../../../../redux/menu/menu.action";

import { selectDataMenuById } from "../../../../../redux/menuById/menuById.selectors";
import { removeCurrentMenuById } from "../../../../../redux/menuById/menuById.action";

// Import Component
import { Modal, Spin } from "antd";
import MenuUpdateForm from "../menu-update-form/menu-update-form.components";

const MenuUpdateModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectShowModalUpdateMenu);
  const dataMenuById = useSelector(selectDataMenuById);
  const isUploading = useSelector(selectIsUploading);

  useEffect(() => {
    if (selectInputProfileMenu) dispatch(removeInputProfileMenu());
    if (dataMenuById && isModalVisible === false)
      dispatch(removeCurrentMenuById());
  }, [isModalVisible]);

  const handlingModalOnCancel = () => {
    dispatch(toggleShowModalUpdateMenu());
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
        <h1 className="title">Update Menu</h1>
        <MenuUpdateForm />
      </Spin>
    </Modal>
  );
};

export default MenuUpdateModal;
