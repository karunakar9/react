import React, { Component } from 'react'
import withCounter from './withCounter'

class MouseoverComponent extends Component {
    render() {
        console.log('MouseoverComponent render')
        const {counter,handler}=this.props
        return (
            <div>
                <h3 onMouseOver={handler}>mouseovered {counter} times</h3>
            </div>
        )
    }
}

export default withCounter(MouseoverComponent)
