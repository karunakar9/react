import React,{useContext} from 'react'
import { CountContext } from './Global'


function ComponentD() {
    const countObj=useContext(CountContext)
    console.log(countObj)
    return (
        <div>
            {/* Count - {countObj.countState} */}
            <button onClick={() => countObj.countDispatch('increment')}>Increment</button>
            <button onClick={() => countObj.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countObj.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
