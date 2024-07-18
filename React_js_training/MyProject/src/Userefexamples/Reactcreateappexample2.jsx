import React, { Component } from 'react'

export default class Reactcreateappexample2 extends Component {
    constructor(){
        super();
        this.namefield = React.createRef();
   
        this.state={
            name:""
        }
    }
    handlesubmit=()=>{
        if(this.namefield.current.value.length < 4){
            alert("name must be 4 charecter requered")
        }
        else{
            console.log("all ok");
            this.setState({name: this.namefield.current.value})
        }
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='Enter name'  ref={this.namefield} />
        <button onClick={this.handlesubmit}>click</button>
      </div>
    );
  }
}
