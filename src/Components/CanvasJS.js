import React, { Component } from "react";
import CanvasJSReact from "../canvasjs.react";
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
          type: "line",
          dataPoints: [
            { x: 2, y: 2 },
            { x: 4, y: 4 },
            { x: 3, y: 3 },
            { x: 6, y: 6 }
          ]
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}

export default Canvas;
