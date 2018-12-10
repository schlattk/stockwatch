import { ChartOptions } from 'chart.js';
import * as React from 'react';
import { Line } from 'react-chartjs-2';


export default class Chart extends React.Component<{}, {data: any, uri: any}> {
  constructor(props: any) {
    super(props);
    this.state = {
        data: [],
        uri: 'https://api.iextrading.com/1.0/stock/aapl/chart/1m'
    };
  }
  public componentWillReceiveProps(props: any){
      this.setState({uri: props.uri})
  }
  
  public componentDidMount() {
    fetch(this.state.uri)
    // fetch(this.state.uri)
    .then(result => result.json())
    .then(result => {
      this.setState({ data: result });
    })
  }

  public render() {
    const stockData = Object.keys(this.state).map(i => this.state[i])[0];
    const chartData = stockData.map((item: any) => (item.open));
    const labelData = chartData.map((item: any, i: any) => (i));
    const data = {
        datasets: [{
        borderColor: [
            '#FF6384'
          ], 
        data: chartData,
        label: 'Stockdata',
        maintainAspectRatio: true,
        responsive: true,
        }],
        labels: labelData
    };

    const options: ChartOptions = {
      legend: {
        position: 'bottom',
      }
     
    };

    return (
     <div style={{height:'500px', width:'500px'}}>
      <Line data={data} options={options}/> 
    </div>
    );
  }
}
