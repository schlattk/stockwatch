<<<<<<< HEAD
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Stock from './Stock';

=======

import Chart from './Graph';
>>>>>>> konrad
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import * as React from 'react';
import * as ReactDOM from 'react-dom';




ReactDOM.render(
<<<<<<< HEAD
  <Stock />,
  document.getElementById('root') as HTMLElement
=======
  < Chart uri = {'https://api.iextrading.com/1.0/stock/aapl/chart/1m'}/>,
  document.getElementById('first-chart') as HTMLElement
>>>>>>> konrad
);

ReactDOM.render(
  < Chart uri = {'https://api.iextrading.com/1.0/stock/aapl/chart/1d'}/>,
  document.getElementById('second-chart') as HTMLElement
);
ReactDOM.render(
  < Chart uri = {'https://api.iextrading.com/1.0/stock/aapl/chart/3m'}/>,
  document.getElementById('third-chart') as HTMLElement
);




registerServiceWorker();
