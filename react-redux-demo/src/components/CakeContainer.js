import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    console.log("dispatch")
    return {
        buyCake: () => dispatch(buyCake(), console.log("dispatch cake"))
        //which dispatches the action creator
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
