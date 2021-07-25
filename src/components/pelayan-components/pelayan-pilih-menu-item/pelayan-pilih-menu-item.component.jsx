import React from "react";
import "./pelayan-pilih-menu-item.styles.scss";
// Handling Redux
import { useDispatch } from "react-redux";
import { addItemPesanan } from "../../../redux/pesanan/pesanan.action";

// Import Component
import { Row, Col } from "antd";

const PelayanPilihMenuItem = ({ menu }) => {
  const { NamaMenu, Stok, Harga, Foto } = menu;
  const dispatch = useDispatch();
  const handlingAddPesanan = e => {
    e.preventDefault();
    dispatch(addItemPesanan(menu));
  };
  return (
    <Row className="pilih-menu-item">
      <Col span={24} className="image-item">
        <div className="image-item-container">
          <img
            src={
              Foto ||
              "https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
            }
            alt="menu"
            fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
          />
        </div>
      </Col>
      <Col span={24} className="detail-item">
        <div className="container">
          <div className="info-wrapper">
            <p className="title">{NamaMenu}</p>
            <p className="quantity">{`*${Stok} tersisa`}</p>
          </div>
          <Row className="footer" align="center" justify="center">
            <Col flex={1} className="harga-container">
              <span>Rp</span>
              <span>{Harga}</span>
            </Col>
            <Col flex="auto">
              <div className="btn-add" onClick={handlingAddPesanan}>
                <span>add</span>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default PelayanPilihMenuItem;
