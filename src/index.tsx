
import Chart from './Graph';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import * as React from 'react';
import * as ReactDOM from 'react-dom';



ReactDOM.render(
  < Chart />,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(
  < Chart />,
  document.getElementById('second') as HTMLElement
);
registerServiceWorker();
