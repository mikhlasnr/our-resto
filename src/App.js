import React, { Component } from "react";
import "./App.scss";

// Router
import { Switch, Route } from "react-router-dom";

// Import Component Pages
import DashBoadrKasirPage from "./pages/dashboard-kasir/dashboard-kasir-page.component";
import SignInKasirPage from "./pages/sign-in-kasir/sign-in-kasir-page.component";
import SignInPemilikPage from "./pages/sign-in-pemilik/sign-in-pemilik-page.component";
import NoMatchPage from "./pages/no-match/no-match-page.component";
import DashboardKasirListPesananPage from "./pages/dashboard-kasir-list-pesanan/dashboard-kasir-list-pesanan-page.component";
import DashboardPemilikPage from "./pages/dashboard-pemilik/dashboard-pemilik-page.component";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashBoadrKasirPage} />
          <Route exact path="/kasir/signin" component={SignInKasirPage} />
          <Route
            exact
            path="/kasir/pesanan"
            component={DashboardKasirListPesananPage}
          />
          <Route exact path="/pemilik" component={SignInPemilikPage} />
          <Route
            exact
            path="/pemilik/dashboard"
            component={DashboardPemilikPage}
          />

          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
