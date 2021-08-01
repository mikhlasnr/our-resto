import React, { useEffect, useState } from "react";
import "./list-pesanan-card.styles.scss";
import axios from "axios";

// Import Components
import { Col, Divider, Skeleton } from "antd";

const ListPesananCard = ({ pesanan }) => {
  const [detailPesanan, setdetailPesanan] = useState(null);
  const [isFetching, setisFetching] = useState(false);
  const { IdPesanan, AtasNama, NoMeja } = pesanan;

  useEffect(() => {
    setisFetching(true);
    axios(`detail-pesanan/${IdPesanan}`)
      .then(res => {
        setdetailPesanan(res.data);
        setisFetching(false);
      })
      .catch(error => {
        console.error(error);
        setisFetching(false);
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
    e.preventDefault();
    console.log(IdPesanan);
  };

  return (
    <Col span={6} className="koki-list-pesanan-card">
      <div className="card-container" onClick={handlingCLickCard}>
        <header className="card-header">
          <p>{AtasNama}</p>
          <p>{NoMeja}</p>
        </header>
        <Divider orientation="left" className="divider-text-white text-14">
          Pilih Menu
        </Divider>
        <section className="menu-items">
          {handlingRenderDetailPesanan()}
        </section>
      </div>
    </Col>
  );
};

export default ListPesananCard;
