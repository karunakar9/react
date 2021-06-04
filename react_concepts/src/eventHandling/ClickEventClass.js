import React, { Component } from 'react'

 class ClickEventClass extends Component {
    ClickHandler(){
        console.log("Click Event Class")
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Click Here</button>
            </div>
        )
    }
}

export default ClickEventClass