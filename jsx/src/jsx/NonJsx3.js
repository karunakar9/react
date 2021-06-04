import React, { Component } from 'react'

class NonJsx3 extends Component {
    render() {
        return (
          
                React.createElement('div', { id: 'id1', className: 'NameOfClass' }, React.createElement('h1', null, 'Hello nonJSX2(Class)'))
        )
    }
}

export default NonJsx3