import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

export default class RollDice extends Component {
  state = {
    num1: "one",
    num2: "two",
    numbers: ["one", "two", "three", "four", "five", "six"],
    rolling: false,
  };

  roll = () => {
    const newDie1 = Math.floor(Math.random() * 6);
    const newDie2 = Math.floor(Math.random() * 6);
    this.setState({
      num1: this.state.numbers[newDie1],
      num2: this.state.numbers[newDie2],
      rolling: true,
    });
    setTimeout(() => {
      this.setState({
        rolling: false,
      });
    }, 1000);
  };

  handleGoAgain = () => {
    this.setState({
      num1: "one",
      num2: "two"
    })
  }

  render() {
    return (
      <>
        {this.state.num1 === this.state.num2 ? (
          <div className="RollDice">
            <h1>You win!</h1>
            <button onClick={this.handleGoAgain}>Go Again</button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex" }}>
              <Die face={this.state.num1} rolling={this.state.rolling} />
              <Die face={this.state.num2} rolling={this.state.rolling} />
            </div>
            <div className="RollDice">
              <button disabled={this.state.rolling} onClick={this.roll}>
                {this.state.rolling ? "Rolling" : "Roll dice"}
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
