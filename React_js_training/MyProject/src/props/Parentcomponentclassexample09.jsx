import React, { Component } from 'react'
import Childcomponentclassexample09 from './Childcomponentclassexample09'

export default class Parentcomponentclassexample09 extends Component {
    handleclick=()=>{
        alert("Clicked by user...")
    }
  render() {
    return (
      <div>
        <button onClick={this.handleclick}>Click here</button>
        <Childcomponentclassexample09 myfun={this.handleclick} subject="React js"></Childcomponentclassexample09>
      </div>
    )
  }
}
