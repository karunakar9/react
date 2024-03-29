import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus()
        
    }, [])
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}

export default FocusInput
