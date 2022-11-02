import React, { Component } from 'react'

class EventClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
    }
    handler(){
        this.setState({
            message : 'goodbye'
        })
        console.log(this);
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* <button onClick={this.handler.bind(this)}>click</button> */}
        <button onClick={this.handler.bind()}>click</button>
    
      </div>
    )
  }
}

export default EventClick