import React from "react";
// handling redux
import { useSelector } from "react-redux";

// handling router
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

// Import Component
import AdminMenuPage from "../admin-menu-page/admin-dashboard-menu-page.component";
import AdminPegawaiPage from "../admin-pegawai-page/admin-pegawai-page.component";

const AdminDashboardMain = () => {
  let match = useRouteMatch();

  const currentUser = useSelector(state => state.user.currentUser);
  const isPemilik = currentUser.NamaRole.toLowerCase() === "pemilik";

  return (
    <>
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
    </>
  );
};

export default AdminDashboardMain;
