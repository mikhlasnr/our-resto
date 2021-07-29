import React from "react";

import { useDispatch } from "react-redux";
import {
  toggleShowModalUpdatePegawai,
  toggleShowModalDeletePegawai,
} from "../../../../../redux/pegawai/pegawai.action";
import { Button, Space } from "antd";

const PegawaiTableAction = ({ record: { IdUser } }) => {
  const dispatch = useDispatch();
  const handlingActionLihat = () => {};
  const handlingActionHapus = () => {};
  return (
    <Space>
      <Button className="btn-action-primary" onClick={handlingActionLihat}>
        Lihat
      </Button>
      <Button className="btn-action-secondary" onClick={handlingActionHapus}>
        Hapus
      </Button>
    </Space>
  );
};

export default PegawaiTableAction;
