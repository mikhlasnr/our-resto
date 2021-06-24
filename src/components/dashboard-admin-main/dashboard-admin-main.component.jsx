import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import { Layout } from "antd";
import DashboardAdminMenuPage from "../dashboard-admin-menu-page/dashboard-admin-menu-page.component";
import DashboardAdminPegawaiPage from "../dashboard-admin-pegawai-page/dashboard-admin-pegawai-page.component";
import NoMatchPage from "../../pages/no-match/no-match-page.component";

// handling redux
import { connect, useSelector } from "react-redux";

const DashboardAdminMain = ({ match, location }) => {
  console.log(match);
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
        <Route path={`${match.path}`} render={() => <h1>Ini Dashboard</h1>} />
      ) : null}

      <Route
        exact
        path={!isPemilik ? `${match.path}` : `${match.path}/menu`}
        component={DashboardAdminMenuPage}
      />

      <Route
        exact
        path={`${match.path}/pegawai`}
        component={DashboardAdminPegawaiPage}
      />
    </Layout>
  );
};

export default withRouter(connect()(DashboardAdminMain));
