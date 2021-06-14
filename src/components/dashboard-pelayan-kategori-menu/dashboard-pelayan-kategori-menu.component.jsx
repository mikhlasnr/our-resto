import React, { Component } from "react";
import "./dashboard-pelayan-kategori-menu.styles.scss";

// import image
import { ReactComponent as KategoriBurger } from "../../assets/images/kategori-menu/burger/burger.svg";

// import component
import { Row, Col, Divider } from "antd";

class DashboardPelayanKategoriMenu extends Component {
  render() {
    return (
      <div id="dashboard-pelayan-kategori-menu">
        <Divider orientation="left">Kategori Menu</Divider>
        <Row gutter={24} className="kategori-menu-items">
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <img
                  src="https://ik.imagekit.io/upecbxjan8p/Burger/Soda_Cup_EuDoyaABDNz.png"
                  alt="kategori"
                />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item kategori-menu-item-active">
              <div className="kategori-menu-container">
                <img
                  src="https://ik.imagekit.io/upecbxjan8p/Burger/Soda_Cup_EuDoyaABDNz.png"
                  alt="kategori"
                />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <img
                  src="https://ik.imagekit.io/upecbxjan8p/Burger/Soda_Cup_EuDoyaABDNz.png"
                  alt="kategori"
                />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <img
                  src="https://ik.imagekit.io/upecbxjan8p/Burger/Soda_Cup_EuDoyaABDNz.png"
                  alt="kategori"
                />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <img
                  src="https://ik.imagekit.io/upecbxjan8p/Burger/Soda_Cup_EuDoyaABDNz.png"
                  alt="kategori"
                />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardPelayanKategoriMenu;
