let initialState = {
  region: {
    locative: "",
    votes: {},
    statistics: {
      ballots_valid: 0,
      ballots_given_out: 0
    },
    subregions: [],
    subregion_nominative: "",
    region_path: []
  },
  user: ""
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.data
    default:
      return state
  }
}
