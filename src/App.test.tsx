import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Stock from './Stock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
