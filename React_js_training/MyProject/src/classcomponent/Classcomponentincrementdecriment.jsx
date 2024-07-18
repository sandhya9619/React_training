import React, { Component } from 'react'

export default class Classcomponentincrementdecriment extends Component {
    constructor(){
        super()
        this.state={
            counter:10,
            name:"sandhya"
        }
    }

    handleclick=()=>{
        this.setState({counter: this.state.counter + 1})
    }

    handledecrement=()=>{
        this.setState({counter:this.state.counter - 1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      <h1>  {this.state.counter}</h1>
      <button onClick={this.handleclick}>increments</button>
      <button onClick={this.handledecrement}>decrment</button>
      </div>
    )
  }
}
