import React from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import { toggleListPesananDeleteModalHidden } from "../../../../../redux/listPesanan/listPesanan.action";
import { fetchDataDetailPesanan } from "../../../../../redux/detailPesanan/detailPesanan.action";

// Import Components
import { Button, Space } from "antd";

const PegawaiTableAction = ({ record: { IdPesanan } }) => {
  const dispatch = useDispatch();
  const handlingActionLihat = () => {};
  const handlingActionHapus = () => {
    dispatch(fetchDataDetailPesanan(IdPesanan));
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
