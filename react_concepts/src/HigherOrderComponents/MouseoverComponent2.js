import React, { Component } from 'react'
import withCounter2 from './withCounter2'

class MouseoverComponent2 extends Component {
    render() {
        console.log('MouseoverComponent render')
        const {counter,handler}=this.props
        return (
            <div>
                <h3 onMouseOver={handler}>{this.props.learner} mouseovered {counter} times</h3>
            </div>
        )
    }
}

export default withCounter2(MouseoverComponent2,20)
