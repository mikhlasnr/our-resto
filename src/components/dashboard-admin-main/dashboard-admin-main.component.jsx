import React from "react";
import { Route } from "react-router-dom";

import { Layout } from "antd";
const { Content } = Layout;
const DashboardAdminMain = () => {
  return (
    <Layout
      className="site-layout"
      style={{
        padding: "0 100px 30px 440px",
        background: "#FFFFFF",
      }}
    >
      <Content>
        <Route exact path="/">
          <h1>Ini Dashboard</h1>
        </Route>
        <Route exact path="/menu">
          <h1>ini menu</h1>
        </Route>
        <Route exact path="/pegawai">
          <h1>ini pegawai</h1>
        </Route>
      </Content>
    </Layout>
  );
};

export default DashboardAdminMain;
