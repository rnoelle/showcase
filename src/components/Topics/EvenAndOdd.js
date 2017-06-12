import React, { Component } from 'react';

export default class EvenAndOdd extends Component{
  constructor() {
    super()
    this.state ={
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleInputChange(val) {
    this.setState({
      userInput:val
    })
  }
  handleButtonClick() {
    let evens = [];
    let odds = [];
    let input = this.state.userInput;
    input.split(',').forEach(el=> {
      if (Number(el) % 2 === 0) evens.push(parseInt(el, 10));
      if (Number(el) % 2 !== 0) odds.push(parseInt(el, 10));
    })
    this.setState({
      evenArray: evens,
      oddArray: odds,
      userInput: ''
    })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e)=> this.handleInputChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.handleButtonClick()}>Split</button>
        <span className="resultsBox">Evens:{ JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds:{ JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}
