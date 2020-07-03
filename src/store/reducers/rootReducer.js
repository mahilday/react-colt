import {combineReducers} from 'redux'
import authReducer from './authReducer'
import foodReducer from './foodReducer'
// import showfoodsReducer from './showfoodsReducer'
import {firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    foods: foodReducer,
    firestoredb: firestoreReducer
})

export default rootReducer;