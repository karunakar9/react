import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    //focus will takes place at refresh time if we do uncomment out the below code snippet
    componentDidMount() {
        console.log("componentDidMount")
        this.inputRef.current.focus()
        console.log(this)
    }

    //onclick will show up input field value in alert
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        console.log("render")
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefsDemo
