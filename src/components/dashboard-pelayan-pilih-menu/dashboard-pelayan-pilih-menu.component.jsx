import React from "react";
import "./dashboard-pelayan-pilih-menu.styles.scss";

// Import Component
import { Row, Col, Divider } from "antd";
import DashboardPelayanPilihMenuItem from "../dashboard-pelayan-pilih-menu-item/dashboard-pelayan-pilih-menu-item.component";

const DashboardPelayanPilihMenu = () => {
  return (
    <div id="pilih-menu">
      <Divider orientation="left">Pilih Menu</Divider>
      <Row gutter={[24, 24]} className="pilih-menu-items">
        {[1, 2, 3, 4, 5, 6, 7].map(value => (
          <Col key={value} span={8}>
            <DashboardPelayanPilihMenuItem />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardPelayanPilihMenu;