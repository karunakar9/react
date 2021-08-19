import React,{useState,useEffect} from 'react'

function MousePositionUnmounting() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition =(e)=>{
        console.log('mousemovement called')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('UseEffect called')
        window.addEventListener('mousemove',logMousePosition)
        //for unmounting we need to add return code
        return () => {
            console.log('Component Unmounted Successfully')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])//empty array in callback used to stop calling useEffect everytime on mousemove
    return (
        <div>
            X- {x} Y- {y}
        </div>
    )
}

export default MousePositionUnmounting
