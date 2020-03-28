import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import axios from "axios";
// import ConvertResultTest from "./ConvertResult.1";
import { bigArray } from "../BigArray";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./InputBar.css";
// import ConvertResult from "./ConvertResult";

class InputBarTest extends Component {
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

  convert = event => {
    event.preventDefault();
    let { inputTerm, code, phrase } = this.state;
    // let { converted } = this.props;
    for (var i = 0; i < Object.values(inputTerm).length; i++) {
      for (var j = 0; j < Object.keys(bigArray).length; j++) {
        if (Object.values(inputTerm)[i] === Object.keys(bigArray)[j]) {
          // varianta 2
          // code.push(Object.values(bigArray)[j]);
          code += Object.values(bigArray)[j];
          console.log(code);
          // phrase.push(inputTerm);
        }
      }
    }
    phrase = inputTerm;
    this.setState({
      // phrase=Object.values(inputTerm),
      phrase: phrase,
      inputTerm: ""
    });

    this.props.myObj["sentence"] = phrase;
    this.props.myObj["cypher"] = code;

    // axios.post("http://localhost:5000/converted", this.props.myObj).then(() => {
    //   this.setState({ converted: [myObj, ...this.props.converted] });
    //   // this.forceUpdate();
    //   console.log("bla");
    // });

    console.log(phrase);
    console.log(this.props.myObj);
  };

  // addConverted = myObj => {
  //   axios.post("http://localhost:5000/converted", myObj).then(() => {
  //     this.setState({ converted: [myObj] });
  //     console.log(myObj);
  //   });
  // };

  // adding = () => {
  //   axios.post("http://localhost:5000/converted", this.props.myObj).then(() => {
  //     this.setState({ converted: [this.myObj, ...this.props.converted] });
  //     console.log("bla");
  //   });
  // };

  render() {
    const { inputTerm } = this.state;
    const { converted = [], adding, myObj } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <div>
              <div>
                <SearchIcon onClick={(this.convert, () => adding(myObj))} />
                <InputBase
                  placeholder="Your test phrase"
                  value={inputTerm}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        {converted.map(i => (
          <ConvertResultTest
            key={i.id}
            sentence={i.sentence}
            cypher={i.cypher}
            id={i.id}
          />
        ))}
        {/* {<ConvertResult converted={converted} />} */}
      </div>
    );
  }
}

export default InputBarTest;
