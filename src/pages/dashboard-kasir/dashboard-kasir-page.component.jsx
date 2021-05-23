import React, { Component } from "react";

// import component
import { Row, Col } from "antd";
import DashboardKasirMain from "../../components/dashboard-kasir-main/dashboard-kasir-main.component";
class DashBoadrKasirPage extends Component {
  render() {
    return (
      <section id="dashboard-kasir-page">
        <Row>
          <Col span={16}>
            <DashboardKasirMain />
          </Col>
          <Col className="sidebar"></Col>
        </Row>
      </section>
    );
  }
}

export default DashBoadrKasirPage;
