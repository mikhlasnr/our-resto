import React from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import {
  toggleListPesananDeleteModalHidden,
  toggleListPesananLihatModalHidden,
} from "../../../../../redux/listPesanan/listPesanan.action";
import {
  fetchDataDetailPesanan,
  setInfoPemesan,
} from "../../../../../redux/detailPesanan/detailPesanan.action";

// Import Components
import { Button, Space } from "antd";

const PegawaiTableAction = ({ record }) => {
  const dispatch = useDispatch();
  const handlingActionLihat = () => {
    dispatch(setInfoPemesan(record));
    dispatch(fetchDataDetailPesanan(record.IdPesanan));
    dispatch(toggleListPesananLihatModalHidden());
  };
  const handlingActionHapus = () => {
    dispatch(fetchDataDetailPesanan(record.IdPesanan));
    dispatch(toggleListPesananDeleteModalHidden());
  };
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
