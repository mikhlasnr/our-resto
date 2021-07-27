import React, { useEffect } from "react";
import "./pelayan-pilih-menu-item.styles.scss";
// Handling Redux
import { useDispatch, useSelector } from "react-redux";
import { addItemPesanan } from "../../../redux/pesanan/pesanan.action";
import { selectPesananItems } from "../../../redux/pesanan/pesanan.selectors";

// Import Component
import { Row, Col, Button } from "antd";

const PelayanPilihMenuItem = ({ menu }) => {
  const { IdMenu, NamaMenu, Stok, Harga, Foto } = menu;
  const pesananItems = useSelector(selectPesananItems);
  const dispatch = useDispatch();

  // cek this product have stok or not
  const isInStok = () => {
    const existingItem = pesananItems.find(
      pesananItem => pesananItem.IdMenu === IdMenu
    );
    if (Stok === 0) return true;
    if (existingItem) return existingItem.Quantity + 1 > Stok;
    return false;
  };
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
              <Button
                type="primary"
                className="btn-add"
                onClick={handlingAddPesanan}
                disabled={isInStok()}
              >
                add
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default PelayanPilihMenuItem;
