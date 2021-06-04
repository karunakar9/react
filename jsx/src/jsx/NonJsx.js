import React from 'react'

function NonJsx() {
    return (
        
            React.createElement('div',{id:'id1',className:'NameOfClass'},React.createElement('h1',null,'Hello nonJSX(function)'))

    )
}

export default NonJsx
