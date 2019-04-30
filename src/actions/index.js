import axios from "axios";
export const FETCH_STYLISTS = "FETCH_STYLISTS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_STYLIST = "ADD_STYLIST";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const FAILURE = "FAILURE";


export const fetchStylists = () => {
  return dispatch => {
    dispatch({ type: FETCH_STYLISTS });
    axios
    .get('https://haircare.herokuapp.com/api/stylists')
    .then(
      res => dispatch({ type: FETCH_SUCCESS, payload: res.data})
    )
    .catch(
      err => dispatch({ type: FAILURE, payload: err })
    )
  }
}


export const addStylist = newStylist => dispatch => {
  dispatch({ type: ADD_STYLIST });
  axios
    .post("https://haircare.herokuapp.com/api/stylists", newStylist)
    .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
