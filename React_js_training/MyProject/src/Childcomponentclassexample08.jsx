import React, { Component } from 'react'

export default class Childcomponentclassexample08 extends Component {

  render() {
    const {subject,marks} = this.props;
    return (
      <div>
        <h3>subject ={subject}</h3>
        <h3>marks ={marks}</h3>
      </div>
    )
  }
}
