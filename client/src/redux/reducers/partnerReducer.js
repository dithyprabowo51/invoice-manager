const initialState = {
  partners: []
}

export const partnerReducer = (state = initialState, action) => {
  if (action.type === 'PARTNER/SET_PARTNERS') {
    return {
      ...state,
      partners: action.data
    }
  }
  return state
}