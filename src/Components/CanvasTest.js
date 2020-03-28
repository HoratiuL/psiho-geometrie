import React, { Component } from "react";
// import CanvasJSReact from "../canvasjs.react";
var CanvasJSReact = require("../canvasjs.react").default;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const CanvasTest = props => {
//   const { chartData } = props;
//   const options = {
//     title: {
//       text: "Basic Column Chart in React"
//     },
//     data: [
//       {
//         type: "spline",
//         dataPoints: chartData
//       }
//     ]
//   };
//   return (
//     <div>
//       <CanvasJSReact options={options} onRef={ref => (this.chart = ref)} />
//     </div>
//   );
// };

// export default CanvasTest;

class CanvasTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.chartData);
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "CanvasJS Column Chart in React & Webpack"
      },
      data: [
        {
          type: "spline",
          dataPoints: this.props.chartData
        }
      ]
    });
    chart.render();
  }
  render() {
    return <div id="chartContainer" />;
  }
}

export default CanvasTest;
