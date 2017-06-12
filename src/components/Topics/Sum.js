import React, { Component } from 'react';

export default class Sum extends Component{
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      sum: null
    }
  }

  handleInputChange(val, num) {
    console.log(val, num);
    console.log(typeof val, typeof num);
    if (num === 1) {
      this.setState({
        num1: parseInt(val, 10),
        sum: Number(val) + this.state.num2
      })
    } else if (num === 2) {
      this.setState({
        num2: parseInt(val, 10),
        sum: Number(val) + this.state.num1
      })
    }

  }



  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={e=>this.handleInputChange(e.target.value, 1)}/>
        <input className="inputLine" onChange={e=>this.handleInputChange(e.target.value, 2)}/>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    )
  }
}
