import React from 'react'

function Button({handleClick,children}) {
    console.log(`Rendering Text ${children}`)
    return (
        <div>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default React.memo(Button)
