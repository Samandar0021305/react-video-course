import React, { Component } from 'react'

 
class UserGreat extends Component {
    constructor(){
        super()
        this.state = {
            inLogin : true
        }
    }
  render() {
    // let message;
    // if(this.state.inLogin){
    //     message = <div>hello guist</div>
    // }else{
    //     message = <div>welcome Vishvas</div>
    // }

    // return <div>{message}</div>

    return(
        this.state.inLogin ? 
        <div>welcome vioshvas</div> 
        :
        <div>hello guist</div>
    )
    // return (
    // )
  }
}

export default UserGreat