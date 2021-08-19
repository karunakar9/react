import React from 'react'
import './myStyleSheet.css'
// Note:Enable methods depends on using props
// Method-1:
// function StyleSheets() {
//     return (
//         <div>
//             <h1 className='primary'>Karu</h1>
//         </div>
//     )
// }

// // Method-2:
function StyleSheets(props) {
    let className = props.primary?'primary':''
    return (
        <div>
            <h1 className={className}>Karu</h1>
        </div>
    )
}
// Method-2 B with two classes of css:
// function StyleSheets(props) {
//     let className = props.primary?'primary':''
//     return (
//         <div>
//             <h1 className={`${className} font-xl`}>Karu</h1>
//         </div>
//     )
// }

export default StyleSheets
