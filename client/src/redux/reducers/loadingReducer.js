const initialState = {
  isLoading: false
}

export const loadingReducer = (state = initialState, action) => {
  if (action.type === 'LOADING/SET_ISLOADING') {
    return {
      ...state,
      isLoading: action.data
    }
  }
  return state
}