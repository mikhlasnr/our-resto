import React from "react";
import "./dashboard-kasir-pilih-menu.styles.scss";

import BurgerMantap from "../../assets/images/kategori-menu/burger/menu/mantap-burger.png";
// Import Component
import { Row, Col, Divider } from "antd";

const DashboardKasirPilihMenu = () => {
  return (
    <div id="pilih-menu">
      <Divider orientation="left">Pilih Menu</Divider>
      <Row gutter={[24, 24]} className="pilih-menu-items">
        {[1, 2, 3, 4, 5, 6].map(value => (
          <Col span={8}>
            <div className="pilih-menu-item">
              <div className="image-item">
                <div className="image-item-container">
                  <img src={BurgerMantap} alt="menu" />
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
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardKasirPilihMenu;
