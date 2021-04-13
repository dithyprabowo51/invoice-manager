import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import { partnerReducer } from '../reducers/partnerReducer.js'
import { loadingReducer } from '../reducers/loadingReducer.js'
import { purchaseInvoiceReducer } from '../reducers/purchaseInvoiceReducer.js'
import { productReducer } from '../reducers/productReducer.js'

const rootReducer = combineReducers({
  partner: partnerReducer,
  loading: loadingReducer,
  purchaseInvoice: purchaseInvoiceReducer,
  product: productReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))