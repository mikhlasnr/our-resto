import React from "react";
import "./menu-list-card.styles.scss";

import { Row, Col, Button, Image, Space } from "antd";

const MenuListCard = ({ menu }) => {
  console.log(menu);
  const { NamaMenu, Harga, NamaKategori, Foto } = menu;
  return (
    <Row className="admin-menu-list-card">
      <Col className="card-image">
        <Image
          style={{ backgroundColor: "#FFB649", borderRadius: "15px" }}
          width={121}
          src={Foto || ""}
          fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
        />
      </Col>
      <Col flex="auto" className="card-info">
        <div className="menu-card-info-title">
          <h2>{NamaMenu}</h2>
          <p>{NamaKategori || null}</p>
        </div>
        <span>{`Rp. ${Harga}`}</span>
      </Col>
      <Col className="card-action">
        <Space>
          <Button className="btn-action-primary">Edit</Button>
          <Button className="btn-action-secondary">Hapus</Button>
        </Space>
      </Col>
    </Row>
  );
};

export default MenuListCard;
