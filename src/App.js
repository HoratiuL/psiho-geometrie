import React, { Component } from "react";
import axios from "axios";
import { bigArray } from "./BigArray";
import Header from "./Components/Header";
import InputBar from "./Components/InputBar";
import ConvertSection from "./Components/ConvertSection";
// import Canvas from "./Components/CanvasJS";
// import ChartVis from "./Components/ChartVis";
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
      console.log(resp);
      this.setState({ converted: resp.data });
    });
  }

  removeDuplicateCharacters = string => {
    return string
      .split("")
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join("");
  };

  convert = inputTerm => {
    let { phrase, code } = this.state;
    let vorb = this.removeDuplicateCharacters(inputTerm);

    console.log("this is:", vorb);

    for (var i = 0; i < Object.values(vorb).length; i++) {
      // console.log(inputTerm);
      for (var j = 0; j < Object.keys(bigArray).length; j++) {
        if (Object.values(vorb)[i] === Object.keys(bigArray)[j]) {
          code += Object.values(bigArray)[j];
          // console.log(code);
        }
      }
    }
    phrase = vorb;
    this.setState({
      phrase: phrase,
      inputTerm: ""
    });

    let myObj = {};
    myObj["sentence"] = phrase;
    myObj["cypher"] = code;
    myObj.dataChart = [];
    myObj.dataVis = [];

    for (i = 0; i < code.length; i++) {
      //Good data type for chartjs
      myObj["dataChart"].push(parseInt(code[i]));
      // Good data type for canvasjs
      // myObj["data"].push({ x: parseInt(code[i]), y: parseInt(code[i]) });
      //Good data type for react-chartjs-2
      myObj["dataVis"].push({
        x: i + 1,
        y: code[i]
      });
      // console.log(myObj["data"]);
    }

    axios
      .post("http://localhost:5000/converted", myObj)
      .then(() =>
        this.setState({
          converted: [...this.state.converted, myObj]
        })
      )
      .catch(function(error) {
        console.log(error);
      });
    // console.log(phrase);
    console.log(myObj);
  };

  deleteCard = id => {
    console.log(id);
    axios.delete(`http://localhost:5000/converted/${id}`).then(() => {
      const { converted } = this.state;
      const filtered = converted.filter(c => c.id !== id);
      this.setState({ converted: filtered });
    });
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
        <ConvertSection
          converted={this.state.converted}
          deleteCard={this.deleteCard}
        />
        {/* <ChartVis converted={this.state.converted} /> */}
        {/* {this.state.converted.map(dt => (
          <Canvas points={dt.data} />
        ))} */}
      </div>
    );
  }
}

export default App;
