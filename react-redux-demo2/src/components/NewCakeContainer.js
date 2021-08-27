import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
//input value example
function NewCakeContainer(props) {
    const [number, setNumber] = useState(0)
    console.log("NewCakeContainer:",props)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input value={number} onChange={e=>setNumber(e.target.value)} ></input>
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("mapStateToProps in NewCakeContainer:",state)
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    console.log("dispatch in NewCakeContainer")
    return {
        buyCake: (num) => dispatch(buyCake(num), console.log("dispatch cake"))
        //which dispatches the action creator
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
