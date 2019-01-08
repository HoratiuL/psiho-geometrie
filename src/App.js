import React, { Component } from "react";
import axios from "axios";
import { bigArray } from "./BigArray";
import Header from "./Components/Header";
import InputBar from "./Components/InputBar";
// import Chart from "./Components/Chart";

// import InputBarTest from "./Components/InputBar.1";
// import ConvertResult from "./Components/ConvertResult";
// import ConvertResultTest from "./Components/ConvertResult.1";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      converted: [],
      myObj: {},
      chartData: {},
      myData: {},
      phrase: [],
      code: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/converted").then(resp => {
      this.setState({ converted: resp.data });
      console.log(resp);
    });
  }

  convert = inputTerm => {
    let { phrase, code } = this.state;
    for (var i = 0; i < Object.values(inputTerm).length; i++) {
      // console.log(inputTerm);
      for (var j = 0; j < Object.keys(bigArray).length; j++) {
        if (Object.values(inputTerm)[i] === Object.keys(bigArray)[j]) {
          code += Object.values(bigArray)[j];
          // console.log(code);
        }
      }
    }
    phrase = inputTerm;
    this.setState({
      phrase: phrase,
      inputTerm: ""
    });

    let myObj = {};
    myObj["sentence"] = phrase;
    myObj["cypher"] = code;
    // let data = Object.create(Object.prototype, [{ x: null, y: null }]);
    myObj["data"] = [];
    // myObj["data"] = Object.create(Object.prototype, [{ x: null, y: null }]);
    for (i = 0; i < code.length; i++) {
      myObj["data"].push({ x: code[i], y: code[i] });
    }

    axios.post("http://localhost:5000/converted", myObj).then(() =>
      this.setState({
        converted: [...this.state.converted, myObj]
      })
    );
    // console.log(phrase);
    console.log(myObj);
  };

  // addConverted = obj => {
  //   const newObj = {
  //     ...obj,
  //     sentence: obj.phrase,
  //     cypher: obj.code
  //   };
  //   axios.post("http://localhost:5000/converted", newObj).then(() => {
  //     this.setState({ converted: [newObj, ...this.state.converted] });
  //     console.log(newObj);
  //   });
  // };

  adding = () => {
    this.setState({ inputTerm: "" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <InputBar
          converted={this.state.converted}
          addConverted={this.addConverted}
          convert={this.convert}
        />
        {/* <InputBarTest
          myObj={this.state.myObj}
          converted={this.state.converted}
          adding={this.adding}
        /> */}
        {/* <ConvertResult converted={this.state.converted} /> */}
        {/* <ConvertResultTest converted={this.state.converted} /> */}
        {/* <Chart chartData={this.chartData} /> */}
      </div>
    );
  }
}

export default App;
