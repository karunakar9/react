import React, { Component } from 'react'

class RenderingConditionally extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // 1. if else (Note:if else not else inside jsx)
        // if (this.state.isLoggedIn) {
        //     return <h1>Hello Karu</h1>
        // } else {
        //     return <h1>Hello Guest</h1>
        // }

        //2.Element Variable
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <h1>Hello Karu</h1>
        // } else {
        //     message = <h1>Hello Guest</h1>
        // }
        // return <div>{message}</div>

        //3.Terninary Condition operator (Note:we can write inside return )
        // return(
        //     this.state.isLoggedIn?
        // <h1>Hello Karu</h1>: <h1>Hello Guest</h1>
        // )

        //4.Short circuit operator &&
        return (this.state.isLoggedIn && <h1>Hello Karu</h1>)

    }
}

export default RenderingConditionally
