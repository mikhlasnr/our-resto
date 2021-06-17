import React from "react";
import "./dashboard-pelayan-pilih-menu-item.styles.scss";

// Import Component
import { Row, Col } from "antd";

const DashboardPelayanPilihMenuItem = () => {
  return (
    <div className="pilih-menu-item">
      <div className="image-item">
        <div className="image-item-container">
          <img
            src={`https://ik.imagekit.io/upecbxjan8p/menu/00005_wU17mn9oP.png`}
            alt="menu"
          />
        </div>
      </div>
      <div className="detail-item">
        <div className="container">
          <p className="title">Burger</p>
          <p className="quantity">*3 burger tersisa</p>
          <Row className="footer">
            <Col flex={1}>
              <div className="harga-container">
                <span>Rp</span>
                <span>25.000</span>
              </div>
            </Col>
            <Col flex="auto">
              <div className="btn-add">
                <span>add</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DashboardPelayanPilihMenuItem;
