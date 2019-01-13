import React, { Component } from "react";
import axios from "axios";
import { bigArray } from "./BigArray";
import Header from "./Components/Header";
import InputBar from "./Components/InputBar";
// import Canvas from "./Components/CanvasJS";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      converted: [],
      myObj: {},
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
    myObj.data = [];

    function coordinates(x, y) {
      this.x = x;
      this.y = y;
    }

    for (i = 0; i < code.length; i++) {
      //Good data type for chartjs
      myObj["data"].push(parseInt(code[i]));
      //Good data type for canvasjs
      // myObj["data"].push({ x: parseInt(code[i]), y: parseInt(code[i]) });
      //Good data type for react-chartjs-2
      // myObj["data"].push({ x: code[i], y: code[i] });
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

  // adding = () => {
  //   this.setState({ inputTerm: "" });
  // };

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
        {/* {this.state.converted.map(dt => (
          <Canvas points={dt.data} />
        ))} */}
      </div>
    );
  }
}

export default App;
