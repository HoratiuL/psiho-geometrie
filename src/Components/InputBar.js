import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import ConvertResult from "./ConvertResult";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./InputBar.css";
// import Chart from "./Chart";
// import Canvas from "./CanvasJS";

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
    event.preventDefault();
    const { value } = event.target;
    const val2 = value.toLowerCase();
    this.setState({
      inputTerm: val2
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
      </div>
    );
  }
}

export default InputBar;
