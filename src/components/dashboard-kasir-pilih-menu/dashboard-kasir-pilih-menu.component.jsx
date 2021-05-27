import React from "react";
import "./dashboard-kasir-pilih-menu.styles.scss";

// Import Component
import { Row, Col, Divider } from "antd";
import DashboardKasirPilihMenuItem from "../dashboard-kasir-pilih-menu-item/dashboard-kasir-pilih-menu-item.component";

const DashboardKasirPilihMenu = () => {
  return (
    <div id="pilih-menu">
      <Divider orientation="left">Pilih Menu</Divider>
      <Row gutter={[24, 24]} className="pilih-menu-items">
        {[1, 2, 3, 4, 5, 6, 7].map(value => (
          <Col span={8}>
            <DashboardKasirPilihMenuItem />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardKasirPilihMenu;
