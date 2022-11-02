import React, { Component } from 'react'

 class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.handlerParents('this is clicked')}>click</button>
      </div>
    )
  }
}

export default Child