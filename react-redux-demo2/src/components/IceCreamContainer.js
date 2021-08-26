import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    console.log("IceCreamContainer:",props)
    return (
        <div>
            <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy iceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("mapStateToProps in IceCreamContainer:",state)
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = dispatch => {
    console.log("dispatch")
    return {
        buyIceCream: () => dispatch(buyIceCream(), console.log("dispatch icecream"))
        //which dispatches the action creator
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
