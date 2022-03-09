import React, { Component } from 'react'

class PropsWithClass extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name} and the Purpose :{this.props.purpose}</p>
                <p>Retrieve child :{this.props.children}</p>
            </div>
        )
    }
}
export default PropsWithClass