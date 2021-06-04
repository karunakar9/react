import React, { Component } from 'react'

class HoverCounter extends Component {
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
            <h2 onMouseOver={incrementCounter}>Clicked {counter} times</h2>
        )
    }
}

export default HoverCounter
