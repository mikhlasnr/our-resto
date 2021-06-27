import React, { useState } from "react";
import "./admin-pegawai-add-btn.styles.scss";

import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AdminPegawaiForm from "../admin-pegawai-form/admin-pegawai-form.component";

const AdminPegawaiAddBtn = () => {
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
        <AdminPegawaiForm />
      </Modal>
    </>
  );
};

export default AdminPegawaiAddBtn;
