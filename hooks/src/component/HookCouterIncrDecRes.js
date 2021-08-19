import React,{useState} from 'react'

function HookCouterIncrDecRes() {
    const initialState=0
    const [state, setstate] = useState(initialState)
    return (
        <div>
            {state}
            <button onClick={()=>setstate(state+1)}>Increment</button>
            <button onClick={()=>setstate(state-1)}>Decrement</button>
            <button onClick={()=>setstate(initialState)}>Reset</button>
        </div>
    )
}

export default HookCouterIncrDecRes
