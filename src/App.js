import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Form from "./Form";
import firebase from "./firebase.js";
// import Display from "./Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: []
      // isClicked: false
    };
  }

  // updateParent = newValue => {
  //   let currentArray = this.state.contracts;
  //   currentArray.push(newValue);
  //   this.setState({ contracts: currentArray });
  // };

  // setClick = torf => {
  //   this.setState({ isClicked: torf });
  // };

  componentDidMount() {
    const contractRef = firebase.database().ref("contracts");
    contractRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let newState = [];
      for (let con in contracts) {
        newState.push({
          name: contracts[con].name,
          company: contracts[con].company,
          details: contracts[con].details
        });
      }
      this.setState({
        contracts: newState
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>ADD CONTRACTS HERE</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <h2>Please input your contract details:</h2>
            <MuiThemeProvider>
              <Form
                // updateParent={this.updateParent}
                setClick={this.setClick}
                // {...this.state}
              />
            </MuiThemeProvider>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {this.state.contracts.map(item => {
                  return (
                    <li>
                      Name: {item.name}
                      <br />
                      Company: {item.company}
                      <br />
                      Contract details: {item.details}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
