import {
  LOG_IN_REQUEST, 
  LOG_IN_SUCCESS,
  SIGN_UP_REQUEST, 
  SIGN_UP_SUCCESS 
} from './actions'
import axios from 'axios'

export const loginRequest = (email) => ({
    type: LOG_IN_REQUEST,
    email
})

export function loginSuccess(loginUserData) {
  return { 
    type: LOG_IN_SUCCESS, 
    loginUserData,
    receivedAt: Date.now()
  }
}

export const loginUser = (email, password) => dispatch => {
  dispatch(loginRequest(email))
  axios.post("http://localhost:9001/auth/login", {
    email,
    password
  }).then(({ data }) => {
    console.log('data: ', data)
    localStorage.setItem('access_token', data.token)
    dispatch(loginSuccess(data.user))
  }).catch(error => console.error(error))
}

export const signupRequest = (email) => ({
    type: SIGN_UP_REQUEST,
    email
})

export function signupSuccess(signupUserData) {
  return { 
    type: SIGN_UP_SUCCESS, 
    signupUserData,
    receivedAt: Date.now()
  }
}

export const signupUser = (firstName, lastName, email, username, password) => dispatch => {
  dispatch(signupRequest(email))
  axios.post("http://localhost:9001/auth/signup", {
    firstName,
    lastName,
    email,
    username,
    password
  }).then( ({ data }) => {
    console.log('data: ', data)
    localStorage.setItem('access_token', data.token)
    dispatch(signupSuccess(data.user))
  }).catch(error => console.error(error))
}