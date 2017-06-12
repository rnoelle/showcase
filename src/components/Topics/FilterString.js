import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      unfilteredArray: ['benjamin', 'bonnie', 'children', 'joy', 'college', 'wonder', 'seth', 'melty', 'rental'],
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
    let filteredArray = this.state.unfilteredArray.filter(el=>{
      return el.indexOf(this.state.userInput) > -1;
    })
    this.setState({
      filteredArray: filteredArray
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" onChange={e=>this.handleInputChange(e.target.value)}/>
        <button className="confirmationButton" onClick={()=>this.filter()}>Filter</button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}
