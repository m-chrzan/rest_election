let initialState = {
  locative: ""
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.data
    default:
      return state
  }
}
