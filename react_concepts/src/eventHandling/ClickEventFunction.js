import React from 'react'

 function ClickEventFunction() {
     function ClickHandler() {
         console.log("Click Event Function")
     }
    return (
        <div>
            {/* if you a add parenthsesis i.e ClickHandler()  it will be a 'function call' not 'function'
            means at the time of loading function will be called
             button won't work even if clicking  */}
            <button onClick={ClickHandler}>Click Here</button>
        </div>
    )
}

export default ClickEventFunction