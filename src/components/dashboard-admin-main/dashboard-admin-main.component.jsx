import React from "react";
import { Route } from "react-router-dom";

import { Layout } from "antd";
import DashboardAdminMenuPage from "../dashboard-admin-menu-page/dashboard-admin-menu-page.component";

// handling redux
import { connect, useSelector } from "react-redux";

const DashboardAdminMain = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  const isPemilik = currentUser.role === "pemilik";
  return (
    <Layout
      className="site-layout"
      style={{
        padding: "80px 100px 30px 440px",
        background: "#FFFFFF",
      }}
    >
      {isPemilik && (
        <Route exact path="/">
          <h1>Ini Dashboard</h1>
        </Route>
      )}

      <Route exact path={isPemilik ? "/menu" : "/"}>
        <DashboardAdminMenuPage />
      </Route>
      <Route exact path="/pegawai">
        <h1>ini pegawai</h1>
      </Route>
    </Layout>
  );
};

export default connect()(DashboardAdminMain);
