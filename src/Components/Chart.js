import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";
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
          showLine: true,
          fill: false,
          // backgroundColor: "rgba(214, 20, 115, 0.5)",
          data: chartData
        }
      ]
    };
    const options = {
      tooltips: {
        enabled: true
      },
      responsive: true,
      maintainAspectRatio: true,

      scales: {
        ticks: {
          beginAtZero: true,
          autoSkip: true,
          maxTicksLimit: 20,
          maxRotation: 30
        },
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        },
        // yAxes: [
        //   {
        //     display: true,
        //     ticks: {
        //       beginAtZero: true,
        //       steps: 10,
        //       stepValue: 1,
        //       max: 10,
        //       min: 0,
        //       display: true
        //     }
        //   }
        // ],
        xAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 10,
              max: 10,
              min: 0,
              offset: true,
              scaleBeginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 20,
              maxRotation: 30
            }
          }
        ]
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
