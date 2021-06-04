import React from 'react'

const ChildGettingRefFromParent = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
}
)

export default ChildGettingRefFromParent
