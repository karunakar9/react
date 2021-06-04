import React from 'react'

const NonJsx2 = () => {
    return (
        React.createElement('div', { id: 'id1', className: 'NameOfClass' }, React.createElement('h1', null, 'Hello nonJSX2(ArrowFunction)'))
    )
}

export default NonJsx2
