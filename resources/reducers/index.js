import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import * as authentications from './authentications'

const rootReducer = (history) => combineReducers({
    ...authentications,
    router: connectRouter(history)
})

export default rootReducer
