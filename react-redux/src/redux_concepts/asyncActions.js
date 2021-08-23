const redux=require('redux')
const createStore=redux.createStore

const intialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const FetcchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const FetcchUsersSuccess = () => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const FetcchUsersFailure = () => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users:action.payload,
                error:''
            }
            case FETCH_USERS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    users:[],
                    error:action.payload
                }

        default:
            break;
    }
}
const store =createStore(reducer)