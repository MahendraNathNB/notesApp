import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { useReducer } from 'react'


const configureStore = () =>{
    const store = createStore(combineReducers({
        user : userReducer,
        notes : notesReducer,
        categories : categoryReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore 
