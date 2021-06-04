import React from 'react'

function ChildComponent(props) {
     console.log(props)
    return (
        <div>
            <button onClick={props.greetHandler}>Click to call parent method from child</button>
        </div>
    )
}

export default ChildComponent
