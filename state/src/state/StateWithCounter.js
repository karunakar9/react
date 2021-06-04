import React, { Component } from 'react'

class StateWithCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // when you want to execute console.log after setState method need to me kept in call back function
    increment(){
        this.setState({
            count:this.state.count+1
        },()=>console.log('counter',this.state.count))
    }

    render() {
        return (
            <div>
                <br></br>
                {this.state.count}
                <br></br>
                <button onClick={() => this.increment()}>Counter</button>
            </div>
        )
    }
}

export default StateWithCounter