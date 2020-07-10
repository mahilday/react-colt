import {combineReducers} from 'redux'
import authReducer from './authReducer'
import foodReducer from './foodReducer'
// import showfoodsReducer from './showfoodsReducer'
import {firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    foods: foodReducer,
    firestoredb: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;