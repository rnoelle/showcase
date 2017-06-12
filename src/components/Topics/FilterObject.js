import React, { Component } from 'react';

export default class FilterObject extends Component{
  constructor() {
    super()
    this.state = {
      unfilteredArray: [{
        brown: true,
        yellow: false
      },
      {
        brown: false,
        yellow: false
      },
      {
        brown: true,
        yellow: true
      },
      {
        brown: false,
        yellow: true
      }],
      userInput: '',
      filteredArray: []
    }
  }

  handleInputChange(val) {
    this.setState({
      userInput: val
    })
  }

  filter() {
    let originalArray = [...this.state.unfilteredArray];
    let filteredArray = originalArray.filter(el=>{
      return el[this.state.userInput]
    })
    this.setState({
      filteredArray: filteredArray
    })
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"></span>
        <input className="inputLine" onChange={e=>this.handleInputChange(e.target.value)}/>
        <button className="confirmationButton" onClick={()=>this.filter()}>Filter</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}
