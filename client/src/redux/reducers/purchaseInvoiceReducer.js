const initialState = {
  invoices: []
}

export const purchaseInvoiceReducer = (state = initialState, action) => {
  if (action.type === 'PURCHASE/SET_INVOICES') {
    return {
      ...state,
      invoices: action.data
    }
  }
  return state
}