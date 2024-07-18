import React, { Component } from 'react'

export default class Classcomp_colourchange extends Component {
    constructor() {
        super()
        this.state = {
            color : "pink"
        }
    }
    handlechange = () => {
        this.setState({
            color : this.state.color="blue"
        })
    }
    render() {
        return (
            <div>
                <div style={{width:"60px",height:"60px",border:"1px solid black",backgroundColor:this.state.color}}> {this.state.color}</div>
                <br />
                <button onClick={this.handlechange}>click</button>
            </div>
        )
    }
}
