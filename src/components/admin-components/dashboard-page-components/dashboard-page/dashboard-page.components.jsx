import React from "react";
import "./dashboard-page.components.scss";
import { getCurrenDate } from "./dashboard-page.utils";
import { Row, Col } from "antd";
const DashboardPage = () => {
  return (
    <div id="admin-dashboard-page">
      <header>
        <div className="header-container">
          <h1>Dashboard</h1>
          <p>{getCurrenDate()}</p>
          <span className="border-dash"></span>
        </div>
      </header>
      <main>
        <div className="pendapatan-container">
          <div className="pendapatan-title"></div>
          <Row className="pendapatan"></Row>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
