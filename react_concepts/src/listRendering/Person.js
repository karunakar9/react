import React from 'react'

// function receiving a person object here
function Person({person}) {
    console.log(person)
    return (
        <div>
            <h1>ID:{person.id} Name:{person.name} Age:{person.age} SKill:{person.skill}</h1>
        </div>
    )
}

export default Person
