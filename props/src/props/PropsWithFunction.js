import React from 'react'

const PropsWithFunction = (props) => {

    return (
        <div>
            <p>Name: {props.name} and the Purpose :{props.purpose}</p>
            <p>Retrieve child :{props.children}</p>
        </div>
    )
}

export default PropsWithFunction