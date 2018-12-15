import * as React from 'react';
<<<<<<< HEAD

=======
>>>>>>> konrad
// import { mongoose } from '../server';

class Stock extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }

  public componentDidMount() {
    fetch('https://api.iextrading.com/1.0/stock/aapl/chart/1d')
    .then(result => result.json())
    .then(result => {
      this.setState({ data: result });
    })
  }

  public render() {
    const stockData = Object.keys(this.state).map(i => this.state[i])[0];
<<<<<<< HEAD
=======
  //  [{
  //     name: 'open',
  //     values: stockData.map((item: any, i: any) => ( { x: i, y: item.open }))
  //   }]
>>>>>>> konrad

    return (
      <div>
        {stockData.map((item: any, i: any) => (
          <li key={i}>
            Open: {item.open} | Close: {item.close}
          </li>
        ))}
<<<<<<< HEAD
      </div>
=======
       </div> 
        
>>>>>>> konrad
    );
  }
}

export default Stock;
