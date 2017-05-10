import * as React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Store } from "redux";
import { AppConnected } from "../app";
import { configureStore, IRootState } from "./root.store";

const rootStore = configureStore();

export const Root = () => (
  <Provider store={rootStore}>
    <AppConnected />
  </Provider>
);
