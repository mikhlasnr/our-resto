import React, { useState } from "react";
import "./App.scss";

// Router
import { Switch, Route } from "react-router-dom";

// Import Component Pages
import DashBoardPelayanPage from "./pages/dashboard-pelayan/dashboard-pelayan-page.component";
import SignInKasirPage from "./pages/sign-in-pegawai/sign-in-pegawai-page.component";
import NoMatchPage from "./pages/no-match/no-match-page.component";
import DashboardPemilikPage from "./pages/dashboard-pemilik/dashboard-pemilik-page.component";
import DashboardAdminPage from "./pages/dashboard-admin/dashboard-admin-page.component";
import DashboardKasir from "./pages/dashboard-kasir/dashboard-kasir-page.component";
const App = () => {
  const initialUser = { nama: "admin", email: "admin", role: "admin" };
  const [currentUser, setCurrentUser] = useState(initialUser);

  const handlingCurrentUserRole = () => {
    if (currentUser.role === "admin") return <DashboardAdminPage />;
    if (currentUser.role === "pemilik") return <DashboardPemilikPage />;
    if (currentUser.role === "pelayan") return <DashBoardPelayanPage />;
    if (currentUser.role === "kasir") return <DashboardKasir />;
    if (currentUser.role === "koki") return <DashboardKasir />;
  };

  return (
    <div>
      <Switch>
        <Route
          path="/"
          render={() => {
            return handlingCurrentUserRole();
          }}
        />
        <Route exact path="/signin" component={SignInKasirPage} />
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
