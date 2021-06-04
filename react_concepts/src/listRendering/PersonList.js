import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'karu',
            age: 25,
            skill: 'java'
        },
        {
            id: 2,
            name: 'srinu',
            age: 20,
            skill: 'python'
        },
        {
            id: 3,
            name: 'venu',
            age: 27,
            skill: 'c++'
        }
    ]
    // Note:enable method 1 or 2 a single line
    // method-1
    // const personlist = persons.map(person => <h1>ID:{person.id} Name:{person.name} Age:{person.age} SKill:{person.skill}</h1>)
    // method-2
    const personlist = persons.map(person => <Person key={person.id} person={person}/>)


    return (
        <div>
            {personlist}
        </div>
    )
}

export default PersonList
