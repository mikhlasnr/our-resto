import React, { Component } from "react";
import "./dashboard-kasir-kategori-menu.styles.scss";

// import image
import { ReactComponent as KategoriBurger } from "../../assets/images/kategori-menu/burger/burger.svg";

// import component
import { Row, Col, Divider } from "antd";

class DashboardKasirKategoriMenu extends Component {
  render() {
    return (
      <div id="dashboard-kasir-kategori-menu">
        <Divider orientation="left">Kategori Menu</Divider>
        <Row gutter={24} className="kategori-menu-items">
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <KategoriBurger />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item kategori-menu-item-active">
              <div className="kategori-menu-container">
                <KategoriBurger />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <KategoriBurger />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <KategoriBurger />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className="kategori-menu-item">
              <div className="kategori-menu-container">
                <KategoriBurger />
                <span className="kategori-menu-title">Burger</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardKasirKategoriMenu;
