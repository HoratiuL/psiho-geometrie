import React, { Component } from "react";

const ConvertResultTest = props => {
  const { converted = [], sentence, cypher } = props;
  return (
    <div>
      {/* {converted.map(i => (
        <p key={i.id}>
          {i.sentence} - {i.cypher}
        </p>
      ))} */}
      <p>
        <span>{sentence}</span>
        <span>{cypher}</span>
      </p>
    </div>
  );
};

export default ConvertResultTest;
