import React,{useState,useEffect} from 'react'

function ConditionallyRunEffects() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //useEffect is replcement of componentDidMount and componentDidUpdate
    useEffect(()=>{
        document.title=`Clicked button ${count} times`
        console.log('document loading')
    },[count])
    //in call back function added array count this will stops the useEffect to execute multiple times while typing in input text
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Clicked button {count} times</button>
        </div>
    )
}

export default ConditionallyRunEffects
