import React from "react";
import ConvertResult from "./ConvertResult";
import "./ConvertResult.css";

function ConvertSection(props) {
  const { converted = [], deleteCard } = props;
  return (
    <div className="resultcard">
      {converted.map(i => (
        <ConvertResult
          key={i.cypher}
          id={i.id}
          sentence={i.sentence}
          cypher={i.cypher}
          chartData={i.dataChart}
          chartVis={i.dataVis}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
}

export default ConvertSection;
