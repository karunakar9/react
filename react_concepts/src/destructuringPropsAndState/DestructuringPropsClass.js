import React, { Component } from 'react'

 class DestructuringPropsClass extends Component {
    render() {
        const {name,purpose}=this.props
        return (
            <div>
                  <div>Name: {name} Purpose:{purpose}</div>
            </div>
        )
    }
}
export default DestructuringPropsClass