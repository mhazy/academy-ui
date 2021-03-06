import * as React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Link, Route } from "react-router-dom";
import { ConnectedRouter, ConnectedRouterProps } from "react-router-redux";

import "./app.css";

import { Header } from "../header";

import { AboutPage } from "../about-page";
import { HomePageConnected } from "../home-page";
import { history } from "../root/root.store";
import { IAppState, storeConnector } from "./app.selectors";

export const App = (props: IAppState) => (
  <ConnectedRouter history={history}>
    <div className="app">
      <Header />
      <div>
        <Route exact path="/" component={ HomePageConnected } />
        <Route path="/about" component={ AboutPage } />
      </div>
      <p>{ props.someProp }</p>
    </div>
  </ConnectedRouter>
);

export const AppConnected = connect<{}, {}, ConnectedRouterProps<IAppState>>(storeConnector)(App);
