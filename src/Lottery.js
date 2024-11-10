import React, { Component } from "react";
import Ball from "./Ball.js";

class Lottery extends Component {
  static defaultProps = {
    title: "Şans Oyunu-Bul bakalım!",
    maxBalls: 10,
    maxNum: 59,
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls }),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  generete() {
    this.setState((currState) => ({
      nums: currState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generete();
  }
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick} className="btn">
          Günün Şanslı Sayıları!
        </button>
      </section>
    );
  }
}

export default Lottery;
