import React from "react";
// import Chart from "./Chart";

export default function ConvertResult(props) {
  const { converted = [], sentence, cypher, chartData } = props;
  return (
    <div>
      {/* {converted.map(i => (
        <p key={i.id}>
          {i.sentence} - {i.cypher}
        </p>
      ))} */}
      <p>
        {sentence} - {cypher}
      </p>
      {/* <button value="Try">Try</button> */}
      {/* <Chart /> */}
    </div>
  );
}
