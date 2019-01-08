import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ConvertResult from "./ConvertResult";
import { bigArray } from "../BigArray";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./InputBar.css";
import Chart from "./Chart";

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTerm: "",
      phrase: [],
      code: []
    };
  }

  onInputChange = event => {
    const { value } = event.target;
    event.preventDefault();
    this.setState({
      inputTerm: value
    });
  };

  render() {
    const { inputTerm } = this.state;
    const { converted = [], convert } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <div>
              <div>
                <SearchIcon onClick={() => convert(inputTerm)} />
                <InputBase
                  placeholder="Your phrase"
                  value={inputTerm}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        {converted.map(i => (
          <ConvertResult
            key={i.cypher}
            sentence={i.sentence}
            cypher={i.cypher}
            chartdata={i.data}
          />
          // <Chart key={i.cypher} chartData={i.data} />
        ))}
        {converted.map(e => (
          <Chart key={e.id} chartData={e.data} />
        ))}
      </div>
    );
  }
}

export default InputBar;
