import React, { Component } from "react";
import { Bar, Line, Scatter } from "react-chartjs-2";
import "./Chart.css";
// import Line from "chart.js";
// import CanvasJSReact from "./canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var LineChart = require("react-chartjs").Line;

class Chart extends Component {
  render() {
    const { chartData } = this.props;
    console.log(chartData);
    const data = {
      labels: chartData,
      datasets: [
        {
          label: "My First dataset",
          maintainAspectRatio: false,
          showLine: true,
          data: chartData
        }
      ]
    };
    const options = {
      tooltips: {
        enabled: true
      }
    };

    return (
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default Chart;
