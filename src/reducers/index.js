import { FETCH_STYLISTS, FETCH_SUCCESS, ADD_STYLIST, ADD_SUCCESS, FAILURE } from '../actions';

const initialState = {
  stylists: [],
  fetchStylists: false,
  addStylist: false,
  updateStylist: false,
  deleteStylist: false,
  error: null
}

export const stylistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STYLISTS:
    return {
      ...state,
      error: null,
      fetchStylists: true
    }
    case FETCH_SUCCESS:
    return {
      ...state,
      fetchStylist: false,
      stylists: action.payload
    }
    case ADD_STYLIST:
    return {
      ...state,
      addStylist: true
    }
    case ADD_SUCCESS:
    return {
      ...state,
      stylists: action.payload
    }
    case FAILURE:
    return {
      ...state,
      fetchStylists: false,
      error: action.payload
    }
    default:
    return state;
  }
}
