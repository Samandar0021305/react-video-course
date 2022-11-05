import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(){
    super()
    this.state = {
        count:0
    }
  }
  increment = ()=>{
    this.setState = ({
        count: this.state.count + 1
    })
    console.log("clikc")
  }
    render() {
    return (
      <div>
    <button onClick={()=>this.increment()}>counter {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter