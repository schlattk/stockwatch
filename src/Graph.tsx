import { ChartOptions } from 'chart.js';
import * as React from 'react';
import { Line } from 'react-chartjs-2';
import apiCall from './apiCall';
// import apiCall from './apiCall';


export default class Chart extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
        data: [],
    };
  }
  public componentDidMount() {
      apiCall(this.props.uri)
      .then((result: any) => result.json())
      .then((result: any) => {
        this.setState({ data: result });
      })
  }
  public render() {
    const stockData = Object.keys(this.state).map(i => this.state[i])[0];
    const chartData = stockData.map((item: any) => (item.open));
    const labelData = stockData.map((item: any) => (item.label));
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
     <div style={{height:'300px', width:'500px'}}>
      <Line data={data} options={options}/> 
    </div>
    );
  }
}
