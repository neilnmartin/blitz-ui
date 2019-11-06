import axios from 'axios';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'


export function loginUser(email, password) {

  return { type: LOG_IN, email, password }
}

export function signUpUser(email, username, password, firstName, lastName) {
  return { type: SIGN_UP, email, username, password, firstName, lastName }
}