import React from 'react'

function NameList() {
    // Method-1
    // const names=['mat','phy','che']
    // return (
    //     <div>
    //        <h3>{names[0]}</h3> 
    //        <h3>{names[1]}</h3> 
    //        <h3>{names[2]}</h3> 
    //     </div>
    // )

    //Method-2
    // const names = ['mat', 'phy', 'che']
    // return (
    //     <div>
    //         {
    //             names.map(name => <h1>{name}</h1>)
    //         }
    //     </div>
    // )

    //Method-3
    const names = ['mat', 'phy', 'che']
    const namelist = names.map(name => <h1>{name}</h1>)
    return (
        <div>
            {namelist }
        </div>
    )
}

export default NameList
