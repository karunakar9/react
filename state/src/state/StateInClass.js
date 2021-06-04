import React, { Component } from 'react'
class StateInClass extends Component {
    constructor() {
        super()
        this.state = {
            message: "Plesse Subscribe to my channel"
        }
    }
    ChangeContent() {
        this.setState({
            message: "Thanks for subscribing"
        }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* we should have this keyword to call a method */}
                <button onClick={() => this.ChangeContent()}>Subscribe</button>
            </div>
        )
    }
}

export default StateInClass