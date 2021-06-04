import React, { Component } from 'react'
import ChildGettingRefFromParent from './ChildGettingRefFromParent'

class ForwardingRefFromParent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }

    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ChildGettingRefFromParent ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click to pass ref</button>
            </div>
        )
    }
}

export default ForwardingRefFromParent
