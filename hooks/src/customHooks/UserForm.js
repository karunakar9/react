import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {
    // const [firstName, setfirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [firstName,bindFirstName,ResetFirstName]=useInput('')
    const [lastName,bindLastName,ResetLastName]=useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        ResetFirstName()
        ResetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Fist Name</label>
                    {/* <input value={firstName} onChange={e => setfirstName(e.target.value)} type="text" /> */}
                    <input {...bindFirstName} type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    {/* <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" /> */}
                    <input {...bindLastName} type="text" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
