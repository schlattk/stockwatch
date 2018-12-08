import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Stock from './Stock';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Stock />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
