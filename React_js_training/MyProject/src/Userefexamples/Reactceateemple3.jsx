import React, { Component } from 'react'

export default class Reactceateemple3 extends Component {
    constructor(){
        super();
        this.inpref= React.createRef();

    }

    handlebutton=()=>{
        this.inpref.current.style.color ="green"
        this.inpref.current.readOnly = !this.inpref.current.readOnly()
    }
  render() {
    return (
      <div><input type="text" placeholder='Enter name' ref={this.inpref}/>
      <button onClick={this.handlebutton}>click</button>
      </div>
    )
  }
}
