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

// Import Components
import { Button } from "antd";

const ListPesananTableAction = ({ record }) => {
  const dispatch = useDispatch();
  const handlingActionLihat = () => {
    dispatch(setInfoPemesan(record));
    dispatch(fetchDataDetailPesanan(record.IdPesanan));
    dispatch(toggleModalStrukHidden());
  };
  const handlingActionBayar = () => {
    dispatch(setInfoPemesan(record));
    dispatch(fetchDataDetailPesanan(record.IdPesanan));
    dispatch(toggleModalDetailPesananHidden());
  };

  const handlingRenderBtnAction = () => {
    if (record.StatusBayar === "belum")
      return (
        <Button className="btn-action-secondary" onClick={handlingActionBayar}>
          Bayar
        </Button>
      );
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
