import * as React from 'react';

interface AppProps {
  children?: any
}

export const App = (props: AppProps) => (
  <div>
    <h1>App Container!</h1>
    <div>
    { props.children }
    </div>
  </div>
)