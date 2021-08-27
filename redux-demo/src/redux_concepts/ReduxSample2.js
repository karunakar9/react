const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS='BUY_ICECREAMS'

// action
// {
//     type: BUY_CAKE,
//     info: 'First redux action'
// }
// action invoker
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAMS,
        info: 'First redux action'
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIceCreams:20
}

const reducer = (state= initialState, action) => {
    console.log('reduer called')
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            case BUY_ICECREAMS:
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams - 1
                }
    
        default:return state
    }
}

const store = createStore(reducer)
console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()