import React from "react";
import "./App.scss";

// handling redux
import { useSelector } from "react-redux";
import { selectCurrentUserRole } from "./redux/user/user.selectors";
// Router
import { Switch, Route, Redirect } from "react-router-dom";

// Import Component Pages
import DashBoardPelayanPage from "./pages/dashboard-pelayan/dashboard-pelayan-page.component";
import SignInPage from "./pages/sign-in/sign-in-page.component";
import NoMatchPage from "./pages/no-match/no-match-page.component";
import AdminDashboardPage from "./pages/admin-dashboard-page/admin-dashboard-page.component";
import DashboardKasir from "./pages/dashboard-kasir/dashboard-kasir-page.component";
const App = () => {
  const currentUserRole = useSelector(selectCurrentUserRole);

  const handlingCurrentUserRole = () => {
    if (currentUserRole === "admin" || currentUserRole === "pemilik")
      return <AdminDashboardPage />;
    if (currentUserRole === "pelayan") return <DashBoardPelayanPage />;
    if (currentUserRole === "kasir") return <DashboardKasir />;
    if (currentUserRole === "koki") return <DashboardKasir />;
    return <NoMatchPage />;
  };

  return (
    <div>
      <Switch>
        <Route
          path="/dashboard"
          render={() =>
            currentUserRole ? handlingCurrentUserRole() : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/"
          render={() =>
            currentUserRole ? <Redirect to="/dashboard" /> : <SignInPage />
          }
        />

        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
