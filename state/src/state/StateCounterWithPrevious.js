import React, { Component } from 'react'

class StateCounterWithPrevious extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState(
        //     (prevState) => {
        //         return ({
        //             count: prevState.count + 1
        //         })
        //     }
        //     , console.log('counter', this.state.count))
        // 
        // Note:Below is the snippet to use Arrow function without {return}  if it has single statement
            this.setState(
                (prevState) => ({
                    count: prevState.count + 1
                })
            ,console.log('counter', this.state.count))

    }
    fiveIncrement() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <br></br>
                {this.state.count}
                <br></br>
                <button onClick={() => this.fiveIncrement()}>Counter</button>
            </div>
        )
    }
}

export default StateCounterWithPrevious