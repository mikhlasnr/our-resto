import React, { useState } from "react";
import "./App.scss";

// handling redux
import { connect, useSelector } from "react-redux";

// Router
import { Switch, Route } from "react-router-dom";

// Import Component Pages
import DashBoardPelayanPage from "./pages/dashboard-pelayan/dashboard-pelayan-page.component";
import SignInPage from "./pages/sign-in/sign-in-page.component";
import NoMatchPage from "./pages/no-match/no-match-page.component";
import DashboardPemilikPage from "./pages/dashboard-pemilik/dashboard-pemilik-page.component";
import DashboardAdminPage from "./pages/dashboard-admin/dashboard-admin-page.component";
import DashboardKasir from "./pages/dashboard-kasir/dashboard-kasir-page.component";
const App = () => {
  const currentUser = useSelector(state => state.users.currentUser);

  const handlingCurrentUserRole = () => {
    if (currentUser.role === "admin" || currentUser.role === "pemilik")
      return <DashboardAdminPage />;
    if (currentUser.role === "pelayan") return <DashBoardPelayanPage />;
    if (currentUser.role === "kasir") return <DashboardKasir />;
    if (currentUser.role === "koki") return <DashboardKasir />;
    return <NoMatchPage />;
  };

  return (
    <div>
      <Switch>
        <Route path="/" component={handlingCurrentUserRole} />
        <Route exact path="/signin" component={SignInPage} />
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </div>
  );
};

export default connect()(App);
