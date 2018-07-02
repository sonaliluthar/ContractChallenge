import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import firebase from "./firebase.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      details: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const contractRef = firebase.database().ref("contracts");
    const contract = {
      name: this.state.name,
      company: this.state.company,
      details: this.state.details
    };
    contractRef.push(contract);
    this.setState({
      name: "",
      company: "",
      details: ""
    });
  };

  // handleClick = e => {
  //   this.props.setClick(true);
  //   this.handleSubmit();
  //   //this.props.updateParent(this.state);
  // };

  render() {
    return (
      <div>
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <TextField
          hintText="Company"
          floatingLabelText="Company"
          onChange={e => this.setState({ company: e.target.value })}
        />
        <br />
        <TextField
          hintText="Contract Details"
          floatingLabelText="Contract Details"
          onChange={e => this.setState({ details: e.target.value })}
        />
        <br />
        <br />
        <FlatButton label="ADD CONTRACT" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default Form;
