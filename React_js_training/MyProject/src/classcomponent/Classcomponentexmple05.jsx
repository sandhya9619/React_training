import React, { Component } from 'react'

export default class Classcomponentexmple05 extends Component {
constructor(){
    super();
    this.state ={
        isvisble:true
    }
}

handleevent=()=>{
    this.setState({isvisble:!this.state.isvisble})
}
  render() {
    return (
      <div>
        {
            this.state.isvisble
            ?
            <h1>hello</h1>
            :
            <h1>hiii</h1> 
                   }
        <button onClick={this.handleevent}>Click here</button>
      </div>
    )
  }
}
