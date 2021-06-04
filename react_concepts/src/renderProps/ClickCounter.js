import React, { Component } from 'react'

class ClickCounter extends Component {
//Commented out duplicate code in HoverCounter and ClickCounter

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return ({ count: prevState.count + 1 })
    //     })
    // }


    render() {
        const {counter,incrementCounter}=this.props
        return (
            <button onClick={incrementCounter}>Clicked {counter} times</button>
        )
    }
}

export default ClickCounter
