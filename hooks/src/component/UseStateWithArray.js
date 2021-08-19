import React,{useState} from 'react'

function UseStateWithArray() {
    const [items, setItems] = useState([])
    const addItem =()=>{
        setItems([...items,Math.random()*10])
        console.log(items)
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            {items.map(eachitem=><div key={eachitem.id}>{eachitem}</div>)}
        </div>
    )
}

export default UseStateWithArray
