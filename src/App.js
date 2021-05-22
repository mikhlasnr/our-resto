import React, { Component } from "react";
import "./App.css";

// Router
import { Switch, Route, Redirect } from "react-router-dom";

// Import Component Pages
import DashBoadrKasirPage from "./pages/dashboard-kasir/DashBoadrKasirPage";
import SignInKasirPage from "./pages/sign-in-kasir/SignInKasirPage";
import SignInPemilikPage from "./pages/sign-in-pemilik/SignInPemilikPage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashBoadrKasirPage} />
          <Route exact path="/signin-kasir" component={SignInKasirPage} />
          <Route exact path="/signin-pemilik" component={SignInPemilikPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
