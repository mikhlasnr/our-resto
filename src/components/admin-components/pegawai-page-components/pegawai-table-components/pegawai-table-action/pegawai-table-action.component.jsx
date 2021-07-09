import React from "react";

import { useDispatch } from "react-redux";
import { toggleShowModalUpdatePegawai } from "../../../../../redux/pegawai/pegawai.action";
import { fetchUserById } from "../../../../../redux/userById/userById.action";
import { Button, Space } from "antd";

const PegawaiTableAction = ({ record: { IdUser } }) => {
  const dispatch = useDispatch();
  const handlingUpdatePegawai = () => {
    dispatch(fetchUserById(IdUser));
    dispatch(toggleShowModalUpdatePegawai());
    console.log(IdUser);
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

export default PegawaiTableAction;
