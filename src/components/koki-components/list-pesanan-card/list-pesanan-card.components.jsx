import React, { useEffect, useState } from "react";
import "./list-pesanan-card.styles.scss";
import axios from "axios";
// Handling Redux
import { useDispatch } from "react-redux";
import {
  toggleModalUpdateStatusMasakHidden,
  setDataPesanan,
} from "../../../redux/listPesanan/listPesanan.action";

// Import Components
import { Col, Divider, Skeleton } from "antd";

const ListPesananCard = ({ pesanan }) => {
  const dispatch = useDispatch();

  const [detailPesanan, setdetailPesanan] = useState(null);
  const { IdPesanan, AtasNama, NoMeja } = pesanan;

  useEffect(() => {
    axios(`detail-pesanan/${IdPesanan}`)
      .then(res => {
        setdetailPesanan(res.data);
      })
      .catch(error => {
        console.error(error);
      });
    return () => {
      setdetailPesanan(null);
    };
  }, []);

  const handlingRenderDetailPesanan = () => {
    if (!detailPesanan)
      return (
        <div className="menu-item">
          <Skeleton.Button active={true} />
          <Skeleton.Button active={true} />
        </div>
      );
    return detailPesanan.map((item, index) => {
      return (
        <div className="menu-item" key={index}>
          <p>{item.NamaMenu}</p>
          <p>{item.Quantity}</p>
        </div>
      );
    });
  };

  const handlingCLickCard = e => {
    dispatch(setDataPesanan(pesanan));
    dispatch(toggleModalUpdateStatusMasakHidden());
  };

  return (
    <Col span={6} className="koki-list-pesanan-card">
      <div className="card-container" onClick={handlingCLickCard}>
        <header className="card-header px-23">
          <p>{AtasNama}</p>
          <p>{NoMeja}</p>
        </header>
        <Divider
          orientation="left"
          className="divider-text-white text-14 px-23"
        >
          Pilih Menu
        </Divider>
        <section className="menu-items px-23">
          {handlingRenderDetailPesanan()}
        </section>
      </div>
    </Col>
  );
};

export default ListPesananCard;
