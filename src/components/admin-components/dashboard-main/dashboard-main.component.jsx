import React from "react";
// handling redux
import { useSelector } from "react-redux";

// handling router
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

// Import Component
import MenuPage from "../menu-page-components/menu-page/menu-page.component";
import PegawaiPage from "../pegawai-page-components/pegawai-page/admin-pegawai-page.component";

const DashboardMain = () => {
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
        component={MenuPage}
      />

      <Route exact path={`${match.path}/pegawai`} component={PegawaiPage} />
    </>
  );
};

export default DashboardMain;
