import { createStore, combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import demoReducer from './reducers/demoReducers'

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
	auth: authReducer,
	demo: demoReducer,
})

// Create the Redux store with the root reducer
const store = createStore(rootReducer)

export default store
