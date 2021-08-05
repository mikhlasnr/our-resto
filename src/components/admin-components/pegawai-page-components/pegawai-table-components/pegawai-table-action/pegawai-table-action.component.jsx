import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowModalUpdatePegawai,
  toggleShowModalDeletePegawai,
} from "../../../../../redux/pegawai/pegawai.action";
import { selectCurrentUserRole } from "../../../../../redux/user/user.selectors";
import { fetchUserById } from "../../../../../redux/userById/userById.action";
import { Button, Space } from "antd";

const PegawaiTableAction = ({ record: { IdUser } }) => {
  const dispatch = useDispatch();
  const currentRole = useSelector(selectCurrentUserRole);
  const handlingActionLihat = () => {
    dispatch(fetchUserById(IdUser));
    dispatch(toggleShowModalUpdatePegawai());
  };
  const handlingActionHapus = () => {
    dispatch(fetchUserById(IdUser));
    dispatch(toggleShowModalDeletePegawai());
  };
  return (
    <Space>
      <Button className="btn-action-primary" onClick={handlingActionLihat}>
        Lihat
      </Button>
      {currentRole === "admin" ? (
        <Button className="btn-action-secondary" onClick={handlingActionHapus}>
          Hapus
        </Button>
      ) : null}
    </Space>
  );
};

export default PegawaiTableAction;
