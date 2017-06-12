import React, { Component } from 'react';

export default class Palindrome extends Component{
  constructor() {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleInputChange(val) {
    this.setState({
      userInput: val
    })
  }
  checkPalindrome() {
    let word = this.state.userInput.split(' ').join('').toLowerCase()
    for (var i = 0; i < word.length; i++) {
      if (word[i] !== word[word.length - (1 + i)]) {
        return this.setState({
          palindrome: 'false'
        })
      }
    }
    this.setState({
      palindrome: 'true'
    })
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={e=>this.handleInputChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.checkPalindrome()}>Check</button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    )
  }
}
