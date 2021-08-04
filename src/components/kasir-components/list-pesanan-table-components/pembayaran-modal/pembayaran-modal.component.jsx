import React, { useState, useEffect } from "react";
import "./pembayaran-modal.styles.scss";
import axios from "axios";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";
import { selectModalBayarHidden } from "../../../../redux/listPesanan/listPesanan.selectors";
import {
  toggleModalBayarHidden,
  removeDataPesanan,
} from "../../../../redux/listPesanan/listPesanan.action";
import { removeDetailPesanan } from "../../../../redux/detailPesanan/detailPesanan.action";
import { selectInfoPesanan } from "../../../../redux/detailPesanan/detailPesanan.selectors";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";
// Import Component
import { Modal, Skeleton, Button, Space, InputNumber, message } from "antd";

const PembayaranModal = () => {
  const dispatch = useDispatch();
  const [nominal, setNominal] = useState(null);
  const isModalHIdden = useSelector(selectModalBayarHidden);
  const dataPemesan = useSelector(selectInfoPesanan);
  const { IdUser } = useSelector(selectCurrentUser);

  useEffect(() => {
    if (isModalHIdden === true && nominal) setNominal(null);
  }, [isModalHIdden]);

  const handlingModalOnCancel = () => {
    dispatch(removeDetailPesanan());
    dispatch(removeDataPesanan());
    dispatch(toggleModalBayarHidden());
  };

  const numberFormatRupiah = numb => {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handlingNominalChange = value => {
    setNominal(value);
  };

  const handlingAddPembayaran = () => {
    const { IdPesanan, TotalHarga } = dataPemesan;
    const Kembalian = nominal - TotalHarga;
    axios
      .post("/pembayaran/add", {
        IdPesanan,
        IdUser,
        Nominal: nominal,
        Kembalian,
      })
      .then(response => {
        dispatch(removeDetailPesanan());
        dispatch(removeDataPesanan());
        dispatch(toggleModalBayarHidden());
        message.success("Pembayaran Berhasil!");
      })
      .catch(error => {
        console.log(error);
        message.error("Pembayaran Gagal!");
      });
  };
  const onBayarClick = () => {
    if (nominal) {
      if (nominal < dataPemesan.TotalHarga)
        message.error("Nominal kurang dari total harga");
      else handlingAddPembayaran();
    } else message.error("Nominal Tidak Boleh Kosong!");
  };
  return (
    <Modal
      className="pembayaran-modal"
      visible={!isModalHIdden}
      onCancel={handlingModalOnCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className="pembayaran-container">
        <div className="pembayaran-header">
          <h1>Pembayaran</h1>
        </div>
        <div className="pembayaran-body">
          <div className="pembayaran-item">
            <p className="title">Total Pembayaran :</p>
            <div className="total-harga-number">
              {dataPemesan ? (
                <p>Rp {numberFormatRupiah(dataPemesan.TotalHarga)}</p>
              ) : (
                <Skeleton.Button active={true} />
              )}
            </div>
          </div>
          <div className="pembayaran-item">
            <p className="title">Metode Pembayaran :</p>
            <div className="pilih-metode-container">
              <Space>
                <Button className="btn-action-primary active">Tunai</Button>
                <Button className="btn-action-secondary" disabled>
                  Gopay
                </Button>
              </Space>
            </div>
          </div>
          <div className="pembayaran-item">
            <p className="title">Masukkan Nominal :</p>
            <div className="input-nominal-container">
              <InputNumber
                formatter={value => {
                  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }}
                onChange={handlingNominalChange}
                value={nominal}
                min={0}
                className="input-number text-center"
                placeholder="Ex: 70,000"
              />
            </div>
          </div>
        </div>
        <div className="pembayaran-footer">
          <Button
            block
            className="btn-action-secondary"
            disabled={dataPemesan ? false : true}
            onClick={onBayarClick}
          >
            Bayar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PembayaranModal;
