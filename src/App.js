import React from "react";
import "./App.scss";

// handling redux
import { connect, useSelector } from "react-redux";

// Router
import { Switch, Route, Redirect } from "react-router-dom";

// Import Component Pages
import DashBoardPelayanPage from "./pages/dashboard-pelayan/dashboard-pelayan-page.component";
import SignInPage from "./pages/sign-in/sign-in-page.component";
import NoMatchPage from "./pages/no-match/no-match-page.component";
import AdminDashboardPage from "./pages/admin-dashboard-page/admin-dashboard-page.component";
import DashboardKasir from "./pages/dashboard-kasir/dashboard-kasir-page.component";
const App = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  const handlingCurrentUserRole = () => {
    const role = currentUser.NamaRole.toLowerCase();
    console.log(role);
    if (role === "admin" || role === "pemilik") return <AdminDashboardPage />;
    if (role === "pelayan") return <DashBoardPelayanPage />;
    if (role === "kasir") return <DashboardKasir />;
    if (role === "koki") return <DashboardKasir />;
    return <NoMatchPage />;
  };

  return (
    <div>
      <Switch>
        <Route
          path="/dashboard"
          render={() =>
            currentUser ? handlingCurrentUserRole() : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/"
          render={() =>
            currentUser ? <Redirect to="/dashboard" /> : <SignInPage />
          }
        />

        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </div>
  );
};

export default connect()(App);
