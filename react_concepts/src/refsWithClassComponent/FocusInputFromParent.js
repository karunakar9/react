import React, { Component } from 'react'
import InputInChild from './InputInChild'

class FocusInputFromParent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <InputInChild ref={this.componentRef}/>
            <button onClick={this.clickHandler}>Click in Parent</button>
            </div>
        )
    }
}

export default FocusInputFromParent
