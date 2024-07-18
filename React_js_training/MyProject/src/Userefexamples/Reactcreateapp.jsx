import React, { Component } from 'react'

export default class Reactcreateapp extends Component {
    constructor(props){
        super(props);
        this.inputref =React.createRef();
    }

    handlebutton=()=>{
        this.inputref.current.focus();
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputref} placeholder='Enter name' />
        <button onClick={this.handlebutton}>click</button>
      </div>
    )
  }
}
