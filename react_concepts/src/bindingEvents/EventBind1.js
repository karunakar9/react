import React, { Component } from 'react'

 class EventBind1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hello"
         }
     }
     clickHandler(){
         this.setState({
             message:"Clicked"
         })
         console.log(this)
     }
     
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click Here</button>
            </div>
        )
    }
}

export default EventBind1
