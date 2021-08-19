import React,{useState} from 'react'
import MousePositionUnmounting from './MousePositionUnmounting'

function MousemoveUnmounting() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display&& <MousePositionUnmounting/>}
        </div>
    )
}

export default MousemoveUnmounting
