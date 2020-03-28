import React, { Component } from "react";
import {
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  XYPlot,
  Borders,
  ChartLabel,
  AreaSeries,
  LineSeriesCanvas,
  GradientDefs,
  LineSeries,
  LineMarkSeries
} from "react-vis";
import html2canvas from "html2canvas";

export default class ChartVis extends Component {
  saveImage = () => {
    var input = document.getElementById("canvas");
    html2canvas(input).then(canvas => {
      let imgData = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      this.downloadURL(imgData);
    });
  };

  downloadURL = imgData => {
    var a = document.createElement("a");
    a.href = imgData.replace("image/png", "image/octet-stream");
    a.download = "graph.png";
    a.click();
  };

  render() {
    const { converted, chartVis } = this.props;

    return (
      <div>
        {/* {converted.map(item => (
        <XYPlot width={300} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            data={item.dataVis}
            style={{ stroke: "violet", strokeWidth: 3, strokeDasharray: "2 2" }}
            curve={"curveMonotoneX"}
          />
        </XYPlot>
      ))} */}
        <XYPlot width={350} height={350} id="canvas">
          <GradientDefs>
            <linearGradient id="CoolGradient">
              {/* Trebuie sa creez array-ul de culori, si acestea sa le parcurg 
        pentru a afla numarul lor si sa le atribui lui stopColor */}
              <stop offset="0%" stopColor="red" stopOpacity={0.4} />
              <stop offset="25%" stopColor="blue" stopOpacity={0.3} />
              <stop offset="50%" stopColor="green" stopOpacity={0.3} />
              <stop offset="100%" stopColor="yellow" stopOpacity={0.3} />
            </linearGradient>
          </GradientDefs>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            data={chartVis}
            // color={"url(#CoolGradient)"}
            style={{
              // stroke: "yellow",
              stroke: "url(#CoolGradient)",
              strokeWidth: 3
              // strokeDasharray: "2 2",
            }}
            curve={"curveMonotoneX"}
          />
          <div>
            <button onClick={() => this.saveImage()}>Save</button>
          </div>
        </XYPlot>
      </div>
    );
  }
}
