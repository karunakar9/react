import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickComponent extends Component {
 
    render() {
        console.log('ClickComponent render')
        const {handler,counter}=this.props
        return (
            <div>
                <button onClick={handler}>Clicked {counter} times</button>
            </div>
        )
    }
}

export default withCounter(ClickComponent)
