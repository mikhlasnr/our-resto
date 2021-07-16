import React from "react";
import "./pegawai-add-btn.styles.scss";

// Handling Redux
import { useDispatch } from "react-redux";
import { toggleShowModalAddPegawai } from "../../../../redux/pegawai/pegawai.action";

// Import Components
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const PegawaiAddBtn = () => {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(toggleShowModalAddPegawai());
  };

  return (
    <Button onClick={showModal} className="btn-tambah" icon={<PlusOutlined />}>
      Tambah Pegawai
    </Button>
  );
};

export default PegawaiAddBtn;
