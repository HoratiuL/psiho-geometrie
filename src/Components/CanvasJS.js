import React, { Component } from "react";
// import CanvasJSReact from "../canvasjs.react";
var CanvasJSReact = require("../canvasjs.react");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Canvas extends Component {
  render() {
    const { chartData, tstdata, points } = this.props;
    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [
        {
          type: "spline",
          dataPoints: chartData
        }
      ]
    };
    return (
      <div>
        <CanvasJSReact options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}
// module.exports = Canvas;
export default Canvas;
