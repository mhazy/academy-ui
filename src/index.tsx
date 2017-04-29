import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app';
import { Hello } from './hello';

ReactDOM.render(
  <App>
      <Hello greeting={ 'Hey' } />
  </App>,
  document.getElementById('root')
)
