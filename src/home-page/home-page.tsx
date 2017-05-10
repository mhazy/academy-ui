import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";

import { authenticationActions } from "../authentication";
import { storeConnector } from "./home-page.selectors";

interface IHomePageProps extends RouteComponentProps<any> {
  isAuthenticated: boolean;
}

interface IHomePageDispatch {
  onAuthenticated: Dispatch<any>;
  onNotAuthenticated: Dispatch<any>;
}

const actionDispathers = {
  onAuthenticated: authenticationActions.isAuthenticated,
  onNotAuthenticated: authenticationActions.isNotAuthenticated,
};

export const HomePage = (props: IHomePageProps & IHomePageDispatch) => (
  <div>
    <h2>Home Page</h2>
    {
      props.isAuthenticated ?
      <button onClick={ props.onNotAuthenticated }>De-authenticate</button> :
      <button onClick={ props.onAuthenticated }>Authenticate</button>
    }
    <p>{props.isAuthenticated ? "Authenticated" : "No Authenticated"}</p>
  </div>
);

export const HomePageConnected =
  connect<{}, IHomePageDispatch, IHomePageProps>(storeConnector, actionDispathers)(HomePage);
