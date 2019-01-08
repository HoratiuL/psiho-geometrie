import React, { Component } from "react";
import { Bar, Line, Scatter } from "react-chartjs-2";

class Chart extends Component {
  render() {
    const { chartData } = this.props;
    const data = {
      labels: ["Scatter"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          maintainAspectRatio: true,
          showLine: true,
          backgroundColor: "rgba(75,192,192,0.4)",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: chartData
        }
      ]
    };
    return (
      <div>
        <Scatter data={data} />
      </div>
    );
  }
}

export default Chart;
