import React,{useState,useEffect} from 'react'

function UseEffectAfterRender() {
    const [count, setCount] = useState(0)
    //useEffect is replacement of componentDidMount and componentDidUpdate
    useEffect(()=>{
        document.title=`Clicked button ${count} times`
    },console.log('useEffect with call intially and also renders if any changes in the doc'))
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Clicked button {count} times</button>
        </div>
    )
}

export default UseEffectAfterRender
