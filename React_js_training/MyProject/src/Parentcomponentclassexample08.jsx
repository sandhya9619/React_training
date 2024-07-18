import React, { Component } from 'react'
import Childcomponentclassexample08 from './Childcomponentclassexample08'

export default class Parentcomponentclassexample08 extends Component {
  render() {
    return (
      <div>
        <Childcomponentclassexample08 subject="flutter" marks="90"></Childcomponentclassexample08>
      </div>
    )
  }
}
