import React, { Component } from 'react'
import withCounter2 from './withCounter2'

class ClickComponent2 extends Component {
 
    render() {
        console.log('ClickComponent render')
        const {handler,counter}=this.props
        return (
            <div>
                <button onClick={handler}>{this.props.learner} Clicked {counter} times</button>
            </div>
        )
    }
}

export default withCounter2(ClickComponent2,10)
