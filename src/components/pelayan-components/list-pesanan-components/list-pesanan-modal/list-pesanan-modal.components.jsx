import React, { useEffect } from "react";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";

import { selectListPesananModaltHidden } from "../../../../redux/listPesanan/listPesanan.selectors";
import {
  fetchDataListPesanan,
  toggleListPesananModalHidden,
} from "../../../../redux/listPesanan/listPesanan.action";

// Import Component
import { Modal } from "antd";
import ListPesananTable from "../list-pesanan-table-components/list-pesanan-table/list-pesanan-table.component";
import ListPesananDeleteModal from "../list-pesanan-table-components/list-pesanan-delete-modal/list-pesanan-delete-modal.component";

const ListPesananModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectListPesananModaltHidden);
  useEffect(() => {
    if (!isModalVisible) dispatch(fetchDataListPesanan());
  }, [isModalVisible]);

  const handlingModalOnCancel = () => {
    dispatch(toggleListPesananModalHidden());
  };

  return (
    <Modal
      className="modal-large"
      visible={!isModalVisible}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered={true}
    >
      <h1>List Pesanan</h1>
      <ListPesananTable />
      <ListPesananDeleteModal />
    </Modal>
  );
};

export default ListPesananModal;
