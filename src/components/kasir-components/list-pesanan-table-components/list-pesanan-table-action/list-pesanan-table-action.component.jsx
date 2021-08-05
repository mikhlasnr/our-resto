import React from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import {
  toggleModalDetailPesananHidden,
  toggleModalStrukHidden,
} from "../../../../redux/listPesanan/listPesanan.action";
import {
  fetchDataDetailPesanan,
  setInfoPemesan,
} from "../../../../redux/detailPesanan/detailPesanan.action";
import { fetchPembayaran } from "../../../../redux/pembayaran/pembayaran.action";
// Import Components
import { Button, Skeleton } from "antd";

const ListPesananTableAction = ({ record }) => {
  const { IdPesanan, StatusBayar } = record;
  const dispatch = useDispatch();
  const handlingActionLihat = () => {
    dispatch(fetchPembayaran(IdPesanan));
    dispatch(fetchDataDetailPesanan(IdPesanan));
    dispatch(toggleModalStrukHidden());
  };
  const handlingActionBayar = () => {
    dispatch(setInfoPemesan(record));
    dispatch(fetchDataDetailPesanan(IdPesanan));
    dispatch(toggleModalDetailPesananHidden());
  };

  const handlingRenderBtnAction = () => {
    if (StatusBayar === "belum")
      return (
        <Button className="btn-action-secondary" onClick={handlingActionBayar}>
          Bayar
        </Button>
      );
    if (StatusBayar === "lunas")
      return (
        <Button className="btn-action-primary" onClick={handlingActionLihat}>
          Lihat
        </Button>
      );
    return <Skeleton.Button />;
  };

  return handlingRenderBtnAction();
};

export default ListPesananTableAction;
