import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import { Layout } from "antd";
import AdminMenuPage from "../admin-menu-page/admin-dashboard-menu-page.component";
import AdminPegawaiPage from "../admin-pegawai-page/admin-pegawai-page.component";

// handling redux
import { connect, useSelector } from "react-redux";

const AdminDashboardMain = ({ match }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  const isPemilik = currentUser.NamaRole.toLowerCase() === "pemilik";

  return (
    <Layout
      className="site-layout"
      style={{
        padding: "80px 100px 30px 440px",
        background: "#FFFFFF",
      }}
    >
      {isPemilik ? (
        <Route
          exact
          path={`${match.path}`}
          render={() => <h1>Ini Dashboard</h1>}
        />
      ) : null}

      <Route
        exact
        path={!isPemilik ? `${match.path}` : `${match.path}/menu`}
        component={AdminMenuPage}
      />

      <Route
        exact
        path={`${match.path}/pegawai`}
        component={AdminPegawaiPage}
      />
    </Layout>
  );
};

export default withRouter(connect()(AdminDashboardMain));
