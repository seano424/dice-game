import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

export default class RollDice extends Component {
  state = {
    change: 1,
    num1: "one",
    num2: "two",
    numbers: ["one", "two", "three", "four", "five", "six"],
  };

  roll = () => {
    const rando = Math.floor(Math.random() * 6);
    return this.state.numbers[rando];
  };

  handleRoll = () => {
    this.setState({
      num1: this.roll(),
      num2: this.roll(),
    });
  };

  render() {
    return (
      <>
        {this.state.num1 === this.state.num2 ? (
          <h1>You win!</h1>
        ) : (
          <div style={{ display: "flex" }}>
            <Die face={this.state.num1} />
            <Die face={this.state.num2} />
          </div>
        )}
        <div className="RollDice">
          <button onClick={this.handleRoll}>Roll Dice</button>
        </div>
      </>
    );
  }
}
