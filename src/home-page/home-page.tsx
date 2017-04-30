import * as React from "react";

interface IHomePageProps {
  children?: any;
}

export const HomePage = (props: IHomePageProps) => (
  <div>
    <h2>Home Page</h2>
    <div>{ props.children }</div>
  </div>
);
