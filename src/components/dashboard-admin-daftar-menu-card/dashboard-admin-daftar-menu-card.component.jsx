import React from "react";
import "./dashboard-admin-daftar-menu-card.styles.scss";

import { Row, Col, Button, Image } from "antd";

const DashboardAdminDaftarMenuCard = () => {
  return (
    <Row className="dashboard-admin-daftar-menu-card">
      <Col className="menu-card-image">
        <Image
          style={{ backgroundColor: "#FFB649", borderRadius: "15px" }}
          width={121}
          src={""}
          fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
        />
      </Col>
      <Col flex="auto" className="menu-card-info">
        <div className="menu-card-info-title">
          <h2>Hot Dogs with Onions and Peppers</h2>
          <p>Hotdog</p>
        </div>
        <span>Rp 17.000</span>
      </Col>
      <Col className="menu-card-action">
        <Button className="btn-action-primary">Edit</Button>
        <Button className="btn-action-danger">Hapus</Button>
      </Col>
    </Row>
  );
};

export default DashboardAdminDaftarMenuCard;
