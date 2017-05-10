import * as React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Link, Route } from "react-router-dom";
import { ConnectedRouter, ConnectedRouterProps } from "react-router-redux";

import { Header } from "../header";

import { AboutPage } from "../about-page";
import { HomePageConnected } from "../home-page";
import { history } from "../root/root.store";
import { IAppState, storeConnector } from "./app.selectors";

export const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Header />
      <div className="pt4">
        <Route exact path="/" component={ HomePageConnected } />
        <Route path="/about" component={ AboutPage } />
      </div>
    </div>
  </ConnectedRouter>
);

export const AppConnected = connect<{}, {}, ConnectedRouterProps<IAppState>>(storeConnector)(App);
