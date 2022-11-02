import React, { Component } from 'react'
import Child from './Child'

 class Parents extends Component {
constructor(){
    super()
    this.state = {
        message : 'hello'
    }
    this.handler = this.handler.bind(this)
}

handler(Child){
 alert(`parent ${this.state.message}  from ${Child}`)
}
    
  render() {
    return (
      <div>
       <Child handlerParents={this.handler}/>   
      </div>
    )
  }
}

export default Parents