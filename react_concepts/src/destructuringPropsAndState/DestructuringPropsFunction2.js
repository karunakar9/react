import React from 'react'

const DestructuringPropsFunction2 = props => {
    const {name,purpose}=props
    return (
        <div>Name: {name} Purpose:{purpose}</div>
    )
}
export default DestructuringPropsFunction2