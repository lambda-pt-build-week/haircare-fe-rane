import axios from 'axios';

export const VERIFY_USER = 'VERIFY_USER';

export const setAuth = token => {
  token && localStorage.getItem('user') ?
  axios.defaults.common['Authorization'] = `${token}`
  : delete axios.defaults.headers.common['Authorization']
}

export const verifyUser = user => {
  return {
    type: VERIFY_USER,
    payload: user
  }
}
