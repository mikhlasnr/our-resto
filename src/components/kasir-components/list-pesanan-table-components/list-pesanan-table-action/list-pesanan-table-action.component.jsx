import React from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import {
  toggleListPesananDeleteModalHidden,
  toggleListPesananLihatModalHidden,
} from "../../../../redux/listPesanan/listPesanan.action";
import {
  fetchDataDetailPesanan,
  setInfoPemesan,
} from "../../../../redux/detailPesanan/detailPesanan.action";

// Import Components
import { Button, Space } from "antd";

const ListPesananTableAction = ({ record }) => {
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

  const handlingRenderBtnAction = () => {
    if (record.StatusBayar === "belum")
      return <Button className="btn-action-secondary">Bayar</Button>;
    if (record.StatusBayar === "lunas")
      return (
        <Button className="btn-action-primary" onClick={handlingActionLihat}>
          Lihat
        </Button>
      );
  };

  return handlingRenderBtnAction();
};

export default ListPesananTableAction;
