import React from "react";
import "./dashboard-admin-daftar-menu-card.styles.scss";

import { Row, Col, Button, Image } from "antd";
import MenuFoto from "../../assets/images/kategori-menu/burger/menu/Double-Whopper-min.png";
import { EmptyImage } from "../../ENDPOINT";
const DashboardAdminDaftarMenuCard = () => {
  return (
    <Row className="dashboard-admin-daftar-menu-card">
      <Col className="menu-card-image">
        <Image
          style={{ backgroundColor: "#FFB649", borderRadius: "15px" }}
          width={121}
          src={""}
          fallback={EmptyImage}
        />
      </Col>
      <Col flex="auto" className="menu-card-info">
        <h2>Hot Dogs with Onions and Peppers</h2>
        <p>Hotdog</p>
        <span>Rp 17.000</span>
      </Col>
      <Col className="menu-card-action">
        <Button>Edit</Button>
        <Button>Hapus</Button>
      </Col>
    </Row>
  );
};

export default DashboardAdminDaftarMenuCard;
