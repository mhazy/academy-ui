import * as React from "react";

interface IHelloProps {
  greeting: string;
}

export const Hello = (props: IHelloProps) => (
  <div>
    <p className="hello">{props.greeting} Component</p>
  </div>
);
