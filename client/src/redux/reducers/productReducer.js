const initialState = {
  products: []
}

export const productReducer = (state = initialState, action) => {
  if (action.type === 'PRODUCT/SET_PRODUCTS') {
    return {
      ...state,
      products: action.data
    }
  }
  return state
}