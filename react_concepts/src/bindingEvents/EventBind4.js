import React, { Component } from 'react'
class EventBind4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello"
        }
    }
    ClickHandler=()=> {
        this.setState({
            message: "Clicked"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Any thing from the below two button elements will work as because using  arrow function */}
                <button onClick={() => this.ClickHandler()}>Click Here</button>
                {/* <button onClick={this.ClickHandler}>Click Here</button> */}
            </div>
        )
    }
}

export default EventBind4
