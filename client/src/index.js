import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./login.page";
import { AppLayout } from "./home.page";
import { ProtectedRoute } from "./protected.route";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';

function AppRouter() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}


ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById("root")
);
