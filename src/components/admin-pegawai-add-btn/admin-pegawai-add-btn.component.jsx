import React, { useState } from "react";
import "./admin-pegawai-add-btn.styles.scss";

// Handling Redux
import { useDispatch } from "react-redux";
import { toggleShowModalPegawai } from "../../redux/users/users.action";

// Import Components
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AdminPegawaiAddBtn = () => {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(toggleShowModalPegawai());
  };

  return (
    <Button onClick={showModal} className="btn-tambah" icon={<PlusOutlined />}>
      Tambah Pegawai
    </Button>
  );
};

export default AdminPegawaiAddBtn;
