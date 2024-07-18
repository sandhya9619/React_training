import React, { Component } from 'react'

export default class Classcomponent02 extends Component {
    constructor(){
        super();
        this.state={
            number : 30
        }
    }
  render() {
    return (
      <div>
        <h1>number={this.state.number}</h1>
      </div>
    )
  }
}
