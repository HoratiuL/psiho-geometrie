import React from "react";
import Chart from "./Chart";

export default function ConvertResult(props) {
  const { sentence, cypher, chartData } = props;
  return (
    <div>
      <p>
        {sentence} - {cypher}
      </p>
      {/* <button value="Try">Try</button> */}
      <Chart chartData={chartData} />
    </div>
  );
}
