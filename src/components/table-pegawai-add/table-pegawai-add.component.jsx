import React, { useState } from "react";
import "./table-pegawai-add.styles.scss";

import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TablePegawaiAddForm from "../table-pegawai-add-form/table-pegawai-add-form.component";

const TablePegawaiAdd = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Button
        onClick={showModal}
        className="btn-tambah"
        icon={<PlusOutlined />}
      >
        Tambah Pegawai
      </Button>
      <Modal
        className="modal-table-pegawai-add"
        visible={isModalVisible}
        onCancel={showModal}
        footer={null}
        closable={false}
      >
        <h1>Tambah Pegawai</h1>
        <TablePegawaiAddForm />
      </Modal>
    </>
  );
};

export default TablePegawaiAdd;
