import * as React from "react";

import "./hello.css";

interface IHelloProps {
  greeting: string;
}

export const Hello = (props: IHelloProps) => (
  <p className="hello">{props.greeting} Component</p>
);
