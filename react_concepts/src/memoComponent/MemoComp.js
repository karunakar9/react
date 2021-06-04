import React from 'react'

function MemoComp() {
    console.log('**Memo Component with React.Memo(MemoComp)')
    return (
        <div>
            Memo component
        </div>
    )
}

export default React.memo(MemoComp)
