import React, { Component } from "react";
import {Typography } from "@material-ui/core";
import CounterControls from "./CounterControls"

export default class Counter extends Component {
  static defaultProps = { initialValue: 0, step: 1 };

  state = {
    value: this.props.initialValue,
  };

  //Public methods:
  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + this.props.step,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - this.props.step,
      };
    });
  };

  render() {
    return (
      <div>
        <Typography
          align="center"
          display="block"
          color="secondary"
          variant="h2"
        >
          {this.state.value}
        </Typography>
<CounterControls onIncrement = {this.handleIncrement} onDecrement = {this.handleDecrement}/>
      </div>
    );
  }
}
