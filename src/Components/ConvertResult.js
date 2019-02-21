import React from "react";
import Chart from "./Chart";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./ConvertResult.css";
// import Canvas from "./CanvasJS";
// import CanvasTest from "./CanvasTest";

export default function ConvertResult(props) {
  const { id, sentence, cypher, chartData, deleteCard } = props;
  return (
    <Card className="result-item">
      <CardContent>
        <Typography>Phrase: {sentence}</Typography>
        <Typography>Code: {cypher}</Typography>
      </CardContent>

      <CardMedia>
        <Chart chartData={chartData} />
      </CardMedia>
      <Button onClick={() => deleteCard(id)}>Delete</Button>
      {/* <Chart chartData={chartData} /> */}
      {/* <Canvas chartData={chartData} /> */}
      {/* <CanvasTest chartData={chartData} /> */}
    </Card>
  );
}
