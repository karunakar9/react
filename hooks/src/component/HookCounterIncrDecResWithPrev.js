import React,{useState} from 'react'

function HookCounterIncrDecResWithPrev() {
    const initialState=0
    const [state, setstate] = useState(initialState)
   const incrementFive = ()=>{
        for (let index = 0; index < 5; index++) {
            setstate(prevState=>prevState+1)
            
        }
    }
    return (
        <div>
            {state}
            <button onClick={()=>setstate(prevState=>prevState+1)}>Increment</button>
            <button onClick={()=>setstate(prevState=>prevState-1)}>Decrement</button>
            <button onClick={()=>setstate(initialState)}>Reset</button>
            <button onClick={incrementFive}>IncrementFive 5</button>
        </div>
    )
}

export default HookCounterIncrDecResWithPrev
