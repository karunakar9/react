import React from 'react'

function ChildComponent2(props) {
    return (
        <div>
            {/* If u want to pass parameter to parent method make use of arrow function */}
            <button onClick={()=>props.greetHandler('childParam')}>Click to call parent method with passing param's</button>
        </div>
    )
}

export default ChildComponent2
