import React from "react";
import { Route } from "react-router-dom";

import { Layout } from "antd";
import DashboardAdminMenuPage from "../dashboard-admin-menu-page/dashboard-admin-menu-page.component";
import DashboardAdminPegawaiPage from "../dashboard-admin-pegawai-page/dashboard-admin-pegawai-page.component";

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
      {isPemilik ? (
        <Route exact path="/" render={() => <h1>Ini Dashboard</h1>} />
      ) : null}

      <Route
        exact
        path={!isPemilik ? "/" : `/menu`}
        component={DashboardAdminMenuPage}
      />

      <Route exact path={`/pegawai`} component={DashboardAdminPegawaiPage} />
    </Layout>
  );
};

export default connect()(DashboardAdminMain);
