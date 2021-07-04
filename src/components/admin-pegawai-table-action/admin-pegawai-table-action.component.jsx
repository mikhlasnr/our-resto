import React from "react";

import { useDispatch } from "react-redux";
import { toggleShowModalUpdatePegawai } from "../../redux/users/users.action";
import { Button, Space } from "antd";
const AdminPegawaiTableAction = () => {
  const dispatch = useDispatch();
  const handlingUpdatePegawai = () => {
    dispatch(toggleShowModalUpdatePegawai());
  };
  return (
    <Space>
      <Button className="btn-action-primary" onClick={handlingUpdatePegawai}>
        Lihat
      </Button>
      <Button className="btn-action-danger">Hapus</Button>
    </Space>
  );
};

export default AdminPegawaiTableAction;
