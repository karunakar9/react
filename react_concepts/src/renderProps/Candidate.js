import React, { Component } from 'react'

export class Candidate extends Component {
    render() {
        return (
            // Mehtod-1
            // <div> {this.props.name} </div>

            // Mehtod-2 Here we are using to call function with 'name()' not with 'name' ref
            // <div> {this.props.name()} </div>

            // Mehtod-3
            <div> {this.props.name('karu:3')} </div>

            // Mehtod-4
            // <div> {this.props.name(false)} </div>

            // Mehtod-5
            // <div> {this.props.render(true)} </div>
            
        )
    }
}

export default Candidate
