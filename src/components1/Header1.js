import { Component } from "react";

class Header1 extends Component{
    constructor(){
        super()
        this.state = {
            color:'red'
        }
    }
    render(){
        return(
            <>
              <h1 style={this.state.color}>hello  {this.props.name}</h1>
            </>
        )
    }
}

export default Header1