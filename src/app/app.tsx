import * as React from "react";

interface IAppProps {
  children?: any;
}

export const App = (props: IAppProps) => (
  <div>
    <h1>App Container!</h1>
    <div>
    { props.children }
    </div>
  </div>
);
