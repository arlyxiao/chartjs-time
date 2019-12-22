import * as React from 'react';
import * as ReactDOM from "react-dom";
import {Doughnut} from 'react-chartjs-2';


export default class App extends React.Component {
  render() {
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
}


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
