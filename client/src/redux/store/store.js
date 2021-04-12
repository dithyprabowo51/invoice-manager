import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import { partnerReducer } from '../reducers/partnerReducer.js'
import { loadingReducer } from '../reducers/loadingReducer.js'

const rootReducer = combineReducers({
  partner: partnerReducer,
  loading: loadingReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))