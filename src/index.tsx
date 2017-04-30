import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";
import { Hello } from "./hello";

import "./index.css";

ReactDOM.render(
  <App>
      <Hello greeting={ "Hey" } />
  </App>,
  document.getElementById("root"),
);
