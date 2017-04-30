import * as React from "react";

interface IAboutPageProps {
  children?: any;
}

export const AboutPage = (props: IAboutPageProps) => (
  <div>
    <h2>About Page</h2>
    <div>{ props.children }</div>
  </div>
);
