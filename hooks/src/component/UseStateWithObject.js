import React,{useState} from 'react'


function UseStateWithObject() {
    const [name, setName] = useState({fistName:'',lastName:''})
    return (
        <div>
            <input 
            type='text'
            onChange={e=>setName({ ...name,fistName:e.target.value})}
            />

            <input 
            type='text'
            onChange={e=>setName({...name,lastName:e.target.value})}
            />
            <h2>Your Firstname is {name.fistName}</h2>
            <h2>Your Lastname is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>

        </div>
    )
}

export default UseStateWithObject
