import React from "react";
import "./menu-list-card.styles.scss";

import { Row, Col, Button, Image } from "antd";

const MenuListCard = () => {
  return (
    <Row className="admin-menu-list-card">
      <Col className="card-image">
        <Image
          style={{ backgroundColor: "#FFB649", borderRadius: "15px" }}
          width={121}
          src={""}
          fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
        />
      </Col>
      <Col flex="auto" className="card-info">
        <div className="menu-card-info-title">
          <h2>Hot Dogs with Onions and Peppers</h2>
          <p>Hotdog</p>
        </div>
        <span>Rp 17.000</span>
      </Col>
      <Col className="card-action">
        <Button className="btn-action-primary">Edit</Button>
        <Button className="btn-action-danger">Hapus</Button>
      </Col>
    </Row>
  );
};

export default MenuListCard;
