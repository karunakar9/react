import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
        // setCount(prevState =>prevState+1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])//Note-1:dependency list 'count' is applied so any change in count variable will call useEffect()
    //Note-2:if depency list is empty it won't call useEffect() eventhough having changes in count variable
    //Note-3:IMP:if we want dependency list a empty make use of prevState in setCount() this will works fine for this uncomment the prevstate setcout and make dependency list empty
    
    /*concept-2:
    if we want to call a function inside useEffect() make sure funtion definition also should me available in useEffect funtion itself
    sample:
    function dosomething(){
        console.log(pros)
    }
    desomething()
    */
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
